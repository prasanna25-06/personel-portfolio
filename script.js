
// ================= ACTIVE NAVBAR HIGHLIGHT =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ================= TYPING ANIMATION =================

const textArray = ["CSE Graduate", "Web Developer", "Software Engineer"];
let typing = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typing.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typing.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);


// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .cert-card, .counter-box, .edu-card, .resume-card"
);

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);


// ================= CERTIFICATE CLICK MODAL =================

const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const certImages = document.querySelectorAll(".cert-card img");
const closeBtn = document.querySelector(".close");

certImages.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

if (closeBtn) {
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


// ================= COUNTER ANIMATION ON SCROLL =================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;

    const updateCounter = () => {
        const c = +counter.innerText;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
};

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// ================= PROUD PULSE EFFECT FOR ACHIEVEMENTS =================

const achievementBoxes = document.querySelectorAll(".counter-box");

achievementBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.animation = "pulseGlow 1s infinite alternate";
    });

    box.addEventListener("mouseleave", () => {
        box.style.animation = "none";
    });
});


// ================= OPTIONAL: SPINNER SPEED CHANGE ON HOVER =================

const profileWrapper = document.querySelector(".profile-wrapper");

if (profileWrapper) {
    profileWrapper.addEventListener("mouseenter", () => {
        document.querySelector(".spinner").style.animationDuration = "2s";
    });

    profileWrapper.addEventListener("mouseleave", () => {
        document.querySelector(".spinner").style.animationDuration = "6s";
    });
}

// ================= PROFESSIONAL FLOATING SPARKLES =================

window.addEventListener("load", () => {
  const container = document.querySelector(".sparkle-container");

  for (let i = 0; i < 40; i++) {  // low number = professional look
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = 8 + Math.random() * 6 + "s";
    sparkle.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(sparkle);
  }
});


const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});