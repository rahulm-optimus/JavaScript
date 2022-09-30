'use strict';

const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(openModal);

const showModalClick = function () {
  //can also create inside the event
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideModalClick = function () {
  //can also create inside the event
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let x = 0; x < openModal.length; x++) {
  console.log(openModal[x].addEventListener('click', showModalClick));
}

closeModal.addEventListener('click', hideModalClick);
overlay.addEventListener('click', hideModalClick);

//when calling inside the addeventlistener we dont need to add ()

//Now to apply close property with the help of Esc button
document.addEventListener('keydown', function (any) {
  console.log(any.key);
  if (any.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModalClick();
  }
});
