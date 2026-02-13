// ================= TYPING EFFECT =================

const texts = ["Front End Developer", "UI Designer", "React Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }

})();

function erase() {
  letter = currentText.slice(0, --index);
  document.getElementById("typing-text").textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 300);
  } else {
    setTimeout(erase, 50);
  }
}


// ================= SCROLL REVEAL =================
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);


// ================= PROJECT CARD STAGGER =================
const cards = document.querySelectorAll("#projects .grid > div");

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease";
  
  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 200);
});


// ================= NAVBAR ACTIVE LINK =================

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("text-[#4ea8ff]");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("text-[#4ea8ff]");
    }
  });
});

const elements = document.querySelectorAll(".animate, .project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-16");
      entry.target.classList.add("opacity-100", "translate-y-0");
    } else {
      entry.target.classList.remove("opacity-100", "translate-y-0");
      entry.target.classList.add("opacity-0", "translate-y-16");
    }

  });
}, {
  threshold: 0.2
});

elements.forEach((el) => observer.observe(el));

// ================= NAVBAR ACTIVE + SMOOTH SCROLL =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const headerOffset = 80;

// Active link saat scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-[#4ea8ff]");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-[#4ea8ff]");
    }
  });
});

// Smooth scroll saat klik
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
