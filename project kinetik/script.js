// CONFIGURATION ADN PARTICULES
tsParticles.load("tsparticles", {
    particles: {
        number: { value: 65, density: { enable: true, area: 800 } },
        color: { value: ["#ff0000", "#ffffff"] },
        links: { enable: true, distance: 160, color: "#ff0000", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 1.3, direction: "none", random: false, straight: false, outModes: { default: "out" } },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.4 }
    },
    interactivity: { events: { onHover: { enable: true, mode: "grab" } }, modes: { grab: { distance: 200, links: { opacity: 0.6 } } } },
    retina_detect: true
});

// ANIMATION AU SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-scroll').forEach(el => observer.observe(el));