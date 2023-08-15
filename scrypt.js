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

// ICONO DE NAVEGACIÓN

const icon = document.getElementById('icon');
const footIcon = document.getElementById('icon-footer');

function goHome() {
    window.location.href = "./index.html"
}

icon.onclick = goHome;
footIcon.onclick = goHome;


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

