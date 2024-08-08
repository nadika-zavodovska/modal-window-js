const dialog = document.querySelector('.dialog')
const openModal = document.querySelector('.open-modal')
const closeModal = dialog.querySelector('.close-modal')

function closeOnOverlayClick({ currentTarget, target }) {
    const dialog = currentTarget
    const isOnOverlayClick = target === dialog
    if (isOnOverlayClick) {
        close()
    }
}

function openModalAndBlockScroll() {
    dialog.showModal()
    document.body.classList.add('scroll-block')
}

function returnScroll() {
    document.body.classList.remove('scroll-block')

}

function close() {
    dialog.close()
    returnScroll()
}

openModal.addEventListener('click', openModalAndBlockScroll)
closeModal.addEventListener('click', () => {
    close()
})
dialog.addEventListener('click', closeOnOverlayClick)
dialog.addEventListener('cancel', () => {
    returnScroll()
});