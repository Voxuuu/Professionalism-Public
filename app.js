const app = () =>{
    navSlide();
}
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const aside = document.querySelector('aside');
    const nav = document.querySelector('nav');
    burger.addEventListener('click', () => {
        aside.classList.toggle('asideOut');
        nav.classList.toggle('displayBlock');
        burger.classList.toggle('toggle');
    })
}
app();