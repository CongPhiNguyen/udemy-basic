'use strict';

const showModalButton1 = document.querySelector('#show-modal-1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btCloseModal = document.querySelector('#close-modal');

const openModal = () => {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  }
  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
  }
};

const closeModal = () => {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
  if (!overlay.classList.contains('hidden')) {
    overlay.classList.add('hidden');
  }
};

showModalButton1.onclick = () => {
  openModal();
};

btCloseModal.onclick = () => {
  closeModal();
};

overlay.onclick = () => {
  closeModal();
};

document.onkeypress = e => {
  // if(e.key)clg
  console.log(e.code);
  if (e.code == 'KeyC') {
    closeModal();
  }
};
