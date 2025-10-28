// FUNCTIONALITY: SCROLL ARROW VISIBILITY
const scrollArrow = document.getElementById("scrollArrow");

if (scrollArrow) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollArrow.style.opacity = "0";
    } else {
      scrollArrow.style.opacity = "1";
    }
  });
}

// FUNCTIONALITY: ENVELOPE INTERACTION
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const envelopePrompt = document.getElementById("envelopePrompt");
let isOpen = false;

if (envelope && letter && envelopePrompt) {
  const openLetter = () => {
    envelope.classList.add("open");
    letter.classList.add("visible", "opacity-100", "scale-100");
    letter.classList.remove("opacity-0", "scale-90", "pointer-events-none");
    envelopePrompt.textContent = "Click anywhere to close";
    isOpen = true;
  };

  const closeLetter = () => {
    envelope.classList.remove("open");
    letter.classList.remove("visible", "opacity-100", "scale-100");
    letter.classList.add("opacity-0", "scale-90", "pointer-events-none");
    envelopePrompt.textContent = "Click the envelope to open";
    isOpen = false;
  };

  envelope.addEventListener("click", (e) => {
    if (!isOpen) {
      openLetter();
    } else {
      closeLetter();
    }
    // Avoid immediate close from the document click handler
    e.stopPropagation();
  });

  // Prevent letter clicks from closing
  letter.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (isOpen) {
      closeLetter();
    }
  });
}

// FUNCTIONALITY: AUDIO CONTROL
const audioControl = document.getElementById("audioControl");
const backgroundAudio = document.getElementById("backgroundAudio");
const soundOnIcon = document.getElementById("soundOnIcon");
const soundOffIcon = document.getElementById("soundOffIcon");

if (audioControl && backgroundAudio) {
  backgroundAudio.volume = 0.1 ;

  audioControl.addEventListener("click", () => {
    if (backgroundAudio.paused) {
      backgroundAudio.play();
      soundOnIcon.classList.remove("hidden");
      soundOffIcon.classList.add("hidden");
    } else {
      backgroundAudio.pause();
      soundOnIcon.classList.add("hidden");
      soundOffIcon.classList.remove("hidden");
    }
  });

  // Attempt to play audio on load and sync icon
  window.addEventListener("load", () => {
    let playPromise = backgroundAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully.
          soundOnIcon.classList.remove("hidden");
          soundOffIcon.classList.add("hidden");
        })
        .catch(() => {
          // Autoplay was prevented.
          soundOnIcon.classList.add("hidden");
          soundOffIcon.classList.remove("hidden");
        });
    }
  });
}

// FUNCTIONALITY: NAME INPUT AND REDIRECT
let submitButton = document.getElementById("submitButton");
let nameInput = document.getElementById("nameInput");

if (submitButton) {
  submitButton.addEventListener("click", function () {
    if (
      nameInput.value === "Denise" ||
      nameInput.value === "denise" ||
      nameInput.value === "DENISE"
    ) {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "loading.html";
      }, 1000);
    } else {
      alert("You are not Austin's girlfriend!");
    }
  });
}

// FUNCTIONALITY: INVITATION RESPONSE BUTTONS
function yesResponse() {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "https://www.facebook.com/astnreyes";
  }, 1000);
}

function noResponse() {
  // Jumpscare
  console.log("No button clicked");
  noBtn = document.getElementById("noButton");
  myJumpScare = document.getElementById("jumpScare");
  myJumpScare.style.display = "block";
  myJumpScare.play();
}
