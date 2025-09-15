//animate css on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.getAttribute("data-animate");
        entry.target.classList.add(animationClass);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".animate-on-scroll").forEach((elem) => {
  observer.observe(elem);
});

// mobile menu toggle

const menuToggle = document.querySelector(".header__menu-toggle");
const menuOpenIcon = document.querySelector("#menu-open");
const menuCloseIcon = document.querySelector("#menu-close");
const mobileMenu = document.querySelector(".header__mobile-menu");

menuToggle.addEventListener("click", () => {
  if (mobileMenu.classList.contains("show")) {
    // Close menu
    menuOpenIcon.style.display = "block";
    menuCloseIcon.style.display = "none";
    mobileMenu.classList.remove("show");
  } else {
    // Open menu
    menuOpenIcon.style.display = "none";
    menuCloseIcon.style.display = "block";
    mobileMenu.classList.add("show");
  }
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

// dark mode toggle
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  themeToggleBtn.classList.toggle("dark");
  document.querySelector(".fa-moon").classList.toggle("invisible");
  document.querySelector(".fa-sun").classList.toggle("invisible");


  document.body.classList.toggle("body_dark");
  document.body.classList.toggle("text");
  document.querySelector("header").classList.toggle("header_dark");
  
  document.querySelectorAll(".section").forEach(section => {
    section.classList.toggle("section_dark");
  });

   document.querySelectorAll(".skill-box").forEach(section => {
    section.classList.toggle("dark");
  });
});


//spinner script

  window.addEventListener("load", function () {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 1500);
  });