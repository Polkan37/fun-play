// ============= Burger menu ==================
const navBar = document.querySelector('.nav');
const burger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');

burger.addEventListener("click", () => {
    navBar.classList.contains('active') ? navBar.classList.remove('active') : navBar.classList.add('active');
    burger.classList.contains('active-burger') ? burger.classList.remove('active-burger') : burger.classList.add('active-burger');
    navList.classList.contains('display-none') ? navList.classList.remove('display-none') : navList.classList.add('display-none');
    document.body.style.overflow === 'hidden' ? document.body.style.overflow = 'auto': document.body.style.overflow = 'hidden';
})
navLink.forEach( el => {
    el.addEventListener("click", () => {
        navBar.classList.contains('active') ? navBar.classList.remove('active') : navBar.classList.add('active');
        burger.classList.contains('active-burger') ? burger.classList.remove('active-burger') : burger.classList.add('active-burger');
        navList.classList.contains('display-none') ? navList.classList.remove('display-none') : navList.classList.add('display-none');
        document.body.style.overflow === 'hidden' ?  document.body.style.overflow = 'auto': document.body.style.overflow = 'hidden' ;
    })
})