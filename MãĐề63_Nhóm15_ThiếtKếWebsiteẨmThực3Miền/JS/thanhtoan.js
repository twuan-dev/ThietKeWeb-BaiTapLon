const SHIPPING_FEE = 0;
const PAYMENT_LABELS = {
    cod: 'Thanh toán khi nhận hàng (COD)',
    banking: 'Chuyển khoản Ngân hàng (QR)'
};

const VOUCHERS = {
    DISCOUNT10: { text: 'Giảm 10% tiền hàng', percent: 10 },
    FREESHIP: { text: 'Miễn phí vận chuyển', freeShip: true }
};

document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

function getCurrentUser() {
    const raw = localStorage.getItem('currentUser');
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return raw; }
}

function getCart() {
    try { return JSON.parse(localStorage.getItem('cart')) || []; } catch (e) { return []; }
}

function clearCart() {
    localStorage.removeItem('cart');
    localStorage.removeItem('appliedVoucher');
}

function getSubtotal(cart) {
    return cart.reduce((sum, i) => sum + (Number(i.price) * Number(i.quantity || 1)), 0);
}

function getVoucherCode() {
    const code = localStorage.getItem('appliedVoucher');
    return VOUCHERS[code] ? code : null;
}

function getTotals(cart) {
    const voucher = VOUCHERS[getVoucherCode()];
    const subtotal = getSubtotal(cart);
    const discount = voucher && voucher.percent ? Math.round(subtotal * voucher.percent / 100) : 0;
    const shipping = voucher && voucher.freeShip ? 0 : SHIPPING_FEE;
    return { subtotal, discount, shipping, total: subtotal - discount + shipping };
}

function formatVND(n) {
    return Number(n || 0).toLocaleString('vi-VN') + ' đ';
}

function getFormInfo() {
    return {
        name: document.getElementById('fullname').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        address: document.getElementById('address').value.trim(),
        note: document.getElementById('note').value.trim(),
        payment: document.querySelector('input[name="payment"]:checked').value
    };
}

function findOutOfStock(cart) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    return cart.find(item => {
        const prod = products.find(p => Number(p.id) === Number(item.id));
        return prod && Number(prod.stock) < Number(item.quantity);
    });
}

function renderTotals() {
    const cart = getCart();
    const { subtotal, discount, shipping, total } = getTotals(cart);
    const code = getVoucherCode();

    document.getElementById('checkout-subtotal').textContent = formatVND(subtotal);
    document.getElementById('discount-row').style.display = discount ? 'flex' : 'none';
    document.getElementById('checkout-discount').textContent = '- ' + formatVND(discount);
    document.getElementById('checkout-shipping').textContent = shipping ? formatVND(shipping) : 'Miễn phí';
    document.getElementById('checkout-total').textContent = formatVND(total);

    const input = document.getElementById('voucher-code');
    const message = document.getElementById('voucher-message');
    if (code) input.value = code;
    input.disabled = !!code;
    document.getElementById('btn-apply-voucher').textContent = code ? 'Bỏ mã' : 'Áp dụng';

    if (code) {
        message.textContent = `Đã áp dụng ${code}: ${VOUCHERS[code].text}`;
        message.className = 'voucher-message ok';
    } else {
        message.textContent = '';
        message.className = 'voucher-message';
    }
}

function renderCheckoutItems() {
    const cart = getCart();
    const listEl = document.getElementById('checkout-items-list');

    if (!cart.length) {
        listEl.innerHTML = '<p style="color: #666; text-align: center; margin: 10px 0;">Giỏ hàng trống!</p>';
        renderTotals();
        return;
    }

    listEl.innerHTML = cart.map(item => `
        <div class="order-summary-item">
            <span>${item.name} (x${item.quantity})</span>
            <span>${formatVND((Number(item.price) || 0) * (Number(item.quantity) || 1))}</span>
        </div>
    `).join('');

    renderTotals();
}

function updatePaymentUI() {
    const payment = document.querySelector('input[name="payment"]:checked')?.value || 'cod';
    const qrBox = document.getElementById('qr-code-box');
    qrBox.style.display = payment === 'banking' ? 'block' : 'none';

    if (payment === 'banking') generateQRCode();
}

function generateQRCode() {
    const total = getTotals(getCart()).total;
    const BANK_ID = 'VCB';
    const ACCOUNT_NO = '1046578934';
    const ACCOUNT_NAME = 'AM THUC 3 MIEN';

    document.getElementById('qr-code-img').src =
        `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-compact2.png?amount=${total}` +
        `&addInfo=${encodeURIComponent('THANH TOAN DON HANG')}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;
}

function autofillDefaultAddress() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const nameInput = document.getElementById('fullname');
    if (nameInput && !nameInput.value && currentUser.fullName) {
        nameInput.value = currentUser.fullName;
    }

    const addresses = JSON.parse(localStorage.getItem('addresses-' + currentUser.id)) || [];
    if (!addresses.length) return;

    const defaultAddr = addresses.find(addr => addr.default) || addresses[0];

    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');

    if (phoneInput && !phoneInput.value && defaultAddr.phone) {
        phoneInput.value = defaultAddr.phone;
    }

    if (addressInput && !addressInput.value && defaultAddr.detail) {
        addressInput.value = defaultAddr.detail;
    }

    if (nameInput && !nameInput.value && defaultAddr.name) {
        nameInput.value = defaultAddr.name;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const user = getCurrentUser();
    if (!user) {
        alert('Vui lòng đăng nhập trước khi tiến hành thanh toán!');
        localStorage.setItem('redirectAfterLogin', window.location.href);
        window.location.href = 'login.html';
        return;
    }

    autofillDefaultAddress();
    renderCheckoutItems();

    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', updatePaymentUI);
    });
    updatePaymentUI();

    document.getElementById('btn-apply-voucher').addEventListener('click', function () {
        const codeInput = document.getElementById('voucher-code');
        const entered = codeInput.value.trim().toUpperCase();

        if (getVoucherCode()) {
            localStorage.removeItem('appliedVoucher');
            codeInput.value = '';
            renderTotals();
            return;
        }

        if (!VOUCHERS[entered]) {
            const msg = document.getElementById('voucher-message');
            msg.textContent = 'Mã voucher không hợp lệ!';
            msg.className = 'voucher-message error';
            return;
        }

        localStorage.setItem('appliedVoucher', entered);
        renderTotals();
    });

    const confirmModal = document.getElementById('confirm-modal');

    document.getElementById('checkoutForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const info = getFormInfo();
        if (!info.name || !info.phone || !info.address) {
            alert('Vui lòng điền đầy đủ thông tin giao hàng!');
            return;
        }

        const cart = getCart();
        if (!cart.length) {
            alert('Giỏ hàng của bạn đang trống!');
            return;
        }

        const outItem = findOutOfStock(cart);
        if (outItem) {
            alert(`Món "${outItem.name}" không đủ số lượng trong kho. Vui lòng giảm số lượng!`);
            return;
        }

        document.getElementById('review-name').textContent = info.name;
        document.getElementById('review-phone').textContent = info.phone;
        document.getElementById('review-address').textContent = info.address;
        document.getElementById('review-note').textContent = info.note || '(Không có)';
        document.getElementById('review-payment').textContent = PAYMENT_LABELS[info.payment];
        document.getElementById('review-total').textContent = formatVND(getTotals(cart).total);

        confirmModal.style.display = 'flex';
    });

    document.getElementById('btn-cancel-order').addEventListener('click', function () {
        if (confirm('Bạn có chắc muốn hủy đơn hàng này? Giỏ hàng sẽ bị xóa.')) {
            clearCart();
            confirmModal.style.display = 'none';
            window.location.href = 'shop.html';
        }
    });

    document.getElementById('btn-edit-info').addEventListener('click', function () {
        confirmModal.style.display = 'none';
    });

    document.getElementById('btn-confirm-final').addEventListener('click', function () {
        const cart = getCart();
        if (!cart.length) return;

        const info = getFormInfo();
        const { subtotal, discount, shipping, total } = getTotals(cart);

        const newOrder = {
            id: 'DH' + Date.now().toString().slice(-6),
            date: new Date().toLocaleString('vi-VN'),
            customer: { name: info.name, phone: info.phone, address: info.address, note: info.note },
            items: cart,
            subtotal: subtotal,
            voucher: getVoucherCode(),
            discount: discount,
            shippingFee: shipping,
            total: total,
            paymentMethod: info.payment,
            status: 'pending'
        };

        const products = JSON.parse(localStorage.getItem('products')) || [];

        cart.forEach(item => {
            const prod = products.find(p => Number(p.id) === Number(item.id));
            if (prod) {
                prod.stock = Math.max(0, Number(prod.stock || 0) - Number(item.quantity || 1));
                prod.sold = (Number(prod.sold) || 0) + Number(item.quantity || 1);
                prod.revenue = (Number(prod.revenue) || 0) + ((Number(prod.price) || 0) * Number(item.quantity || 1));
            }
        });

        localStorage.setItem('products', JSON.stringify(products));

        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.unshift(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));

        clearCart();
        confirmModal.style.display = 'none';
        alert('Đặt hàng thành công! Cảm ơn bạn đã ủng hộ Ẩm Thực 3 Miền.');
        window.location.href = 'shop.html';
    });
});