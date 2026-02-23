// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Year for Copyright
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Navbar glassmorphism on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/40', 'backdrop-blur-xl', 'border-b', 'border-white/10', 'shadow-lg');
            navbar.classList.remove('bg-transparent', 'border-b-0');
        } else {
            navbar.classList.remove('bg-black/40', 'backdrop-blur-xl', 'border-b', 'border-white/10', 'shadow-lg');
            navbar.classList.add('bg-transparent', 'border-b-0');
        }
    });

    // 3. Scroll Reveal Animation Logic
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // 4. Glowing Cursor Tracker (Futuristic vibe)
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('glowing-cursor');
    document.body.appendChild(cursorGlow);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Smooth cursor movement variables
    let cursorX = mouseX;
    let cursorY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateCursor = () => {
        // Linear interpolation for smooth trailing
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        cursorGlow.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(animateCursor);
    };

    animateCursor();
});
