const newsHolders = document.querySelectorAll('.newsHolder');
const bdy = document.body;


function createNewsCard(event) {
    // Crea el fondo
    const newsBackground = document.createElement('div');
    newsBackground.classList.add('newsGeneratedBackground')
    document.body.appendChild(newsBackground);
    document.body.insertBefore(newsBackground, bdy.firstChild);
    

    // Obtiene la id del elemento .newsHolder que fue clickeado
    const clickedId = event.currentTarget.id;

    // Crea el div Padre
    var divFather = document.createElement('div');
    divFather.classList.add('newsGeneratedCard');
    document.body.appendChild(divFather);

    // Crea el contenedor de la imagen
    var divImg = document.createElement('div');
    divImg.classList.add('newsGeneratedCard-img');
    divFather.appendChild(divImg);

    // Creal el titulo
    var divTitle = document.createElement('h2');
    divTitle.classList.add('newsGeneratedCard-title');
    divFather.appendChild(divTitle);

    // Crea el texto
    var divText = document.createElement('p');
    divText.classList.add('newsGeneratedCard-text');
    divFather.appendChild(divText);

    // Crea el boton de cierre
    var divCloseBtn = document.createElement('div');
    divFather.appendChild(divCloseBtn);
    divCloseBtn.classList.add('circular-button');
    var bar1 = document.createElement('div');
    var bar2 = document.createElement('div');
    bar1.classList.add('bar1');
    bar2.classList.add('bar2');
    divCloseBtn.appendChild(bar1);
    divCloseBtn.appendChild(bar2);

    // Aplica estilos basados en la id del elemento .newsHolder
    if (clickedId === 'newsHolder1') {
        divImg.classList.add('newsImg1');
        divTitle.classList.add('newsTitle1');
        divText.classList.add('newsText1');
    } else if (clickedId === 'newsHolder2') {
        divImg.classList.add('newsImg2');
        divTitle.classList.add('newsTitle2');
        divText.classList.add('newsText2');
    } else if (clickedId === 'newsHolder3') {
        divImg.classList.add('newsImg3');
        divTitle.classList.add('newsTitle3');
        divText.classList.add('newsText3');
    } else if (clickedId === 'newsHolder4') {
        divImg.classList.add('newsImg4');
        divTitle.classList.add('newsTitle4');
        divText.classList.add('newsText4');
    } else if (clickedId === 'newsHolder5') {
        divImg.classList.add('newsImg5');
        divTitle.classList.add('newsTitle5');
        divText.classList.add('newsText5');
    } else if (clickedId === 'newsHolder6') {
        divImg.classList.add('newsImg6');
        divTitle.classList.add('newsTitle6');
        divText.classList.add('newsText6');
    } else if (clickedId === 'newsHolder7') {
        divImg.classList.add('newsImg7');
        divTitle.classList.add('newsTitle7');
        divText.classList.add('newsText7');
    } else if (clickedId === 'newsHolder8') {
        divImg.classList.add('newsImg8');
        divTitle.classList.add('newsTitle8');
        divText.classList.add('newsText8');
    } else {
        divImg.classList.add('newsImg9');
        divTitle.classList.add('newsTitle9');
        divText.classList.add('newsText9');
    }
    // Cerrar noticia al hacer click fuera
    newsBackground.addEventListener('click', function(event) {
        const divFather = document.querySelector('.newsGeneratedCard');
        if (divFather && event.target !== divFather && !event.target.classList.contains('newsHolder')) {
            // Comprueba si el objetivo del clic no es divFather ni un elemento .newsHolder
            divFather.remove(); // Elimina divFather del DOM
            newsBackground.remove();
        }
    });

    // Boton de cierre
    divCloseBtn.addEventListener('click', function(){
        const divFather = document.querySelector('.newsGeneratedCard');
        if (divFather && event.target !== divFather && !event.target.classList.contains('newsHolder')) {
            // Comprueba si el objetivo del clic no es divFather ni un elemento .newsHolder
            divFather.remove(); // Elimina divFather del DOM
            newsBackground.remove();
        }
    })
    
}


// Itera sobre cada elemento con la clase 'newsHolder' y agrega el evento
newsHolders.forEach(function(newsHolder) {
    newsHolder.addEventListener('click', createNewsCard);
});






