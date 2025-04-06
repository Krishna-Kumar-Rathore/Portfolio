/* ===== MENU TOGGLE FOR MOBILE (Slide-in Sidebar) ===== */
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('translate-x-full');
        menu.classList.toggle('translate-x-0');
    });
}

/* ===== REMOVE MENU ON LINK CLICK (Mobile only) ===== */
const navLinks = document.querySelectorAll('#mobile-menu a');

function linkAction() {
    menu.classList.add('translate-x-full');
    menu.classList.remove('translate-x-0');
}
navLinks.forEach(link => link.addEventListener('click', linkAction));

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`) ||
                            document.querySelector(`#mobile-menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink?.classList.add('active-link');
        } else {
            sectionLink?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* ===== SCROLL REVEAL ANIMATION ===== */
document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2000,
        delay: 200,
        // reset: true
    });

    sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text");
    sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });
    sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
});
