const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// 🔊 Son pop (sans fichier externe)
const popSound = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=");

// 💖 YES : message + vibration + cœurs + son
yesBtn.addEventListener("click", () => {
  message.textContent = "Yaaay 💕 I knew you’d say YES! 😍💖";

  // Vibration
  yesBtn.style.animation = "pulse 0.6s ease";
  setTimeout(() => (yesBtn.style.animation = ""), 600);

  // Son
  popSound.currentTime = 0;
  popSound.play().catch(() => {});

  // Pluie de cœurs
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 14 + 18 + "px";
    heart.style.animation = "fall 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
});

// 😈 NO : fuit la souris (desktop + mobile)
const moveNo = () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);