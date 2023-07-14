const loader = document.getElementById('preloader');

window.addEventListener("load", function() {
    loader.classList.toggle ("inActive");
});

loader.onclick = function() {

    loader.style.display="none";
}