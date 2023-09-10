const mobileDiv = document.querySelector('#slide1');

mobileDiv.addEventListener('click', () => {

    mobileDiv.classList.remove('mobile-slide-notSelected');
    mobileDiv.classList.add('mobile-slide-selected');

});