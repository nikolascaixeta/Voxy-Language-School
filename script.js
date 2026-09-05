const toggleBtn = document.getElementById('dark');

toggleBtn.addEventListener('click', () => {
  
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.innerHTML = '&#9728;&#65039'; 
  } else {
    toggleBtn.innerHTML = '&#127769'; 
  }
});
const swiper = new Swiper('.meu-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false, 
    loop: true,
    autoHeight: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

const btnMenu = document.getElementById(`burguer`);
const menu = document.getElementById(`menu`);
const dropToggle = document.querySelector(`.drop-toggle`);
const drop = dropToggle.closest(`.drop`);

btnMenu.addEventListener(`click`, () => {
    menu.classList.toggle(`ativo`);
});

document.addEventListener(`click`, (event) => {
    if (!menu.contains(event.target) && !btnMenu.contains(event.target)) {
        menu.classList.remove(`ativo`);
    }
});

dropToggle.addEventListener(`click`, (event) => {
    event.preventDefault();
    drop.classList.toggle(`fechado`);
});
