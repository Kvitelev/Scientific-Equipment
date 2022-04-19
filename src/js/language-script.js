const languageBtn = document.querySelector('.header__btn-language');
const languageItem = document.querySelectorAll('.header__item-language--none');
for (let i = 0; i < languageItem.length; i++) {
  languageBtn.addEventListener('click', function() {
    languageItem[i].classList.toggle('header__item-language--none');
  })
}
languageBtn.addEventListener('click', function() {
  if (languageBtn.classList.contains('header__btn-language--close')) {
    languageBtn.classList.remove('header__btn-language--close');
  }
  else {
    languageBtn.classList.add('header__btn-language--close');
  }
})
