// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Parallax effect for the Earth background
window.addEventListener('scroll', () => {
    const earth = document.getElementById('hero-earth');
    if (earth) {
        const scrolled = window.pageYOffset;
        earth.style.transform = `translateY(${-50 + scrolled * 0.1}%) translateX(${scrolled * 0.05}%)`;
    }
});

// Simple Log to confirm script is running
console.log("National Geographic Theme Initialized - Design by Alterpix Inspiration");