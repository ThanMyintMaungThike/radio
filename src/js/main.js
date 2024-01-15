import '../scss/style.scss';

let btn = document.querySelector('.btn');
let l_header = document.querySelector('.l-header__menu');

btn.addEventListener('click', function(e) {
        
        l_header.classList.toggle('show');
});