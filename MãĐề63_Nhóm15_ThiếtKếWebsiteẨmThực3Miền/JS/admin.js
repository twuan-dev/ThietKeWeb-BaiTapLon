if (!localStorage.getItem('users')) {
    const DEFAULT_ADMIN = {
        id: 'sieucapquanli',
        fullName: 'Quản Trị Viên',
        email: 'admin@ecommerce.com',
        username: 'admin',
        password: 'adminvippro123',
        role: 'admin',
        createdAt: new Date().toISOString(),
        status: 'Hoạt động'
    };
    localStorage.setItem('users', JSON.stringify([DEFAULT_ADMIN]));
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);
}

function switchTab(tabName, element) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');

    if (tabName === 'products') document.getElementById('tab-products').style.display = 'block';
    if (tabName === 'online-orders') document.getElementById('tab-online-orders').style.display = 'block';
    if (tabName === 'users') document.getElementById('tab-users').style.display = 'block';
    if (tabName === 'report') {
        document.getElementById('tab-report').style.display = 'block';
        initRevenueReport();
    }

    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    if (element) element.classList.add('active');

    if (tabName === 'products') updateDashboard();
    if (tabName === 'online-orders') loadOnlineOrders();
    if (tabName === 'users') loadUsers();
}

function updateDashboard() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const tableBody = document.getElementById("product-list");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    let totalRevenue = 0;
    let bestProduct = null;

    products.forEach((product, index) => {
        const soldCount = Number(product.sold) || 0;
        const revenue = (Number(product.price) || 0) * soldCount;
        totalRevenue += revenue;

        if (!bestProduct || soldCount > (Number(bestProduct.sold) || 0)) {
            bestProduct = product;
        }

        const statusBadge = product.isAvailable !== false
            ? `<span class="badge success"><i class="fa-solid fa-circle-check"></i> Đang phục vụ</span>`
            : `<span class="badge danger"><i class="fa-solid fa-circle-xmark"></i> Tạm hết món</span>`;

        const toggleChecked = product.isAvailable !== false ? 'checked' : '';

        tableBody.innerHTML += `
            <tr>
                <td>
                    <strong style="color: #fff; font-size: 15px;">${product.name}</strong><br>
                    <small style="color: #94a3b8;">Phân vùng: ${product.region || product.category || 'Chung'} | Dự tính còn bán: ${product.stock || 0}</small>
                </td>
                <td>${formatCurrency(product.price)}</td>
                <td><b style="color: #4ade80;">${soldCount}</b> phần</td>
                <td>
                    <label class="switch">
                        <input type="checkbox" ${toggleChecked} onchange="toggleProductStatus(${index})">
                        <span class="slider"></span>
                    </label>
                </td>
                <td>${statusBadge}</td>
                <td><strong style="color: #fff;">${formatCurrency(revenue)}</strong></td>
                <td>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn" style="padding: 6px 12px; font-size: 11px; background: #3b82f6;" onclick="editProductPrompt(${index})"><i class="fa-solid fa-pen"></i> Sửa</button>
                        <button class="btn" style="padding: 6px 12px; font-size: 11px; background: linear-gradient(135deg, #ef4444, #dc2626);" onclick="deleteProduct(${index})"><i class="fa-solid fa-trash"></i> Xóa</button>
                    </div>
                </td>
            </tr>
        `;
    });

    const totalRevenueEl = document.getElementById('total-revenue');
    if (totalRevenueEl) totalRevenueEl.innerText = formatCurrency(totalRevenue);

    const totalDishesEl = document.getElementById('total-dishes');
    if (totalDishesEl) totalDishesEl.innerText = products.length;

    const bestSellerEl = document.getElementById('best-seller');
    const bestSellerCountEl = document.getElementById('best-seller-count');
    if (bestSellerEl) bestSellerEl.innerText = bestProduct ? bestProduct.name : "--";
    if (bestSellerCountEl) bestSellerCountEl.innerText = `Đã bán: ${bestProduct ? (Number(bestProduct.sold) || 0) : 0} phần`;

    const leastSellerEl = document.getElementById('least-seller');
    const leastSellerCountEl = document.getElementById('least-seller-count');

    if (products.length > 0) {
        const leastProduct = [...products].sort((a, b) => (Number(a.sold) || 0) - (Number(b.sold) || 0))[0];
        if (leastSellerEl) leastSellerEl.innerText = leastProduct ? leastProduct.name : "--";
        if (leastSellerCountEl) leastSellerCountEl.innerText = `Đã bán: ${leastProduct ? (Number(leastProduct.sold) || 0) : 0} phần`;
    } else {
        if (leastSellerEl) leastSellerEl.innerText = "--";
        if (leastSellerCountEl) leastSellerCountEl.innerText = "Đã bán: 0 phần";
    }
}

function toggleProductStatus(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    if (products[index]) {
        products[index].isAvailable = !products[index].isAvailable;
        localStorage.setItem('products', JSON.stringify(products));
        updateDashboard();
    }
}

function editProductPrompt(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let p = products[index];
    if (!p) return;

    const modal = document.getElementById('edit-product-modal');
    if (modal) {
        document.getElementById('edit-product-id').value = p.id !== undefined ? p.id : index;
        document.getElementById('edit-name').value = p.name || '';
        document.getElementById('edit-price').value = p.price || 0;
        document.getElementById('edit-region').value = p.region || p.category || '';
        document.getElementById('edit-stock').value = p.stock ?? 0;
        modal.dataset.currentIndex = index;
        modal.style.display = 'flex';
    } else {
        let newName = prompt("Nhập tên món mới:", p.name);
        if (newName === null) return;
        let newPrice = prompt("Nhập giá tiền mới (VNĐ):", p.price);
        if (newPrice === null) return;
        let newRegion = prompt("Nhập phân vùng/miền:", p.region || 'Miền Bắc');
        if (newRegion === null) return;
        let newStock = prompt("Nhập số lượng tồn kho:", p.stock || 0);
        if (newStock === null) return;

        p.name = newName.trim();
        p.price = parseFloat(newPrice) || p.price;
        p.region = newRegion.trim();
        p.category = p.region;
        p.stock = parseInt(newStock) || 0;

        localStorage.setItem('products', JSON.stringify(products));
        alert('✅ Cập nhật món ăn thành công!');
        updateDashboard();
    }
}

function closeEditModal() {
    const modal = document.getElementById('edit-product-modal');
    if (modal) modal.style.display = 'none';
}

function saveProductChanges() {
    const modal = document.getElementById('edit-product-modal');
    const index = modal ? Number(modal.dataset.currentIndex) : null;

    let products = JSON.parse(localStorage.getItem('products')) || [];
    let p = null;

    if (index !== null && products[index]) p = products[index];
    if (!p) {
        const idField = document.getElementById('edit-product-id');
        if (idField) {
            const id = Number(idField.value);
            p = products.find(prod => Number(prod.id) === id);
        }
    }

    if (!p) {
        alert('Không tìm thấy sản phẩm cần lưu!');
        return;
    }

    const newName = document.getElementById('edit-name')?.value.trim();
    const newPrice = Number(document.getElementById('edit-price')?.value);
    const newRegion = document.getElementById('edit-region')?.value.trim();
    const newStock = Number(document.getElementById('edit-stock')?.value);

    if (!newName) {
        alert('Tên món không được để trống!');
        return;
    }

    p.name = newName;
    p.price = newPrice;
    p.region = newRegion;
    p.category = newRegion;
    p.stock = newStock;

    localStorage.setItem('products', JSON.stringify(products));
    closeEditModal();
    alert('✅ Cập nhật món ăn thành công!');
    updateDashboard();
}

function deleteProduct(index) {
    if (confirm('⚠️ Bạn có chắc chắn muốn xóa món này khỏi thực đơn?')) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        updateDashboard();
    }
}

function loadOnlineOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const tbody = document.getElementById('online-order-list');
    if (!tbody) return;

    tbody.innerHTML = "";

    if (orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#94a3b8; padding: 32px;"><i class="fa-solid fa-circle-check" style="font-size:24px; margin-bottom:8px; display:block; color:var(--success);"></i>Không có đơn hàng nào</td></tr>`;
        return;
    }

    orders.forEach((order) => {
        const statusBadge =
            order.status === 'completed'
                ? '<span class="badge success"><i class="fa-solid fa-circle-check"></i> Đã hoàn thành</span>'
                : order.status === 'shipping'
                    ? '<span class="badge warning"><i class="fa-solid fa-truck-fast"></i> Đang giao hàng</span>'
                    : '<span class="badge warning"><i class="fa-solid fa-clock"></i> Chờ xác nhận</span>';

        const customerName = typeof order.customer === 'object'
            ? `${order.customer.name || 'Khách hàng'} - ${order.customer.phone || ''}`
            : order.customer;

        const itemsDesc = (order.items || [])
            .map(item => `${item.name} (x${item.quantity})`)
            .join(', ');

        let actionBtn = '';
        if (order.status === 'pending' || !order.status) {
            actionBtn = `<button class="btn" style="padding: 7px 14px; font-size: 12px; background: #e67e22;" onclick="completeOrder('${order.id}')"><i class="fa-solid fa-check"></i> Xác nhận đơn</button>`;
        } else if (order.status === 'shipping') {
            actionBtn = `<button class="btn" style="padding: 7px 14px; font-size: 12px; background: #27ae60;" onclick="completeOrder('${order.id}')"><i class="fa-solid fa-flag-checkered"></i> Hoàn thành</button>`;
        } else {
            actionBtn = `<span style="color: var(--success); font-weight: bold;"><i class="fa-solid fa-check-double"></i> Đã xong</span>`;
        }

        tbody.innerHTML += `
            <tr>
                <td><b style="color:#fff;">${order.id}</b></td>
                <td>${customerName}</td>
                <td><strong style="color:#fff; font-size: 0.9rem;">${itemsDesc}</strong></td>
                <td><span style="color:var(--primary); font-weight:700;">${formatCurrency(order.total || 0)}</span></td>
                <td>${statusBadge}</td>
                <td>${actionBtn}</td>
            </tr>
        `;
    });
}

function updateProductSales(items) {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    items.forEach(item => {
        const product = products.find(p =>
            String(p.id) === String(item.id) ||
            (p.name && item.name && p.name.trim().toLowerCase() === item.name.trim().toLowerCase())
        );

        if (product) {
            const soldQty = Number(item.quantity) || 1;
            product.sold = (Number(product.sold) || 0) + soldQty;
            product.stock = Math.max(0, Number(product.stock) || 0);
        }
    });

    localStorage.setItem('products', JSON.stringify(products));
}

function completeOrder(orderId) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let order = orders.find(o => o.id === orderId);
    if (!order) return;

    if (order.status === 'pending' || !order.status) {
        order.status = 'shipping';
        alert(`📦 Đã chuyển đơn hàng ${orderId} sang trạng thái "Đang giao hàng"!`);
    } else if (order.status === 'shipping') {
        order.status = 'completed';
        updateProductSales(order.items || []);
        alert(`🎉 Đã hoàn thành đơn hàng ${orderId}! Doanh thu và số lượng món đã được cập nhật.`);
    } else {
        alert('Đơn hàng này đã hoàn thành trước đó!');
        return;
    }

    localStorage.setItem('orders', JSON.stringify(orders));
    loadOnlineOrders();
    updateDashboard();
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tbody = document.getElementById('user-list');
    if (!tbody) return;

    tbody.innerHTML = "";

    if (users.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#94a3b8; padding: 32px;">Không có người dùng nào.</td></tr>`;
        return;
    }

    users.forEach((user, index) => {
        const statusBadge = (user.status === 'Hoạt động' || !user.status)
            ? `<span class="badge success"><i class="fa-solid fa-circle-check"></i> Hoạt động</span>`
            : `<span class="badge danger"><i class="fa-solid fa-circle-xmark"></i> Tạm khóa</span>`;

        tbody.innerHTML += `
            <tr>
                <td>${user.id || ('USR' + index)}</td>
                <td><strong style="color: #fff; font-size: 15px;">${user.fullName || user.name}</strong></td>
                <td>${user.email}</td>
                <td>${user.username || user.email}</td>
                <td><span style="color: ${user.role === 'admin' ? 'var(--danger)' : 'var(--success)'}; font-weight: 600;">${user.role}</span></td>
                <td>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        ${statusBadge}
                        <button class="btn" style="padding: 6px 12px; font-size: 11px; background: linear-gradient(135deg, #ef4444, #dc2626);" onclick="deleteUser(${index})"><i class="fa-solid fa-trash"></i> Xóa</button>
                    </div>
                </td>
            </tr>
        `;
    });
}

function deleteUser(index) {
    if (confirm('⚠️ Bạn có chắc chắn muốn xóa người dùng này?')) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
    }
}

let revenueChartInstance = null;

function initRevenueReport() {
    switchTimeFrame('day');
}

function switchTimeFrame(type, event) {
    if (event && event.target) {
        const buttons = document.querySelectorAll('.chart-controls .btn-time-filter');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const processedData = aggregateRevenueData(orders, type);

    const revenueValEl = document.getElementById('report-revenue-val');
    const itemsValEl = document.getElementById('report-items-val');

    if (revenueValEl) revenueValEl.textContent = formatCurrency(processedData.totalRevenue);
    if (itemsValEl) itemsValEl.textContent = processedData.totalItems + ' suất';

    renderSmoothRevenueChart(processedData.chartLabels, processedData.chartValues);
    renderReportSoldProducts(processedData.soldProductsMap);
}

function aggregateRevenueData(orders, type) {
    let chartValues = {};
    let totalRevenue = 0;
    let totalItems = 0;
    let soldProductsMap = {};

    if (!Array.isArray(orders) || orders.length === 0) {
        return {
            chartLabels: ['Hôm nay'],
            chartValues: [0],
            totalRevenue: 0,
            totalItems: 0,
            soldProductsMap: {}
        };
    }

    orders.forEach(order => {
        let orderItems = order.items || [];

        if (Array.isArray(orderItems) && orderItems.length > 0) {
            orderItems.forEach(item => {
                const qty = Number(item.quantity) || 1;
                const price = Number(item.price) || 0;
                const itemName = item.name || 'Món ăn';

                totalItems += qty;
                totalRevenue += price * qty;

                if (!soldProductsMap[itemName]) {
                    soldProductsMap[itemName] = { name: itemName, quantity: 0, revenue: 0 };
                }

                soldProductsMap[itemName].quantity += qty;
                soldProductsMap[itemName].revenue += price * qty;

                const date = new Date(order.date || Date.now());
                let key = `Ngày ${date.getDate()}/${date.getMonth() + 1}`;

                if (type === 'day') key = `${date.getDate()}/${date.getMonth() + 1}`;
                if (type === 'week') key = `Tuần ${Math.ceil(date.getDate() / 7)}`;
                if (type === 'month') key = `Tháng ${date.getMonth() + 1}`;
                if (type === 'year') key = `Năm ${date.getFullYear()}`;

                chartValues[key] = (chartValues[key] || 0) + (price * qty);
            });
        } else {
            const revenue = Number(order.total) || 0;
            totalRevenue += revenue;
            totalItems += 1;

            let key = 'Hôm nay';
            if (type === 'week') key = `Tuần ${Math.ceil(new Date(order.date || Date.now()).getDate() / 7)}`;
            if (type === 'month') key = `Tháng ${new Date(order.date || Date.now()).getMonth() + 1}`;
            if (type === 'year') key = `Năm ${new Date(order.date || Date.now()).getFullYear()}`;

            chartValues[key] = (chartValues[key] || 0) + revenue;
        }
    });

    return {
        chartLabels: Object.keys(chartValues),
        chartValues: Object.values(chartValues),
        totalRevenue,
        totalItems,
        soldProductsMap
    };
}

function renderSmoothRevenueChart(labels, data) {
    const canvasEl = document.getElementById('revenueChart');
    if (!canvasEl) return;

    const ctx = canvasEl.getContext('2d');

    if (revenueChartInstance) {
        revenueChartInstance.destroy();
    }

    revenueChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Doanh Thu (VNĐ)',
                data: data,
                borderColor: '#e67e22',
                backgroundColor: 'rgba(230, 126, 34, 0.15)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#e67e22',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#cbd5e1' } }
            },
            scales: {
                x: { grid: { color: 'rgba(51, 65, 85, 0.3)' }, ticks: { color: '#94a3b8' } },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(51, 65, 85, 0.3)' },
                    ticks: {
                        color: '#94a3b8',
                        callback: value => value.toLocaleString('vi-VN') + ' đ'
                    }
                }
            }
        }
    });
}

function renderReportSoldProducts(soldProductsMap) {
    const tbody = document.getElementById('report-sold-products-tbody');
    if (!tbody) return;

    tbody.innerHTML = "";

    const productsArray = Object.values(soldProductsMap);

    if (productsArray.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; padding: 20px; color: #94a3b8;">Chưa có món ăn nào được hoàn thành trong khoảng thời gian này.</td></tr>`;
        return;
    }

    productsArray.forEach(p => {
        tbody.innerHTML += `
            <tr style="border-bottom: 1px solid rgba(51, 65, 85, 0.4);">
                <td style="padding: 12px; color: #f8fafc;">${p.name}</td>
                <td style="padding: 12px; color: #f8fafc;">${p.quantity} suất</td>
                <td style="padding: 12px; color: #e67e22; font-weight: bold;">${formatCurrency(p.revenue)}</td>
            </tr>
        `;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updateDashboard();
    loadOnlineOrders();
    loadUsers();
    if (document.querySelector('.sidebar li.active')) {
        // ok
    }
});

function handleLogout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
        window.location.href = 'login.html';
    }
}

function refreshSystemData() {
    alert('🔄 Đang làm mới lại dữ liệu hệ thống...');
    location.reload();
}