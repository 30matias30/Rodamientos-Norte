// Boton de cierre de la Notcia Expandida
const closeNewBtn = document.querySelector('#closeNewBtn');
const fullNew = document.querySelector('#fullNew');

closeNewBtn.addEventListener('click', () => {

    fullNew.classList.remove('expanded');
    fullNew.classList.add('noExpanded');

});

// Primer Noticia