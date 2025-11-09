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

    // Expand/Collapse Details
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        details.classList.toggle('open');
        btn.textContent = details.classList.contains('open') ? 'See Less' : 'See More';
      });
    });