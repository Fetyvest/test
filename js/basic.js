const burgerBnt = document.getElementById('burgerBnt');
const burgerModal = document.getElementById('burgerModal');

let isModal = 0

burgerBnt.addEventListener('click', () => {
    if(!isModal){
        isModal = 1
        burgerModal.style.top = '75px'
    }
    else{
        isModal = 0
        burgerModal.style.top = '-175px'
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 800){
        isModal = 0
        burgerModal.style.top = '-175px'
    }
})

document.addEventListener('touchstart', (event) => {
    const isClickInside = burgerModal.contains(event.target)
    const isClickOnOpenBtn = event.target.closest('.header__burger')

    if (!isClickInside && !isClickOnOpenBtn) {
        burgerModal.style.top = '-175px'
    }
})

document.addEventListener('mousedown', (event) => {
    const isClickInside = burgerModal.contains(event.target)
    const isClickOnOpenBtn = event.target.closest('.header__burger')

    if (!isClickInside && !isClickOnOpenBtn) {
        isModal = 0
        burgerModal.style.top = '-175px'
    }
})