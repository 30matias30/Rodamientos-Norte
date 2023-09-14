// CONTACTO FORM MOBILE VERSION

const formCard1 = document.querySelector('#contact-form-card1');
const formCard2 = document.querySelector('#contact-form-card2');
const formCard3 = document.querySelector('#contact-form-card-invisible');

const nextButton1 = document.querySelector('.nextButton1');
const nextButton2 = document.querySelector('.nextButton2');

nextButton1.addEventListener('click', () => {
    formCard1.classList.toggle('contact-form-card-invisible');
    formCard2.classList.toggle('contact-form-card-invisible');
})

nextButton2.addEventListener('click', () => {
    formCard2.classList.toggle('contact-form-card-invisible');
    formCard3.id = '';
})