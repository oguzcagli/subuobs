// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            window.location.href = 'home.html';
        }
    });
}

// Hamburger Menu Toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');

    if (navMenu) {
        navMenu.classList.toggle('active');
    }
    if (hamburger) {
        hamburger.classList.toggle('active');
    }
}
