 // Scroll Animation
function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// Responsive Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
  // Robust play attempt and optional "unmute" UI
    (function () {
      const vid = document.getElementById('bgVid');
      const btn = document.getElementById('unmute');

      // Attempt to play — some browsers still need a user gesture; catching errors helps.
      function tryPlay() {
        vid.play().catch((err) => {
          // If autoplay failed because of autoplay policy, show unmute / play UI so user can start playback with interaction
          // We display an "Unmute" button which when clicked will unmute and play.
          btn.style.display = 'block';
          console.warn('Autoplay blocked or failed:', err);
        });
      }

      // If video is muted and we can show an unmute option — clicking unmute will unmute and play with user gesture.
      btn.addEventListener('click', () => {
        // unmuting without user gesture may still be blocked, but clicking is a user gesture which should permit sound
        vid.muted = false;
        vid.play().catch((err) => {
          console.error('Play after unmute failed:', err);
        });
        btn.style.display = 'none';
      });

      // When metadata loaded we can check whether the video is actually muted and whether we need to show the button
      vid.addEventListener('loadedmetadata', () => {
        // if user wants to start muted but still have an option to unmute, show button only if muted
        if (vid.muted) {
          // don't show button yet — only if autoplay fails (handled in catch)
        } else {
          btn.style.display = 'none';
        }
      });

      // Start the initial attempt
      tryPlay();
    })();
