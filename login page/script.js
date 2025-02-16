const container = document.querySelector('.container');
const RegisterBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

RegisterBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
