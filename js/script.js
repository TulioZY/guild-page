const swiper = new Swiper(".swiper-galeria", {
  slidesPerView: 3,
  breakpoints: {
    0:    { slidesPerView: 1 },  // mobile
    768:  { slidesPerView: 2 },  // tablet
    1024: { slidesPerView: 3 },  // desktop
  },
  spaceBetween: 20,

  loop: true,

  navigation: {
    nextEl: ".swiper-galeria .swiper-button-next",
    prevEl: ".swiper-galeria .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-galeria .swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const swiperMembros = new Swiper(".swiper-membros", {
  slidesPerView: 3,
  breakpoints: {
    0:    { slidesPerView: 1 },  // mobile
    768:  { slidesPerView: 2 },  // tablet
    1024: { slidesPerView: 3 },  // desktop
  },
  centeredSlides: true,    // card central em destaque
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-membros .swiper-button-next",
    prevEl: ".swiper-membros .swiper-button-prev",
  },

  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
});



const swiperEventos = new Swiper(".swiper-eventos", {
  slidesPerView: 3,
  breakpoints: {
    0:    { slidesPerView: 1 },  // mobile
    768:  { slidesPerView: 2 },  // tablet
    1024: { slidesPerView: 3 },  // desktop
  },
  spaceBetween: 20,

  loop: true,

  pagination: {
    el: ".swiper-eventos .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-eventos .swiper-button-next",
    prevEl: ".swiper-eventos .swiper-button-prev",
  },



  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDescricao = document.getElementById('lightbox-descricao');
const fecharBtn = document.getElementById('fechar-lightbox');

document.querySelectorAll('.swiper-slide img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxDescricao.textContent = img.dataset.descricao || '';
    lightbox.classList.add('ativo');
  });
});

fecharBtn.addEventListener('click', () => {
  lightbox.classList.remove('ativo');
});

// clicou fora da imagem = fecha também
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('ativo');
  }
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
    else {
      entry.target.classList.remove('visivel');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (window.scrollY > 50) { // 50px scrollados = ativa
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


