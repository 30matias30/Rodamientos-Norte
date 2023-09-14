const portfolioElement = document.querySelectorAll('.portfolio-elements');
const portfolioButtons = document.querySelectorAll('.portfolio-buttons');
const bdy = document.body;


function createNewsCard(event) {

    // obtener el ID del boton
        const clickedId = event.currentTarget.id;

    // Crea el div Padre
        var divFather = document.createElement('div');
        divFather.classList.add('fff');
        // document.body.appendChild(divFather);

    // Crea Contenedor de boton de Cierre
        var divClose = document.createElement('div');
        divClose.classList.add('closeBtn');
        divFather.appendChild(divClose);

    // Crea elementos de boton de cierre
        var x1 = document.createElement('span');
        var x2 = document.createElement('span');
        x1.classList.add('x1');
        x2.classList.add('x2');
        divClose.appendChild(x1);
        divClose.appendChild(x2);

    // Crea el contenedor de la imagen
        var divImg = document.createElement('div');
        divImg.classList.add('fff-img');
        divFather.appendChild(divImg);

    // Crea Contenedor de Title & Text
        var divTextContent = document.createElement('div');
        divTextContent.classList.add('fff-content');
        divFather.appendChild(divTextContent);

    // Crea Titutlo
        var divTitle = document.createElement('div');
        divTitle.classList.add('fff-content-title');
        divTextContent.appendChild(divTitle);

    // Crea Texto
        var divText = document.createElement('div');
        divText.classList.add('fff-content-text');
        divTextContent.appendChild(divText);

    if (clickedId === 'btn01' ||clickedId === 'btn02' || clickedId === 'btn03') {

        portfolioElements1.appendChild(divFather);


        if (clickedId === 'btn01') {
            divImg.classList.add('fff-img1');
            divTitle.classList.add('fff-title1');
            divText.classList.add('fff-txt1');

        } else if (clickedId === 'btn02') {
            divImg.classList.add('fff-img2');
            divTitle.classList.add('fff-title2');
            divText.classList.add('fff-txt2');
        } else {
            divImg.classList.add('fff-img3');
            divTitle.classList.add('fff-title3');
            divText.classList.add('fff-txt3');
        } 
    } else if (clickedId === 'btn04' ||clickedId === 'btn05' || clickedId === 'btn06') {

        portfolioElements2.appendChild(divFather);

        if(clickedId === 'btn04') {
            divImg.classList.add('fff-img4');
            divTitle.classList.add('fff-title4');
            divText.classList.add('fff-txt4');

        } else if (clickedId === 'btn05') {
            divImg.classList.add('fff-img5');
            divTitle.classList.add('fff-title5');
            divText.classList.add('fff-txt5');
        } else {
            divImg.classList.add('fff-img6');
            divTitle.classList.add('fff-title6');
            divText.classList.add('fff-txt6');
        }
    } else if (clickedId === 'btn07' ||clickedId === 'btn08' || clickedId === 'btn09') {

        portfolioElements3.appendChild(divFather);

        if(clickedId === 'btn07') {
            divImg.classList.add('fff-img7');
            divTitle.classList.add('fff-title7');
            divText.classList.add('fff-txt7');

        } else if (clickedId === 'btn08') {
            divImg.classList.add('fff-img8');
            divTitle.classList.add('fff-title8');
            divText.classList.add('fff-txt8');
        } else {
            divImg.classList.add('fff-img9');
            divTitle.classList.add('fff-title9');
            divText.classList.add('fff-txt9');
        }
    } else if (clickedId === 'btn10' ||clickedId === 'btn11' || clickedId === 'btn12') {

        portfolioElements4.appendChild(divFather);

        if(clickedId === 'btn10') {
            divImg.classList.add('fff-img10');
            divTitle.classList.add('fff-title10');
            divText.classList.add('fff-txt10');

        } else if (clickedId === 'btn11') {
            divImg.classList.add('fff-img11');
            divTitle.classList.add('fff-title11');
            divText.classList.add('fff-txt11');
        } else {
            divImg.classList.add('fff-img12');
            divTitle.classList.add('fff-title12');
            divText.classList.add('fff-txt12');
        }
    } else if (clickedId === 'btn13' ||clickedId === 'btn14' || clickedId === 'btn15') {

        portfolioElements5.appendChild(divFather);

        if(clickedId === 'btn13') {
            divImg.classList.add('fff-img13');
            divTitle.classList.add('fff-title13');
            divText.classList.add('fff-txt13');

        } else if (clickedId === 'btn14') {
            divImg.classList.add('fff-img14');
            divTitle.classList.add('fff-title14');
            divText.classList.add('fff-txt14');
        } else {
            divImg.classList.add('fff-img15');
            divTitle.classList.add('fff-title15');
            divText.classList.add('fff-txt15');
        }
    } else if (clickedId === 'btn16' ||clickedId === 'btn17' || clickedId === 'btn18') {

        portfolioElements6.appendChild(divFather);

        if(clickedId === 'btn16') {
            divImg.classList.add('fff-img16');
            divTitle.classList.add('fff-title16');
            divText.classList.add('fff-txt16');

        } else if (clickedId === 'btn17') {
            divImg.classList.add('fff-img17');
            divTitle.classList.add('fff-title17');
            divText.classList.add('fff-txt17');
        } else {
            divImg.classList.add('fff-img18');
            divTitle.classList.add('fff-title18');
            divText.classList.add('fff-txt18');
        }
    } else if (clickedId === 'btn19' ||clickedId === 'btn20' || clickedId === 'btn21') {

        portfolioElements7.appendChild(divFather);

        if(clickedId === 'btn19') {
            divImg.classList.add('fff-img19');
            divTitle.classList.add('fff-title19');
            divText.classList.add('fff-txt19');

        } else if (clickedId === 'btn20') {
            divImg.classList.add('fff-img20');
            divTitle.classList.add('fff-title20');
            divText.classList.add('fff-txt20');
        } else {
            divImg.classList.add('fff-img21');
            divTitle.classList.add('fff-title21');
            divText.classList.add('fff-txt21');
        }
    } else if (clickedId === 'btn22' ||clickedId === 'btn23' || clickedId === 'btn24') {

        portfolioElements8.appendChild(divFather);

        if(clickedId === 'btn22') {
            divImg.classList.add('fff-img22');
            divTitle.classList.add('fff-title22');
            divText.classList.add('fff-txt22');

        } else if (clickedId === 'btn23') {
            divImg.classList.add('fff-img23');
            divTitle.classList.add('fff-title23');
            divText.classList.add('fff-txt23');
        } else {
            divImg.classList.add('fff-img24');
            divTitle.classList.add('fff-title24');
            divText.classList.add('fff-txt24');
        }
    } else if (clickedId === 'btn25' ||clickedId === 'btn26' || clickedId === 'btn27') {

        portfolioElements9.appendChild(divFather);

        if(clickedId === 'btn25') {
            divImg.classList.add('fff-img25');
            divTitle.classList.add('fff-title25');
            divText.classList.add('fff-txt25');

        } else if (clickedId === 'btn26') {
            divImg.classList.add('fff-img26');
            divTitle.classList.add('fff-title26');
            divText.classList.add('fff-txt26');
        } else {
            divImg.classList.add('fff-img27');
            divTitle.classList.add('fff-title27');
            divText.classList.add('fff-txt27');
        }
    } else if (clickedId === 'btn28' ||clickedId === 'btn29' || clickedId === 'btn30') {

        portfolioElements10.appendChild(divFather);

        if(clickedId === 'btn28') {
            divImg.classList.add('fff-img28');
            divTitle.classList.add('fff-title28');
            divText.classList.add('fff-txt28');

        } else if (clickedId === 'btn29') {
            divImg.classList.add('fff-img29');
            divTitle.classList.add('fff-title29');
            divText.classList.add('fff-txt29');
        } else {
            divImg.classList.add('fff-img30');
            divTitle.classList.add('fff-title30');
            divText.classList.add('fff-txt30');
        }
    } else if (clickedId === 'btn31' ||clickedId === 'btn32' || clickedId === 'btn33') {

        portfolioElements11.appendChild(divFather);

        if(clickedId === 'btn31') {
            divImg.classList.add('fff-img31');
            divTitle.classList.add('fff-title31');
            divText.classList.add('fff-txt31');

        } else if (clickedId === 'btn32') {
            divImg.classList.add('fff-img32');
            divTitle.classList.add('fff-title32');
            divText.classList.add('fff-txt32');
        } else {
            divImg.classList.add('fff-img33');
            divTitle.classList.add('fff-title33');
            divText.classList.add('fff-txt33');
        }
    }




    // Boton de cierre
    divClose.addEventListener('click', function(){
        const divFather = document.querySelector('.fff');
        if (divFather && event.target !== divFather && !event.target.classList.contains('fff')) {
            // Comprueba si el objetivo del clic no es divFather ni un elemento .newsHolder
            divFather.remove(); // Elimina divFather del DOM
            // newsBackground.remove();
        }
    })


}

// Itera sobre cada elemento con la clase 'newsHolder' y agrega el evento
portfolioButtons.forEach(function(portfolioButtons) {
    portfolioButtons.addEventListener('click', createNewsCard);
});


// portfolio-elements ID

const portfolioElements1 = document.getElementById('pe1');
const portfolioElements2 = document.getElementById('pe2');
const portfolioElements3 = document.getElementById('pe3');
const portfolioElements4 = document.getElementById('pe4');
const portfolioElements5 = document.getElementById('pe5');
const portfolioElements6 = document.getElementById('pe6');
const portfolioElements7 = document.getElementById('pe7');
const portfolioElements8 = document.getElementById('pe8');
const portfolioElements9 = document.getElementById('pe9');
const portfolioElements10 = document.getElementById('pe10');
const portfolioElements11 = document.getElementById('pe11');