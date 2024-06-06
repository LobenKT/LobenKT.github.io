// Smooth Scroll Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Reveal Elements on Scroll
const faders = document.querySelectorAll('.hidden');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
      if (!entry.isIntersecting) {
          return;
      } else {
          entry.target.classList.add('show');
          appearOnScroll.unobserve(entry.target);
      }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  let isValid = true;
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!email.value.includes('@')) {
      isValid = false;
      alert('Please enter a valid email address.');
  }

  if (message.value.trim() === '') {
      isValid = false;
      alert('Please enter a message.');
  }

  if (!isValid) {
      event.preventDefault();
  }
});

// Toggle Dark Mode
document.getElementById('themeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
