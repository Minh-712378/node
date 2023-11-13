const links = document.querySelectorAll('.navbar a');

links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });

    link.classList.add('active');
  });
});