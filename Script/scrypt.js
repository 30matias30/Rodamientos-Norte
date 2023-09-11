// LOADER

const loader = document.getElementById('preloader');
const loaderLogo = document.getElementById('preloaderLogo');

window.addEventListener("load", function() {
    loader.classList.toggle ("inActive");
    loaderLogo.classList.toggle("inActive");

    setTimeout(() => {

        loader.style.display="none";
        loaderLogo.style.display="none";
        
    }, 2050);
});


loader.onclick = function() {

    loader.style.display="none";
    loaderLogo.style.display="none";

}

loaderLogo.onclick = function() {

    loader.style.display="none";
    loaderLogo.style.display="none";

}


// BOTONES DE NAVEGACIÓN

const optionButton = document.querySelectorAll('.option');
const sideBar = document.querySelector('.sideBar');
const body = document.querySelector('#body');
const header = document.querySelector('#header');
const optionsBar = document.querySelector('#optionsBar');
const middleNews = document.querySelector('#middle-news');
const footerPhoto = document.querySelector('.footer-photo');
const footer = document.querySelector('.footer');
const greenSeparator = document.querySelector('.green-separator');

optionButton.forEach( div => {
    div.addEventListener("click", function() {
        const url = div.getAttribute("data-url");
        switch (url) {
            case "../index.html":
                window.location.href = url;
                break;
            case "../productos.html":
                window.location.href = url;
                break
            case "../institucional.html":
                window.location.href = url;
                break;
            case "../catalogos.html":
                window.location.href = url;
                break;
            case "../contacto.html":
                window.location.href = url;
                break;
            case "sideBar":
                sideBar.classList.toggle('actived'); //Funcion para desplegar el Side Bar Menu
                blur();
                break;
            default:
                window.alert("URL no válida");
        }
    })
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('actived');
    blur();
});

function blur() {
    const blurElements = [body, header, optionsBar, middleNews, footerPhoto, footer, greenSeparator];
    blurElements.forEach((element) => {
        element.classList.toggle('blur');
    })
}

// ICONO DE NAVEGACIÓN

// const icon = document.getElementById('icon');
// const footIcon = document.getElementById('icon-footer');

// function goHome() {
//     window.location.href = "./index.html"
// }

// icon.onclick = goHome;
// footIcon.onclick = goHome;


// DESCARGAR CATÁLOGOS

const divsDescargarPDF = document.querySelectorAll(".catalog-card-button");


divsDescargarPDF.forEach( div => {
  div.addEventListener("click", function() {
    const url = div.getAttribute("data-url");
    const nombreArchivo = obtenerNombreArchivo(url);

    // Crea un enlace temporal y simula un clic para descargar el PDF
    const enlaceTemporal = document.createElement("a");
    enlaceTemporal.href = url;
    enlaceTemporal.setAttribute("download", nombreArchivo);
    document.body.appendChild(enlaceTemporal);
    enlaceTemporal.click();
    document.body.removeChild(enlaceTemporal);
  });
});

function obtenerNombreArchivo(url) {
  const partesUrl = url.split("/");
  return partesUrl[partesUrl.length - 1];
};

// FOOTER BOTTOMS

const footerButton = document.querySelectorAll('.pointer-footer');

footerButton.forEach(div => {
    div.addEventListener('click', function(){    
        window.open("https://www.google.com/maps?ll=-30.983765,-64.089853&z=19&t=m&hl=es&gl=AR&mapclient=embed&cid=3844533092778515095", "_blank");
    });
})


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




