  //animate css on scroll
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.getAttribute('data-animate');
        entry.target.classList.add(animationClass);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(elem => {
    observer.observe(elem);
  });

 



