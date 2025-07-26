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

 
// mobile menu toggle

const menuOpen = document.querySelector('.fa-bars');
const menuClose = document.querySelector('#navbar-close');
const mobileMenu = document.querySelector('.mobile-nav');

menuOpen.addEventListener('click', () => {
  menuOpen.style.display="none";
  menuClose.style.display="inline";
  mobileMenu.classList.add('show');
});

menuClose.addEventListener('click', () => {
  menuOpen.style.display="inline";
  menuClose.style.display="none";
  mobileMenu.classList.remove('show');
});


// hide show scroll to top button
  document.addEventListener("DOMContentLoaded", function () {
    const mybutton = document.getElementById("ScrollToTopBtn");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
      }
    });
  });