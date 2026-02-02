document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section is in view: add animation class
        entry.target.classList.add('animated');
      } else {
        // Section is out of view: remove animation class and hide
        entry.target.classList.remove('animated');
        entry.target.style.opacity = '0';
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});