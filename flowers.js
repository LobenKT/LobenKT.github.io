document.addEventListener('DOMContentLoaded', () => {
    const flowerLeafs = document.querySelectorAll('.flower__leaf');
    const flowerLineLeafs = document.querySelectorAll('.flower__line__leaf');

    flowerLeafs.forEach((leaf, index) => {
        leaf.style.animationDelay = `${index * 0.2}s`;
    });

    flowerLineLeafs.forEach((leaf, index) => {
        leaf.style.animationDelay = `${index * 0.3}s`;
    });

    setTimeout(() => {
        document.body.classList.remove('not-loaded');
    }, 1000);
});
