// LOADER

const loader = document.getElementById('preloader');
const loaderLogo = document.getElementById('preloaderLogo');

window.addEventListener("load", function() {
    loader.classList.toggle ("inActive");
    loaderLogo.classList.toggle("inActive");
});

loader.onclick = function() {

    loader.style.display="none";
    loaderLogo.style.display="none";

}

loaderLogo.onclick = function() {

    loader.style.display="none";
    loaderLogo.style.display="none";

}

// const ini = document.getElementById('ini');
// const head = document.getElementById('header');

// ini.addEventListener('click', () => {

//     head.classList.remove('header');
//     head.classList.add('secondHeader');
// })

const optionButton = document.querySelectorAll('.option');

optionButton.forEach( div => {
    div.addEventListener("click", function() {
        const url = div.getAttribute("data-url");
        switch (url) {
            case "./index.html":
                window.location.href = url;
                break;
            case "./productos.html":
                window.location.href = url;
                break
            case "./institucional.html":
                window.location.href = url;
                break;
            case "./catalogos.html":
                window.location.href = url;
                break;
            case "./contacto.html":
                window.location.href = url;
                break;
            default:
                window.alert("URL no válida");
        }
    })
})