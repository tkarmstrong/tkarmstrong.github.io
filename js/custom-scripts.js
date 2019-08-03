/*
============================================
; Title:  tkarmstrong.github.io custom scripts
; Author: Tyler K. Armstrong
; BagetteBox Author: Copyright (c) 2018 https://github.com/feimosi/
; Date:   23 March 2019
; Description: Scripts for portfolio site.
;===========================================
*/

// Initialize BaguetteBox
baguetteBox.run('.compact-gallery', {animation: 'slideIn'});

// Gallery Swiper Web-430
var mySwiper = new Swiper('#slider-gallery', {
  speed: 400,
  navigation: {
    nextEl: '#slider-gallery-next',
    prevEl: '#slider-gallery-prev',
  },
  pagination: {
    el: '#slider-gallery-pagination',
    clickable: true
  },
  slidesPerView: 'auto'
});
