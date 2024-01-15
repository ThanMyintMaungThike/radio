import '../scss/style.scss';
<<<<<<< HEAD

let btn = document.querySelector('.btn');
let l_header = document.querySelector('.l-header__menu');

btn.addEventListener('click', function(e) {
        
        l_header.classList.toggle('show');
});
=======
import jQuery from 'jquery';
import 'slick-carousel'
const $ = jQuery;

$('.card-bloc--carousel').slick({
  fade: false,
  autoplay: false,
  pauseOnHover: true,
  autoplaySpeed: 5400,
  speed: 300,
  touchThreshold: 8,
  variableWidth: false,
  slidesToShow: 5,
  arrows: true,
  centerMode: true,
  responsive: [{

    breakpoint: 1320,
    settings: {
      slidesToShow: 3,
    }
  },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        infinite: true,
      },
    },
  ],
}); 



>>>>>>> 5a2f9fcef089150e480c7a45c5c136d62507dd16
