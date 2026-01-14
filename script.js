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

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".animate-on-scroll").forEach((elem) => {
    observer.observe(elem);
  });

  // mobile menu toggle
  const menuToggle = document.querySelector(".header__menu-toggle");
  const menuOpenIcon = document.querySelector("#menu-open");
  const menuCloseIcon = document.querySelector("#menu-close");
  const mobileMenu = document.querySelector(".header__mobile-menu");

  if (menuToggle && menuOpenIcon && menuCloseIcon && mobileMenu) {
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
  }

  // dark mode toggle
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      themeToggleBtn.classList.toggle("dark");
      document.querySelector(".fa-moon")?.classList.toggle("invisible");
      document.querySelector(".fa-sun")?.classList.toggle("invisible");

      document.body.classList.toggle("body_dark");
      document.body.classList.toggle("text");
      document.querySelector("header")?.classList.toggle("header_dark");

      document.querySelectorAll(".section").forEach((section) => {
        section.classList.toggle("section_dark");
      });

      document.querySelectorAll(".skill-box").forEach((section) => {
        section.classList.toggle("dark");
      });
    });
  }

  //latest year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
  }

  // Generate projects on page load
  generateProjects();

  // Hero image animation script
  const myPic = document.querySelector(".my_pic");
  const heroShapes = document.querySelectorAll(".my-pic-cover");
  const heroSection = document.querySelector(".hero-section");
  console.log("myPic found:", myPic);
  console.log("heroShapes found:", heroShapes.length);
  setTimeout(() => {
    if (myPic && heroShapes.length > 0 && heroSection) {
      console.log("Adding animation classes");
      myPic.classList.add("animate-hero-image", "shadow-lg");
      heroShapes.forEach((shape) => {
        shape.classList.add("animate-hero-shapes", "shadow-sm");
      });

      heroSection.classList.add("hero-padding");
    } else {
      console.log("Elements not found for animation");
    }
  }, 11000);

  // Scroll to top button
  const mybutton = document.getElementById("ScrollToTopBtn");
  if (mybutton) {
    let ticking = false;

    function updateButton() {
      if (window.scrollY > 200) {
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
      }
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(updateButton);
        ticking = true;
      }
    });
  }
});

//preloader script

window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 600);
});

// Projects data
const projectsData = [
  {
    title: "Notepad Webapp ",
    image: "./images/notepad-project.png",
    githubUrl: "https://github.com/khalid-raza03/notepad",
    liveUrl: "https://khalid-raza03.github.io/notepad/",
  },
  {
    title: "Todo React webapp",
    image: "./images/todo-project.png",
    githubUrl: "https://github.com/khalid-raza03/Daily-task-manager",
    liveUrl: "https://daily-task-manager-one.vercel.app/",
  },
  {
    title: "Shop Elegance",
    image: "./images/project-1.png",
    githubUrl: "https://github.com/khalid-raza03/Shop-Elegance",
    liveUrl: "https://khalid-raza03.github.io/Shop-Elegance/",
  },
  {
    title: "Educational Website Template",
    image: "./images/project-2.png",
    githubUrl:
      "https://github.com/khalid-raza03/Edule-An-educational-website-template-",
    liveUrl:
      "https://khalid-raza03.github.io/Edule-An-educational-website-template-/",
  },
  {
    title: "Affiliate Marketing Webpage",
    image: "./images/project-3.png",
    githubUrl: "https://github.com/khalid-raza03/Uglow-clone",
    liveUrl: "https://khalid-raza03.github.io/Uglow-clone/",
  },
  {
    title: "Nexcent (Marketing Webpage)",
    image: "./images/project-5.png",
    githubUrl: "https://github.com/khalid-raza03/Nexcent",
    liveUrl: "https://khalid-raza03.github.io/Nexcent/",
  },
  {
    title: "School Exhibition Webpage",
    image: "./images/school-exhibition-project.png",
    githubUrl:
      "https://github.com/khalid-raza03/school-exhibition-landing-page",
    liveUrl: "https://khalid-raza03.github.io/school-exhibition-landing-page/",
  },
  {
    title: "E-commerce Landing Page",
    image: "./images/project-4.png",
    githubUrl: "https://github.com/khalid-raza03/Ubuy-HomePage-Clone",
    liveUrl: "https://khalid-raza03.github.io/Ubuy-HomePage-Clone/",
  },

  {
    title: "Weather forecast ",
    image: "./images/weather-app-project.png",
    githubUrl: "https://github.com/khalid-raza03/weather-api-webapp",
    liveUrl: "https://khalid-raza03.github.io/weather-api-webapp/",
  },
];

// Generate projects dynamically
function generateProjects() {
  const container = document.getElementById("projects-container");

  projectsData.forEach((project) => {
    const projectHTML = `
        <div class="project-box p-4 rounded-lg flex flex-col items-center relative animate__animated animate-on-scroll" data-animate="animate__fadeInRight">
          <div class="layer absolute w-full h-full rounded-3xl bg-blue-600 border-white border-2 flex justify-center items-center gap-5">
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-code text-xl text-blue-600 bg-white p-10 rounded-full hover:scale-105 transition-all duration-300"></i>
            </a>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-link text-xl text-blue-600 bg-white p-10 rounded-full hover:scale-105 transition-all duration-300"></i>
            </a>
          </div>
          <div class="img-box h-full">
            <img src="${project.image}" alt="${project.title}" class="object-cover aspect-2/1 w-full h-full" />
          </div>
          <div class="project-info flex flex-col gap-4 w-full items-center rounded-bl-xl rounded-br-xl">
            <h4 class="text-lg md:text-2xl font-bold text-white text-center">${project.title}</h4>
            <a href="${project.liveUrl}" target="_blank" class="px-8 py-4 rounded-lg bg-cyan-600 text-white hover:bg-green-400 transition-all duration-300">
              View <i class="text-white fa-solid fa-eye ps-3"></i>
            </a>
          </div>
        </div>
      `;
    container.innerHTML += projectHTML;
  });

  // Re-observe new elements for animations
  document.querySelectorAll(".animate-on-scroll").forEach((elem) => {
    observer.observe(elem);
  });
}

// form data export to excel sheet

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz5tlY1k7kq880ZVFW9PXOjlXMwE7GfjRxHtcMhKNA3wjA74Orhre_tHLMfwbsN4HNu_g/exec";

function showStatusMessage(message, type) {
  const popup = document.getElementById("custom-popup");
  const messageElement = document.getElementById("popup-message");

  if (popup && messageElement) {
    messageElement.textContent = message;
    popup.style.display = "flex";

    // Auto hide after 5 seconds for success messages
    if (type === "success") {
      setTimeout(() => {
        closePopUp();
      }, 5000);
    }
  }
}

//custom closing
function closePopUp() {
  const popup = document.getElementById("custom-popup");
  if (popup) {
    popup.style.display = "none";
  }
}

// Function to send data to Excel sheet
async function sendToExcel(formId = "myForm") {
  const form = document.getElementById(formId);
  const submitBtn = form.querySelector(".sendbtn");
  const originalBtnText = submitBtn.textContent;

  try {
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // Get form values directly from form elements
    const name = form.elements["user_name"]?.value || "";
    const email = form.elements["email"]?.value || "";
    const message = form.elements["msg"]?.value || "";

    // Get UTM source from URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "Direct";

    // Prepare form data for Google Apps Script
    const scriptFormData = new FormData();
    scriptFormData.append("name", name);
    scriptFormData.append("email", email);
    scriptFormData.append("message", message);
    scriptFormData.append(
      "page",
      document.title || window.location.pathname || "Unknown"
    );
    scriptFormData.append("utm_source", utmSource);

    // Debug: Log what we're sending
    console.log("Sending data to Excel:");
    console.log("Name:", name, "Email:", email, "Message:", message);

    // Send to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: scriptFormData,
    });

    // With no-cors mode, we can't read the response, so assume success
    console.log("Data sent to Google Apps Script");

    showStatusMessage(
      `Thanks for contacting dear ${name} ,  I will reach you shortly`,
      "success"
    );
    form.reset();
    return true;
  } catch (error) {
    console.error("Error sending to Excel:", error);
    showStatusMessage("Sorry, there was an error. Please try again.", "error");
    return false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
}

// Override the validateForm function to use sendToExcel
window.validateForm = function () {
  const name = document.getElementById("user_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("msg").value.trim();

  if (!name || !email || !message) {
    showStatusMessage("Please fill in all fields", "error");
    return false;
  }

  // Call sendToExcel and prevent default form submission
  sendToExcel();
  return false;
};
