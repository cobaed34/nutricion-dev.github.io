document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class on the button
            this.classList.toggle('active');
            
            // Get the content panel
            const content = this.nextElementSibling;
            
            // Toggle the content panel
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    // Asegurar que el menú esté oculto por defecto en móviles
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }

    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú cuando se hace clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Cerrar el menú cuando se hace clic fuera de él
    body.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Prevenir que el clic en el menú lo cierre
    navLinks.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Manejar cambios de tamaño de ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.add('active');
        } else {
            navLinks.classList.remove('active');
        }
    });
});
