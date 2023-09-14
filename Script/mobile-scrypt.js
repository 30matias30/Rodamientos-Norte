const mobileSlide = document.querySelectorAll('.mobile-slide');

mobileSlide.forEach( m => {
    m.addEventListener('click', function() {
        const url = m.getAttribute('data-url');
        switch(url) {
            case url:
                window.location.href = url;
                break;

            case 'Noticias/MobileNews-2.html':
            window.location.href = url;
            break;
            
            case 'Noticias/MobileNews-3.html':
                window.location.href = url;
                break;

            case 'Noticias/MobileNews-4.html':
            window.location.href = url;
            break;

            case 'Noticias/MobileNews-5.html':
                window.location.href = url;
                break;

            case 'Noticias/MobileNews-6.html':
            window.location.href = url;
            break;

            case 'Noticias/MobileNews-7.html':
                window.location.href = url;
                break;

            case 'Noticias/MobileNews-8.html':
            window.location.href = url;
            break;

            case 'Noticias/MobileNews-9.html':
                window.location.href = url;
                break;
            
        }
    })
});

const icon = document.getElementById('icon');

icon.addEventListener('click', ()=> {
    window.location = '/Rodamientos-Norte/index.html';
})

