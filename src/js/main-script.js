document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const element = document.querySelector(target);
        if(element){
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const position =
                element.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }
    });
});

const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${currentId}`
                );
            });
        }
    });
}, {
    rootMargin: '-25% 0px -65% 0px',
    threshold: 0
});
sections.forEach(section => {
    observer.observe(section);
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

});