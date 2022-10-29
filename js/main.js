const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.menu-link');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', ()=>{
        nav.classList.remove('menu-open');
    });
})
