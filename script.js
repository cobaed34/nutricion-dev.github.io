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
    const body = document.body;

    // Asegurar que el menú esté oculto por defecto en móvil
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    }

    // Manejar el clic en el botón del menú
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
    });

    // Cerrar el menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });

    // Cerrar el menú al hacer clic fuera
    body.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !navLinks.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navLinks.style.display = 'none';
        }
    });

    // Manejar el cambio de tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});
