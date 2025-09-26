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

  //latest year
  document.getElementById("year").innerHTML = new Date().getFullYear();

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
    console.log(
      "Name:",
      name,
      "Email:",
      email,
      "Message:",
      message
    );

    // Send to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: scriptFormData,
    });

    // With no-cors mode, we can't read the response, so assume success
    console.log("Data sent to Google Apps Script");
    
    showStatusMessage(
      `Thanks for contacting dear ${name} , I will reach you shortly`,
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
window.validateForm = function() {
  const name = document.getElementById('user_name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('msg').value.trim();
  
  if (!name || !email || !message) {
    showStatusMessage('Please fill in all fields', 'error');
    return false;
  }
  
  // Call sendToExcel and prevent default form submission
  sendToExcel();
  return false;
};
