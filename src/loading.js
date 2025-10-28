window.addEventListener("load", () => {
  // Wait for a few seconds on the loading screen
  setTimeout(() => {
    // Add fade-out class to body
    document.body.classList.add("fade-out");

    // After fade-out animation, navigate to the next page
    setTimeout(() => {
      window.location.href = "invitation.html";
    }, 1000); // This duration should match the fadeOut animation time
  }, 3000); // How long to show the loading screen before fading out
});
