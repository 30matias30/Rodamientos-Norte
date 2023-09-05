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
            case "sideBar":
                sideBar.classList.toggle('actived'); //Funcion para desplegar el Side Bar Menu
                blur();
                break;
            default:
                window.alert("URL no válida");
        }
    })
})

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


// MOBILE SLIDER

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll(".mobile-slide")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

const slideImages = document.querySelectorAll(".slide-img");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

slideImages.forEach((div) => {
    div.addEventListener("mousedown", dragStart);
    div.addEventListener("touchstart", dragStart);
});

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


