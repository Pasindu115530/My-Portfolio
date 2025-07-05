let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 200 

});
ScrollReveal().reveal('.home .content , .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img , .projects-container, .contact form , .education-row ',  { origin: 'bottom' });
ScrollReveal().reveal('.home .content p , .about-content',  { origin: 'left' });

const typed = new Typed('.speedtext',{
    strings: ['Project Manager', 'Project Manager', 'Project Manager'],
    typespeed: 300,
    backspeed: 300,
    backDelay: 1000,
    loop:true
});