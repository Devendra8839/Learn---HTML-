function scrollLeftFunc() {
  document.querySelector('.scroll-content').scrollBy({
    left: -100,
    behavior: 'smooth'
  });
};

function scrollRight() {
  document.querySelector('.scroll-content').scrollBy({
    left: 100,
    behavior: 'smooth'
  });
};