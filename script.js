// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

faders.forEach(section => {
  appearOnScroll.observe(section);
});
