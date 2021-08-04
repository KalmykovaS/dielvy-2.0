"use strict"

const modalOpenedClass = `modal--opened`
function showPopup(popupSelector) {
  const popup = document.querySelector(popupSelector)
  popup.classList.add(modalOpenedClass)
}

function closePopup() {
  document.querySelectorAll(`.${modalOpenedClass}`).forEach((element) => {
    element.classList.remove(modalOpenedClass)
  })
}

document.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault()
    closePopup()
    closeMenu()
  }
})

const navMain = document.querySelector(`.main-nav`)
function toggleMenu() {
  navMain.classList.toggle(`main-nav--opened`)
  navMain.classList.toggle(`main-nav--closed`)
}

function closeMenu() {
  navMain.classList.remove(`main-nav--opened`)
  navMain.classList.add(`main-nav--closed`)
}


