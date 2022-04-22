const header = document.getElementById('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuFunc();
})

function mobileMenuFunc() {
    header.classList.toggle('mm-active');
}