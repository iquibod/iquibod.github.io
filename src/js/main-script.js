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