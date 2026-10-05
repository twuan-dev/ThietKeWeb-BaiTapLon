let currentLoginType = 'user';

function selectLoginType(type) {
    currentLoginType = type;

    const buttons = document.querySelectorAll('.btn-type');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-type') === type);
    });

    const demoBox = document.getElementById('demoAccountUser');
    if (demoBox) {
        demoBox.style.display = type === 'admin' ? 'none' : 'block';
    }

    hideMessage();
}

function togglePassword(fieldId) {
    const input = document.getElementById(fieldId);
    if (!input) return;

    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

function showMessage(text, isSuccess = false) {
    const msgDiv = document.getElementById('message');
    if (!msgDiv) return;

    msgDiv.style.display = 'block';
    msgDiv.innerText = text;

    if (isSuccess) {
        msgDiv.style.backgroundColor = 'rgba(74, 222, 128, 0.15)';
        msgDiv.style.color = '#4ade80';
        msgDiv.style.border = '1px solid #4ade80';
    } else {
        msgDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
        msgDiv.style.color = '#ef4444';
        msgDiv.style.border = '1px solid #ef4444';
    }
}

function hideMessage() {
    const msgDiv = document.getElementById('message');
    if (msgDiv) msgDiv.style.display = 'none';
}

function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function protectPage() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert('Vui lòng đăng nhập để tiếp tục!');
        window.location.href = 'login.html';
        return;
    }

    if (window.location.pathname.includes('admin.html') && currentUser.role !== 'admin') {
        alert('Bạn không có quyền truy cập trang quản trị!');
        window.location.href = 'shop.html';
    }
}

function logout() {
    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất khỏi tài khoản không?");
    if (confirmLogout) {
        localStorage.removeItem('currentUser');
        alert("Đăng xuất thành công!");
        window.location.href = 'login.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('users')) {
        const defaultAdmin = {
            id: 'admin-001',
            fullName: 'Quản Trị Viên',
            email: 'admin@restaurant.com',
            username: 'admin',
            password: '123',
            role: 'admin'
        };
        localStorage.setItem('users', JSON.stringify([defaultAdmin]));
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const usernameInput = document.getElementById('username')?.value.trim();
            const passwordInput = document.getElementById('password')?.value;

            if (!usernameInput || !passwordInput) {
                showMessage('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const foundUser = users.find(u =>
                (u.username === usernameInput || u.email === usernameInput) &&
                u.password === passwordInput
            );

            if (!foundUser) {
                showMessage('Tên đăng nhập hoặc mật khẩu không đúng!');
                return;
            }

            if (currentLoginType === 'admin' && foundUser.role !== 'admin') {
                showMessage('Tài khoản này không có quyền đăng nhập với tư cách Admin!');
                return;
            }

            if (currentLoginType === 'user' && foundUser.role === 'admin') {
                showMessage('Tài khoản Admin vui lòng chọn tab Đăng Nhập Admin!');
                return;
            }

            localStorage.setItem('currentUser', JSON.stringify(foundUser));
            showMessage(`Đăng nhập thành công! Chào mừng ${foundUser.fullName || foundUser.username}`, true);

            setTimeout(() => {
                if (foundUser.role === 'admin') {
                    window.location.href = 'admin.html';
                } else {
                    window.location.href = 'shop.html';
                }
            }, 1000);
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();
            const emailPrefix = document.getElementById('email').value.trim();
            const email = emailPrefix ? `${emailPrefix}@gmail.com` : '';
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (!fullName || !emailPrefix || !username || !password || !confirmPassword) {
                showMessage('❌ Vui lòng nhập đầy đủ thông tin!', false);
                return;
            }

            if (password !== confirmPassword) {
                showMessage('❌ Mật khẩu xác nhận không khớp!', false);
                return;
            }

            let users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUser = users.find(u => u.username === username || u.email === email);

            if (existingUser) {
                showMessage('❌ Tên đăng nhập hoặc Email này đã được sử dụng!', false);
                return;
            }

            const newUser = {
                id: 'usr_' + Date.now(),
                fullName: fullName,
                name: fullName,
                email: email,
                username: username,
                password: password,
                role: 'user',
                status: 'Hoạt động',
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            showMessage('✅ Đăng ký tài khoản thành công! Đang chuyển hướng...', true);

            setTimeout(function() {
                window.location.href = 'login.html';
            }, 1500);
        });
    }
});