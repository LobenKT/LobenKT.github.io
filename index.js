// Trigger fade-in animation when sections enter the viewport
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
});
