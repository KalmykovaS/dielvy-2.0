"use strict";

const modalOpenedClass = `modal--opened`;




function closePopup() {
  document.querySelectorAll(`.${modalOpenedClass}`).forEach((element) => {
    element.classList.remove(modalOpenedClass);
  });
}

function showPopup(popupSelector) {
  closePopup();
  const popup = document.querySelector(popupSelector);
  popup.classList.add(modalOpenedClass);
}

const navMain = document.querySelector(`.main-nav`);
function toggleMenu() {
  navMain.classList.toggle(`main-nav--opened`);
  navMain.classList.toggle(`main-nav--closed`);
}

function closeMenu() {
  navMain.classList.remove(`main-nav--opened`);
  navMain.classList.add(`main-nav--closed`);
}

document.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
    closeMenu();
  }
});

const btn = document.getElementById('contacts-submit');
const requestPopup = document.getElementById('request-popup');
const falsePopup = document.getElementById('false-popup');

document.getElementById('contacts-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.disabled = true;

   const serviceID = 'default_service';
   const templateID = 'template_8m4x749';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.disabled = false;
      requestPopup.classList.add('modal--opened');
    }, (err) => {
      btn.disabled = false;
      falsePopup.classList.add('modal--opened');
      console.log(JSON.stringify(err));
    });
});


const closeButtons = document.getElementsByClassName('modal__background');
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', (evt) => {
    closePopup();
  });
}
