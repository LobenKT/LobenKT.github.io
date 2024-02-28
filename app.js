const options = {
    rootMargin: '100px 0px' // Trigger 100px before the element enters the viewport
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, options);
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
const experienceItems = document.querySelectorAll('.experience-item');

experienceItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.03)'; /* Slightly scale on hover */
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';  /* Reset scale */
  });
});
