
// ==================================
// 1. GENERATE FLOATING STARS
// ==================================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 65; i++) {
    const star = document.createElement("span");

    star.classList.add("star");
    star.textContent = Math.random() > 0.5 ? "✦" : "·";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize = (Math.random() * 12 + 5) + "px";
    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration = (Math.random() * 3 + 3) + "s";

    starsContainer.appendChild(star);
}


// ==================================
// 2. MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a navigation link

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ==================================
// 3. RANDOM ARMY MESSAGES
// ==================================

const messages = [
    "You are doing amazing. Keep going, ARMY! 💜",
    "Remember to love yourself today. 🌷",
    "Your story is still being written. ✨",
    "Take a breath. You deserve a little rest.",
    "You are someone's reason to smile. 💜",
    "Keep shining, even on your cloudy days. ☁️",
    "Small steps are still progress. 🌙",
    "Never forget how far you have come.",
    "You deserve all the beautiful things in life. 💜",
    "Somewhere, a beautiful new memory is waiting for you."
];

const messageButton = document.getElementById("messageBtn");
const randomMessage = document.getElementById("randomMessage");

messageButton.addEventListener("click", () => {

    const randomIndex = Math.floor(
        Math.random() * messages.length
    );

    randomMessage.style.opacity = "0";

    setTimeout(() => {
        randomMessage.textContent = messages[randomIndex];
        randomMessage.style.opacity = "1";
    }, 250);

});


// ==================================
// 4. HEART BUTTON INTERACTION
// ==================================

const heartButton = document.getElementById("heartBtn");
const heartLabel = document.getElementById("heartLabel");

let isLoved = false;

heartButton.addEventListener("click", () => {

    isLoved = !isLoved;

    if (isLoved) {
        heartButton.textContent = "♥";
        heartButton.classList.add("loved");
        heartLabel.textContent = "A little more love for BTS 💜";
    } else {
        heartButton.textContent = "♡";
        heartButton.classList.remove("loved");
        heartLabel.textContent = "Send some love to BTS";
    }

});


// ==================================
// 5. FADE IN RANDOM MESSAGE
// ==================================

randomMessage.style.transition = "opacity 0.25s ease";


const hero = document.querySelector(".hero");

if (hero) {
  for (let i = 0; i < 2; i++) {
    const star = document.createElement("span");
    star.className = "shooting-star";
    hero.appendChild(star);
  }
}