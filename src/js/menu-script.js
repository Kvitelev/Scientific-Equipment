const menuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.menu');
const linkBtn = document.querySelector('.menu__link--open');
const listOpen = document.querySelector('.menu__list-secondary');
menuBtn.addEventListener('click', function() {
  if (menuBtn.classList.contains("header__btn--open")) {
    menuBtn.classList.remove('header__btn--open');
    menuBtn.classList.add('header__btn--close');
    menu.classList.remove('menu-none');
  }
  else {
    menuBtn.classList.remove('header__btn--close');
    menuBtn.classList.add('header__btn--open');
    menu.classList.add('menu-none');
  }
})
linkBtn.addEventListener('click', function () {
  listOpen.classList.toggle('menu__list-secondary--none');
})
