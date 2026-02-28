// ========================================
// CONFIGURACIÓN Y VARIABLES GLOBALES
// ========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.getElementById('backToTop');
const parallaxBg = document.getElementById('parallaxBg');

// ========================================
// NAVBAR CON EFECTO SCROLL
// ========================================

/**
 * Agrega efecto transparente a la navbar cuando está en el top
 * y cambia el estilo al hacer scroll
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// MENÚ HAMBURGUESA
// ========================================

/**
 * Abre/cierra el menú hamburguesa en dispositivos móviles
 */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/**
 * Cierra el menú al hacer click en un enlace
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// BOTÓN VOLVER ARRIBA
// ========================================

/**
 * Muestra/oculta el botón de volver arriba según la posición del scroll
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

/**
 * Desplaza la página al top suavemente al hacer click
 */
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// EFECTO PARALLAX EN HERO
// ========================================

/**
 * Crea un efecto parallax en la sección hero cuando se hace scroll
 * Mueve el fondo a una velocidad diferente al scroll de la página
 */
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ========================================
// INTERSECTION OBSERVER PARA ANIMACIONES
// ========================================

/**
 * Configura el Intersection Observer para activar animaciones
 * cuando los elementos entran en la vista
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Obtiene el tipo de animación del atributo data-aos
            const animationType = entry.target.getAttribute('data-aos');
            const delay = entry.target.getAttribute('data-delay') || '0s';
            
            // Aplica la animación
            entry.target.style.animation = `${animationType} 0.8s ease-out ${delay} forwards`;
            entry.target.classList.add('visible');
            
            // Detiene la observación después de animar
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

/**
 * Observa todos los elementos con atributo data-aos
 */
// Observamos todos los elementos que tienen atributo data-aos
// (No establecemos la opacidad inicial aquí para evitar ocultar el contenido
// antes de verificar si está en la vista.)
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ========================================
// CONTADORES ANIMADOS
// ========================================

/**
 * Anima los contadores de estadísticas cuando se hacen visibles
 */
const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
            const targetNumber = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, targetNumber);
            entry.target.setAttribute('data-animated', 'true');
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(statNumber => {
    counterObserver.observe(statNumber);
});

/**
 * Anima un contador desde 0 hasta el número objetivo
 * @param {HTMLElement} element - El elemento a animar
 * @param {number} target - El número objetivo
 */
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50; // Divide en 50 pasos
    const duration = 2000; // 2 segundos
    const stepDuration = duration / 50;
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepDuration);
}

// ========================================
// BOTÓN CTA EN HERO
// ========================================

/**
 * El botón CTA desplaza la página a la sección de especificaciones
 */
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.getElementById('especificaciones').scrollIntoView({ behavior: 'smooth' });
    });
}

// ========================================
// EFECTOS HOVER EN TARJETAS
// ========================================

/**
 * Agrega efectos de sonido o animaciones adicionales en hover
 */
document.querySelectorAll('.spec-card, .curiosidad-card, .contacto-box').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.style.transform.replace('translateY(0)', '');
    });
});

// ========================================
// LAZY LOADING DE IMÁGENES (Opcional)
// ========================================

/**
 * Implementa lazy loading para optimización de rendimiento
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observa todas las imágenes con data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// AJUSTES RESPONSIVE
// ========================================

/**
 * Eventos responsive para adaptar componentes en pantallas pequeñas
 */
const handleResponsive = () => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Ajustes para móvil
        document.querySelectorAll('[data-delay]').forEach(el => {
            el.removeAttribute('data-delay');
        });
    }
};

window.addEventListener('resize', handleResponsive);
handleResponsive();

// ========================================
// SMOOTH SCROLL PARA ENLACES INTERNOS
// ========================================

/**
 * Desplazamiento suave para todos los enlaces internos con hashtag
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// INICIALIZACIÓN
// ========================================

/**
 * Función de inicialización que se ejecuta cuando el DOM está listo
 */
function init() {
    console.log('🚀 McLaren F1 website iniciada correctamente');
    
    // Asegura que el navbar comience sin la clase 'scrolled'
    if (window.scrollY === 0) {
        navbar.classList.remove('scrolled');
    }
}

// Ejecuta la inicialización cuando el DOM está completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// EVENT LISTENERS PARA MEJORA UX
// ========================================

/**
 * Mejora la experiencia del usuario con feedback visual
 */
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('click', function(e) {
        // Efecto de ripple en botones
        if (this.tagName === 'BUTTON') {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
        }
    });
});

// ========================================
// DETECCIÓN DE PREFERENCIA DE MOVIMIENTO REDUCIDO
// ========================================

/**
 * Respeta la preferencia prefers-reduced-motion del usuario
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.animation = 'none';
        el.style.opacity = '1';
    });
}

// ========================================
// MONITOREO DE RENDIMIENTO
// ========================================

/**
 * Registra métricas de rendimiento en consola
 */
if ('PerformanceObserver' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('⏱️ Tiempo de carga: ' + pageLoadTime + 'ms');
    });
}

// ========================================
// FUNCIONES AUXILIARES
// ========================================

/**
 * Obtiene el año actual para el footer
 */
function getCurrentYear() {
    return new Date().getFullYear();
}

/**
 * Verifica si el usuario está en un dispositivo táctil
 */
function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
}

// Console message para desarrolladores
console.log('%cMcLaren F1 Website', 'color: #FF8700; font-size: 24px; font-weight: bold;');
console.log('%cDesign: Moderno & Minimalista | Desarrollado con HTML5, CSS3 y JavaScript puro', 'color: #ccc; font-size: 12px;');
