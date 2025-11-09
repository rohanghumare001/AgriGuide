// Scroll Animation
    const cards = document.querySelectorAll('.card');

    function revealCards() {
      cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const height = window.innerHeight;
        if (top < height - 50) {
          card.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", revealCards);
    window.addEventListener("load", revealCards);