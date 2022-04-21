const popup = document.querySelector('.popup');
const popupBtn = document.querySelectorAll('.btn-popup');
const popupBtnClose = popup.querySelector('.popup__btn-close');
for (let i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener('click', function() {
    popup.classList.remove('popup-none')
  })
}
popupBtnClose.addEventListener('click', function() {
  popup.classList.add('popup-none');
})
document.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    popup.classList.add('popup-none');
  }
})
//Доделать что бы была проверка input на заполненость
const popupForm = popup.querySelector('.popup__form');
const btnForm = popupForm.querySelector('.btn__fone');
const input = popupForm.querySelectorAll('.popup__input');
for (let i = 0; i < input.length; i++) {
  if (input[i].ariaValueText) {
    btnForm.disabled = true;
  }
  else {
    btnForm.disabled = true;
  }
}
