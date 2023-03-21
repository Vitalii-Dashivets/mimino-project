;(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal_r: document.querySelector('[data-modal]'),
  }
  refs.openModalBtns.forEach(openModalBtn => openModalBtn.addEventListener('click', toggleModal))
  refs.closeModalBtn.addEventListener('click', toggleModal)
  function toggleModal() {
    refs.modal_r.classList.toggle('is-hidden')
  }
})()