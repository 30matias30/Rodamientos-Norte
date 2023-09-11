const mobileSlide = document.querySelectorAll('.mobile-slide');

mobileSlide.forEach( m => {
    m.addEventListener('click', function() {
        const url = m.getAttribute('data-url');
        switch(url) {
            case 'Noticial/MobileNews-2.html':
                window.location.href = url;
                break;

            case 'Noticial/MobileNews-2.html':
            window.location.href = url;
            break;
            
            case 'Noticial/MobileNews-3.html':
                window.location.href = url;
                break;

            case 'Noticial/MobileNews-4.html':
            window.location.href = url;
            break;

            case 'Noticial/MobileNews-5.html':
                window.location.href = url;
                break;

            case 'Noticial/MobileNews-6.html':
            window.location.href = url;
            break;

            case 'Noticial/MobileNews-7.html':
                window.location.href = url;
                break;

            case 'Noticial/MobileNews-8.html':
            window.location.href = url;
            break;

            case 'Noticial/MobileNews-9.html':
                window.location.href = url;
                break;
            
        }
    })
})