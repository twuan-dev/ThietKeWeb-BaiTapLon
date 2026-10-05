// ========== KHỞI TẠO ==========

document.addEventListener('DOMContentLoaded', function() {
    // Áp dụng theme đã lưu
    applyTheme();
    
    if (typeof protectPage === 'function') {
        protectPage();
    }

    const currentUser = getCurrentUser();
    if (currentUser && currentUser.role === 'admin') {
        alert('❌ Trang này chỉ dành cho khách hàng! Bạn đang đăng nhập bằng tài khoản Quản trị viên, hệ thống sẽ chuyển về trang quản lý.');
        window.location.href = 'admin.html';
        return;
    }

    loadAccountData();
});

// ========== THEME SUPPORT ==========

function applyTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// ========== LẤY DỮ LIỆU TÀI KHOẢN ==========

function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function loadAccountData() {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Cập nhật thông tin cơ bản
    const usernameMini = document.getElementById('usernameMini');
    const infoFullName = document.getElementById('infoFullName');
    const infoUsername = document.getElementById('infoUsername');
    const infoEmail = document.getElementById('infoEmail');
    const infoCreatedAt = document.getElementById('infoCreatedAt');

    if (usernameMini) usernameMini.textContent = currentUser.fullName || '';
    if (infoFullName) infoFullName.textContent = currentUser.fullName || '';
    if (infoUsername) infoUsername.textContent = currentUser.username || '';
    if (infoEmail) infoEmail.textContent = currentUser.email || '';
    if (infoCreatedAt && currentUser.createdAt) {
        infoCreatedAt.textContent = new Date(currentUser.createdAt).toLocaleString('vi-VN');
    }

    // Load các tab dữ liệu phụ
    loadAddresses();
    loadOrders();
    loadWishlist();
}

// ========== SWITCH TAB ==========

function switchTab(tabName, eventObj) {
    const tabs = document.querySelectorAll('.account-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    const target = eventObj || (typeof event !== 'undefined' ? event.target : null);
    if (target) {
        const menuItem = target.closest('.menu-item');
        if (menuItem) {
            menuItem.classList.add('active');
        } else {
            target.classList.add('active');
        }
    }
}

// ========== THÔNG TIN CÁ NHÂN ==========

function toggleEditInfo() {
    const form = document.getElementById('editInfoForm');
    if (!form) return;

    if (form.style.display === 'none' || form.style.display === '') {
        const currentUser = getCurrentUser();
        if (currentUser) {
            const editFullName = document.getElementById('editFullName');
            const editEmail = document.getElementById('editEmail');
            if (editFullName) editFullName.value = currentUser.fullName || '';
            if (editEmail) editEmail.value = currentUser.email || '';
        }
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

function saveUserInfo() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const editFullNameEl = document.getElementById('editFullName');
    const editEmailEl = document.getElementById('editEmail');

    const newFullName = editFullNameEl ? editFullNameEl.value.trim() : '';
    const newEmail = editEmailEl ? editEmailEl.value.trim() : '';

    if (!newFullName) {
        showMessage('❌ Vui lòng nhập tên đầy đủ', 'error');
        return;
    }

    if (!newEmail) {
        showMessage('❌ Vui lòng nhập email', 'error');
        return;
    }

    // Cập nhật trong users list tổng
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);

    if (userIndex !== -1) {
        users[userIndex].fullName = newFullName;
        users[userIndex].email = newEmail;
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Cập nhật currentUser hiện tại
    currentUser.fullName = newFullName;
    currentUser.email = newEmail;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    showMessage('✅ Cập nhật thông tin thành công!', 'success');
    const form = document.getElementById('editInfoForm');
    if (form) form.style.display = 'none';

    loadAccountData();
}

// ========== ĐỊA CHỈ GIAO HÀNG (ĐÃ HOÀN THIỆN ĐẦY ĐỦ PHƯỜNG/XÃ) ==========


function onRegionChange() {
    const regionEl = document.getElementById('selectRegion');
    const provinceEl = document.getElementById('selectProvince');
    if (!regionEl || !provinceEl) return;

    const selectedRegion = regionEl.value;
    provinceEl.innerHTML = '<option value="">-- Chọn Tỉnh / Thành Phố --</option>';

    if (!selectedRegion || !locationData[selectedRegion]) {
        provinceEl.disabled = true;
        return;
    }

    provinceEl.disabled = false;
    const provinces = Object.keys(locationData[selectedRegion]);
    provinces.forEach(prov => {
        const opt = document.createElement('option');
        opt.value = prov;
        opt.textContent = prov;
        provinceEl.appendChild(opt);
    });
}

function onProvinceChange() {
}


const locationData = {
    "Miền Bắc": {
        "Hà Nội": ["Quận Ba Đình", "Quận Hoàn Kiếm", "Quận Hai Bà Trưng", "Quận Đống Đa", "Quận Tây Hồ", "Quận Cầu Giấy", "Quận Thanh Xuân", "Quận Hoàng Mai", "Huyện Gia Lâm", "Huyện Đông Anh"],
        "Hải Phòng": ["Quận Hồng Bàng", "Quận Lê Chân", "Quận Ngô Quyền", "Quận Hải An", "Quận Kiến An", "Huyện An Dương", "Huyện Thủy Nguyên"],
        "Quảng Ninh": ["Thành phố Hạ Long", "Thành phố Móng Cái", "Thành phố Cẩm Phả", "Thành phố Uông Bí", "Huyện Vân Đồn"],
        "Bắc Ninh": ["Thành phố Bắc Ninh", "Thành phố Từ Sơn", "Huyện Yên Phong", "Huyện Quế Võ", "Huyện Tiên Du"],
        "Nam Định": ["Thành phố Nam Định", "Huyện Mỹ Lộc", "Huyện Vụ Bản", "Huyện Ý Yên", "Huyện Nam Trực"],
        "Hải Dương": ["Thành phố Hải Dương", "Thành phố Chí Linh", "Huyện Nam Sách", "Huyện Kinh Môn", "Huyện Kim Thành"],
        "Thái Bình": ["Thành phố Thái Bình", "Huyện Quỳnh Phụ", "Huyện Hưng Hà", "Huyện Đông Hưng", "Huyện Thái Thụy"],
        "Ninh Bình": ["Thành phố Ninh Bình", "Thành phố Tam Điệp", "Huyện Nho Quan", "Huyện Gia Viễn", "Huyện Hoa Lư"]
    },
    "Miền Trung": {
        "Đà Nẵng": ["Quận Hải Châu", "Quận Thanh Khê", "Quận Sơn Trà", "Quận Ngũ Hành Sơn", "Quận Liên Chiểu", "Huyện Hòa Vang"],
        "Thừa Thiên Huế": ["Thành phố Huế", "Thị xã Hương Thủy", "Thị xã Hương Trà", "Huyện Phong Điền", "Huyện Quảng Điền"],
        "Quảng Nam": ["Thành phố Tam Kỳ", "Thành phố Hội An", "Thị xã Điện Bàn", "Huyện Đại Lộc", "Huyện Điện Bàn"],
        "Quảng Ngãi": ["Thành phố Quảng Ngãi", "Huyện Bình Sơn", "Huyện Sơn Tịnh", "Huyện Tư Nghĩa", "Huyện Mộ Đức"],
        "Bình Định": ["Thành phố Quy Nhơn", "Thị xã An Nhơn", "Thị xã Hoài Nhơn", "Huyện Tuy Phước", "Huyện Phù Cát"],
        "Khánh Hòa": ["Thành phố Nha Trang", "Thành phố Cam Ranh", "Thị xã Ninh Hòa", "Huyện Vạn Ninh", "Huyện Diên Khánh"],
        "Nghệ An": ["Thành phố Vinh", "Cửa Lò", "Thị xã Thái Hòa", "Thị xã Hoàng Mai", "Huyện Diễn Châu", "Huyện Nghi Lộc"],
        "Thanh Hóa": ["Thành phố Thanh Hóa", "Thành phố Sầm Sơn", "Thị xã Bỉm Sơn", "Thị xã Nghi Sơn", "Huyện Hoằng Hóa"]
    },
    "Miền Nam": {
        "TP. Hồ Chí Minh": ["Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 10", "Quận 11", "Quận 12", "Quận Tân Bình", "Quận Tân Phú", "Quận Phú Nhuận", "Quận Gò Vấp", "Quận Bình Thạnh", "TP. Thủ Đức", "Huyện Bình Chánh", "Huyện Hóc Môn", "Huyện Củ Chi", "Huyện Nhà Bè", "Huyện Cần Giờ"],
        "Cần Thơ": ["Quận Ninh Kiều", "Quận Ô Môn", "Quận Bình Thủy", "Quận Cái Răng", "Quận Thốt Nốt", "Huyện Phong Điền", "Huyện Cờ Đỏ"],
        "Bình Dương": ["Thành phố Thủ Dầu Một", "Thành phố Dĩ An", "Thành phố Thuận An", "Thị xã Tân Uyên", "Huyện Bàu Bàng"],
        "Đồng Nai": ["Thành phố Biên Hòa", "Thành phố Long Khánh", "Huyện Nhơn Trạch", "Huyện Long Thành", "Huyện Trảng Bom"],
        "Bà Rịa - Vũng Tàu": ["Thành phố Vũng Tàu", "Thành phố Bà Rịa", "Thị xã Phú Mỹ", "Huyện Châu Đức", "Huyện Xuyên Mộc"],
        "Long An": ["Thành phố Tân An", "Thị xã Kiến Tường", "Huyện Bến Lức", "Huyện Cần Đước", "Huyện Cần Giuộc"],
        "Tiền Giang": ["Thành phố Mỹ Tho", "Thị xã Gò Công", "Thị xã Cai Lậy", "Huyện Cái Bè", "Huyện Gò Công Đông"],
        "An Giang": ["Thành phố Long Xuyên", "Thành phố Châu Đốc", "Thị xã Tân Châu", "Huyện An Phú", "Huyện Châu Phú"]
    }
};


function toggleAddAddressForm() {
    const form = document.getElementById('addAddressForm');
    if (!form) return;
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}


function addAddressStructured() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const nameEl = document.getElementById('addressName');
    const regionEl = document.getElementById('selectRegion');
    const provinceEl = document.getElementById('selectProvince');
    const detailEl = document.getElementById('addressDetail');
    const phoneEl = document.getElementById('addressPhone');
    const defaultEl = document.getElementById('addressDefault');

    const name = nameEl ? nameEl.value.trim() : '';
    const region = regionEl ? (regionEl.value || 'Miền Nam') : 'Miền Nam';
    const province = provinceEl ? (provinceEl.value || 'TP. Hồ Chí Minh') : 'TP. Hồ Chí Minh';
    const detail = detailEl ? detailEl.value.trim() : '';
    const phone = phoneEl ? phoneEl.value.trim() : '';
    const isDefault = defaultEl ? defaultEl.checked : false;

    if (!name || !detail || !phone) {
        showMessage('❌ Vui lòng điền đầy đủ Tên, Địa chỉ chi tiết và Số điện thoại!', 'error');
        return;
    }

    const addresses = JSON.parse(localStorage.getItem('addresses-' + currentUser.id)) || [];

    if (isDefault) {
        addresses.forEach(addr => addr.default = false);
    }

    addresses.push({
        name: name,
        detail: detail,
        province: province,
        region: region,
        phone: phone,
        default: isDefault
    });

    localStorage.setItem('addresses-' + currentUser.id, JSON.stringify(addresses));

    showMessage('✅ Thêm địa chỉ thành công!', 'success');

    toggleAddAddressForm();
    if (nameEl) nameEl.value = '';
    if (regionEl) regionEl.value = '';
    if (provinceEl) {
        provinceEl.innerHTML = '<option value="">-- Chọn Tỉnh / Thành Phố trước --</option>';
        provinceEl.disabled = true;
    }
    if (detailEl) detailEl.value = '';
    if (phoneEl) phoneEl.value = '';
    if (defaultEl) defaultEl.checked = false;

    loadAddresses();
}

function loadAddresses() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const addresses = JSON.parse(localStorage.getItem('addresses-' + currentUser.id)) || [];
    const addressList = document.getElementById('addressList');
    if (!addressList) return;

    if (addresses.length === 0) {
        addressList.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Bạn chưa thêm địa chỉ nào.</p>';
        return;
    }

    addressList.innerHTML = addresses.map((addr, index) => {
        const fullDetail = addr.province ? `${addr.detail}, ${addr.province} (${addr.region})` : addr.detail;
        return `
        <div class="info-card" style="margin-bottom: 20px; border: 1px solid var(--border-color, #334155); background: var(--bg-card-sub, #1e293b); border-radius: 12px; padding: 20px; position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--border-color, #334155); padding-bottom: 12px;">
                <h4 style="margin: 0; font-size: 16px; color: var(--text-dark, #fff); display: flex; align-items: center; gap: 8px;">
                    <img src="map-marker-home.svg" alt="Địa chỉ giao hàng" width="30" height="30"> ${addr.name}
                </h4>
                ${addr.default ? '<span class="badge" style="background: var(--primary-food, #ff4757); color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600;">Mặc định</span>' : ''}

            </div>            
            <div class="info-row" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border-color, #334155);">
                <label style="color: var(--text-muted, #94a3b8); font-weight: 500;">Họ Tên / Gợi Nhớ:</label>
                <span style="color: var(--text-dark, #fff); font-weight: 600;">${addr.name}</span>
            </div>
            <div class="info-row" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border-color, #334155);">
                <label style="color: var(--text-muted, #94a3b8); font-weight: 500;">Địa Chỉ Chi Tiết:</label>
                <span style="color: var(--text-dark, #fff); text-align: right; max-width: 60%;">${fullDetail}</span>
            </div>
            <div class="info-row" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border-color, #334155);">
                <label style="color: var(--text-muted, #94a3b8); font-weight: 500;">Số Điện Thoại:</label>
                <span style="color: var(--text-dark, #fff); font-weight: 600;">${addr.phone}</span>
            </div>

            <div style="margin-top: 16px; display: flex; justify-content: flex-end; gap: 10px;">
                ${!addr.default ? `<button onclick="setDefaultAddress(${index})" style="background: #3b82f6; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px;">Đặt Mặc Định</button>` : ''}
                <button class="btn-delete" onclick="deleteAddress(${index})" style="background: #ef4444; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                    <img src="trash-xmark.svg" alt="Xóa" width="16" height="16"> Xóa Địa Chỉ
                </button>
            </div>
        </div>
    `;
    }).join('');
}

const themeToggleBtn = document.querySelector('.btn-theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggleBtn?.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

function setDefaultAddress(index) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const addresses = JSON.parse(localStorage.getItem('addresses-' + currentUser.id)) || [];
    if (index < 0 || index >= addresses.length) return;

    // Đặt tất cả về false, sau đó đặt cái được chọn là true
    addresses.forEach((addr, i) => {
        addr.default = (i === index);
    });

    localStorage.setItem('addresses-' + currentUser.id, JSON.stringify(addresses));
    showMessage('✅ Đã đặt làm địa chỉ mặc định!', 'success');
    loadAddresses();
}


function deleteAddress(index) {
    if (!confirm('Bạn có chắc muốn xóa địa chỉ này?')) return;

    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const addresses = JSON.parse(localStorage.getItem('addresses-' + currentUser.id)) || [];
    addresses.splice(index, 1);
    localStorage.setItem('addresses-' + currentUser.id, JSON.stringify(addresses));

    showMessage('✅ Xóa địa chỉ thành công!', 'success');
    loadAddresses();
}

// ========== LỊCH SỬ MUA HÀNG ==========

function loadOrders() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;

    // Lọc chỉ những đơn của user hiện tại (dựa theo tên hoặc số điện thoại/ID)
    const userOrders = allOrders.filter(order => 
        order.customer && (
            order.customer.name === currentUser.fullName ||
            order.customer.phone === currentUser.phone ||
            order.userId === currentUser.id
        )
    );

    if (userOrders.length === 0) {
        ordersList.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Bạn chưa có đơn hàng nào.</p>';
        return;
    }

    ordersList.innerHTML = userOrders.slice().reverse().map(order => `
        <div class="order-card" style="margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: var(--text-dark);">Mã Đơn: #${order.id}</h4>
                <span class="order-status status-${order.status || 'pending'}">${order.status === 'completed' ? 'Đã hoàn thành' : order.status === 'shipping' ? 'Đang giao hàng' : 'Chờ xác nhận'}</span>
            </div>
            <p style="color: var(--text-muted); font-size: 13px; margin-bottom: 8px;"><img src="clock-five.svg" alt="Thời gian đặt hàng" width="16" height="16"> Ngày đặt: ${order.date}</p>
            <p style="color: var(--text-muted); font-size: 13px; margin-bottom: 12px;"><img src="user.svg" alt="Người nhận hàng" width="16" height="16"> Người nhận: <strong>${order.customer?.name || 'Khách hàng'}</strong> (${order.customer?.phone || ''}) - ${order.customer?.address || ''}</p>

            <div style="border-top: 1px solid var(--border-color); padding-top: 10px; margin-top: 8px;">
                ${(order.items || []).map(item => `
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px; margin-bottom: 6px; color: var(--text-dark);">
                        <span>${item.name} x <strong>${item.quantity}</strong></span>
                        <span style="color: var(--primary-food); font-weight: 600;">${((item.price || 0) * (item.quantity || 1)).toLocaleString('vi-VN')} đ</span>
                    </div>
                `).join('')}
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); margin-top: 12px; padding-top: 10px;">
                <span style="font-size: 13px; color: var(--text-muted);">Phương thức: <strong>${order.paymentMethod === 'banking' ? 'Chuyển khoản' : 'Tiền mặt (COD)'}</strong></span>
                <span style="font-size: 16px; font-weight: bold; color: var(--primary-food);">Tổng: ${(order.total || 0).toLocaleString('vi-VN')} đ</span>
            </div>
        </div>
    `).join('');
}

function toggleWishlist(productId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('❌ Vui lòng đăng nhập để sử dụng tính năng yêu thích!');
        window.location.href = 'login.html';
        return;
    }

    // Key lưu riêng theo ID user: 'wishlist-1', 'wishlist-2',...
    const wishlistKey = 'wishlist-' + currentUser.id;
    let wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];

    const index = wishlist.indexOf(Number(productId));
    if (index === -1) {
        wishlist.push(Number(productId));
        localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
        alert('❤️ Đã thêm sản phẩm vào danh sách yêu thích!');
    } else {
        wishlist.splice(index, 1);
        localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
        alert('🗑️ Đã xóa sản phẩm khỏi danh sách yêu thích!');
    }
    
    // Cập nhật lại giao diện nút tim ở shop nếu có
    updateWishlistUI();
}

// ========== WISHLIST - RIÊNG BIỆT TỪNG USER ==========
function loadWishlist() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    // Lấy danh sách toàn bộ sản phẩm của shop từ localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    // Lấy wishlist riêng của user hiện tại
    const wishlist = JSON.parse(localStorage.getItem('wishlist-' + currentUser.id)) || [];
    const wishlistList = document.getElementById('wishlistList');
    if (!wishlistList) return;

    // Lọc ra các sản phẩm trùng với ID trong wishlist
    const wishlistItems = wishlist.map(id => products.find(p => Number(p.id) === Number(id))).filter(Boolean);

    if (wishlistItems.length === 0) {
        wishlistList.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Bạn chưa thêm sản phẩm yêu thích nào.</p>';
        return;
    }

    // Hiển thị danh sách sản phẩm yêu thích vào trang account
    wishlistList.innerHTML = wishlistItems.map(item => `
        <div class="order-card" style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; padding: 16px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">` : ''}
                <div>
                    <h4 style="margin: 0 0 4px 0; color: var(--text-dark); font-size: 15px;">${item.name}</h4>
                    <p style="margin: 0; color: var(--primary-food); font-weight: 600;">${(item.price || 0).toLocaleString('vi-VN')} đ</p>
                </div>
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-primary" style="padding: 8px 14px; font-size: 13px; border-radius: 6px; cursor: pointer; background: var(--primary-food); color: #fff; border: none;" onclick="addToCart(${item.id})">➕ Thêm giỏ</button>
                <button class="btn btn-delete" style="padding: 8px 12px; font-size: 13px; border-radius: 6px; cursor: pointer; background: #ef4444; color: #fff; border: none;" onclick="removeFromWishlist(${item.id})">🗑️ Xóa</button>
            </div>
        </div>
    `).join('');
}

function removeFromWishlist(productId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const wishlistKey = 'wishlist-' + currentUser.id;
    let wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];
    const index = wishlist.indexOf(Number(productId));
    
    if (index !== -1) {
        wishlist.splice(index, 1);
        localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
        showMessage('✅ Đã xóa khỏi danh sách yêu thích!', 'success');
        loadWishlist(); // Tải lại giao diện wishlist
    }
}

function addToCart(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => Number(p.id) === Number(productId));

    if (!product) {
        showMessage('❌ Không tìm thấy sản phẩm!', 'error');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingCartItem = cart.find(i => Number(i.id) === Number(product.id));

    if (existingCartItem) {
        existingCartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showMessage('✅ Đã thêm vào giỏ hàng!', 'success');
}

// ========== BẢO MẬT ==========

function changePassword() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const oldPasswordEl = document.getElementById('oldPassword');
    const newPasswordEl = document.getElementById('newPassword');
    const confirmNewPasswordEl = document.getElementById('confirmNewPassword');

    const oldPassword = oldPasswordEl ? oldPasswordEl.value : '';
    const newPassword = newPasswordEl ? newPasswordEl.value : '';
    const confirmNewPassword = confirmNewPasswordEl ? confirmNewPasswordEl.value : '';

    if (!oldPassword || !newPassword || !confirmNewPassword) {
        showMessage('❌ Vui lòng điền đầy đủ thông tin', 'error');
        return;
    }

    if (oldPassword !== currentUser.password) {
        showMessage('❌ Mật khẩu cũ không chính xác', 'error');
        return;
    }

    if (newPassword.length < 6) {
        showMessage('❌ Mật khẩu mới phải từ 6 ký tự trở lên', 'error');
        return;
    }

    if (newPassword !== confirmNewPassword) {
        showMessage('❌ Xác nhận mật khẩu không khớp', 'error');
        return;
    }

    // Cập nhật mật khẩu trong mảng users tổng
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);

    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Cập nhật currentUser hiện tại
    currentUser.password = newPassword;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    showMessage('✅ Đổi mật khẩu thành công!', 'success');
    if (oldPasswordEl) oldPasswordEl.value = '';
    if (newPasswordEl) newPasswordEl.value = '';
    if (confirmNewPasswordEl) confirmNewPasswordEl.value = '';
}

// ========== CÀI ĐẶT ==========

function saveSettings() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const notifEmail = document.getElementById('notificationEmail');
    const notifSms = document.getElementById('notificationSms');
    const notifPromo = document.getElementById('notificationPromo');

    const settings = {
        notificationEmail: notifEmail ? notifEmail.checked : false,
        notificationSms: notifSms ? notifSms.checked : false,
        notificationPromo: notifPromo ? notifPromo.checked : false
    };

    localStorage.setItem('settings-' + currentUser.id, JSON.stringify(settings));
    showMessage('✅ Lưu cài đặt thành công!', 'success');
}

// ========== HÀM HỖ TRỢ ==========

function showMessage(text, type) {
    const messageDiv = document.getElementById('accountMessage');
    if (!messageDiv) return;

    messageDiv.textContent = text;
    messageDiv.className = 'message ' + (type || '');

    if (type === 'error' || type === 'success') {
        setTimeout(() => {
            messageDiv.className = 'message';
            messageDiv.textContent = '';
        }, 3000);
    }
}