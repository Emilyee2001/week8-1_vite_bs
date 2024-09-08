import './assets/scss/all.scss';
import "bootstrap";

// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// swiper
var swiper = new Swiper(".swiperCardProgress", {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
      },
    breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
    }
});

var swiper = new Swiper(".swiperCardImg",{
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24
        },
    }
});

var swiper = new Swiper(".swiperTagIcon", {
    breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
    }
});
var swiper = new Swiper(".swiperCardOverlap", {
    breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24
          },
    }
});



console.log("Hello world!");