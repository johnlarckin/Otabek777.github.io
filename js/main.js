'use strict';

// hide stick menu

let header = document.querySelector('.nav');

$(window).scroll(function() {

    if($(this).scrollTop() > 100) {    
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

let navSub = document.querySelector('.header-sub');

let navItem = document.querySelector('#nav-item').addEventListener('click', function (e) {
    e.preventDefault();
    navSub.classList.toggle('header-sub-active'); 
});

navSub.addEventListener('click', function (e) {
    if (e.target === navSub) {
        this.classList.remove('header-sub-active');
    }
})

$('.article__carousel').slick({
    infinite: true,
});