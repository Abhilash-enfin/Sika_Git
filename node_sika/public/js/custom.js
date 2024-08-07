const menuButton = document.getElementById('menu-button');
document.getElementById('menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('open');
    menuButton.classList.toggle('open');
});



window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


$(document).ready(function () {
    $('.responsive').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        // autoplaySpeed: 1000,
        // speed: 1000,
        prevArrow: $('.custom-arrow.slick-prev'),
        nextArrow: $('.custom-arrow.slick-next'),

    });

});




function toggleAccordion(item) {
    const content = document.getElementById(item);
    const icon = document.getElementById(`icon-${item}`);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.src = 'images/close.png';
    } else {
        content.classList.add('hidden');
        icon.src = 'images/plus.png';
    }
}




document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const banner = document.getElementById('banner');
    const content = document.getElementById('content');


    if (urlParams.has('tab')) {
        document.getElementById('tabWraper').style.display = 'none';
        banner.classList.add('sub-banner');
        content.classList.add('sub-content');
    }else {

        banner.classList.remove('sub-banner');
        content.classList.remove('sub-content');
    }
});

