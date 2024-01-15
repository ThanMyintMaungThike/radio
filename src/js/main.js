import '../scss/style.scss';
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



