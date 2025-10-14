 // Simple text animation on scroll
    const cards = document.querySelectorAll('.card');
    window.addEventListener('scroll', () => {
      const trigger = window.innerHeight * 0.8;
      cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < trigger) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        //   card.style.scale = '1';
        }
      });
    });

     // Optional: Click to pause or resume rotation
  const border = document.querySelector('.rotating-border');
  let isRotating = true;

  document.querySelector('.circle-frame').addEventListener('click', () => {
    isRotating = !isRotating;
    border.style.animationPlayState = isRotating ? 'running' : 'paused';
  });