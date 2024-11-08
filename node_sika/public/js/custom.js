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



$(document).ready(function () {
    $('.employee-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        adaptiveHeight: true,

    });

});






$(document).ready(function () {
    var isMobile = $(window).width() <= 768;

    $('.merchant-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: !isMobile, // Disable autoplay on mobile screens
        autoplaySpeed: 1000,
        speed: 1000,
        prevArrow: $('.custom-arrow.slick-prev.arrow-2'),
        nextArrow: $('.custom-arrow.slick-next.arrow-2'),
        // adaptiveHeight: true,
    });
});





// first
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




// second
function toggleAccordion1(item) {
    const content = document.getElementById(item);
    const icon = document.getElementById(`icon-${item}`);
    const allContents = document.querySelectorAll('.accordion-item > div'); // Select all accordion content divs
    const allIcons = document.querySelectorAll('.accordion-item span'); // Select all accordion icons
    const allItems = document.querySelectorAll('.accordion-item'); // Select all accordion items

    // Loop through all accordion items and close them
    allContents.forEach((section, index) => {
        if (section.id !== item) {
            section.classList.add('hidden'); // Close other sections
            allItems[index].classList.remove('active'); // Remove active class from other items
            allItems[index].classList.add('inactive'); // Add inactive class to other items
            allIcons[index].src = 'images/plus.png'; // Set icon to plus for closed items
        }
    });

    // Toggle the current accordion item
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        // icon.src = 'images/close.png';
        content.parentElement.classList.add('active'); // Add active class to the current item
        content.parentElement.classList.remove('inactive'); // Remove inactive class from the current item
    } else {
        content.classList.add('hidden');
        // icon.src = 'images/plus.png';
        content.parentElement.classList.remove('active'); // Remove active class from the current item
        content.parentElement.classList.add('inactive'); // Add inactive class to the current item
    }
}






// document.addEventListener("DOMContentLoaded", function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const banner = document.getElementById('banner');
//     const content = document.getElementById('content');


//     if (urlParams.has('tab')) {
//         document.getElementById('tabWraper').style.display = 'none';
//         banner.classList.add('sub-banner');
//         content.classList.add('sub-content');
//     }else {

//         banner.classList.remove('sub-banner');
//         content.classList.remove('sub-content');
//     }
// });





document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tabHeader = document.getElementById('tabHeader');

    if (urlParams.has('tab')) {
        // document.getElementById('tabWrapper').style.display = 'none';
        tabHeader.classList.remove('hidden');
    } else {
        tabHeader.classList.add('hidden');
    }
});
