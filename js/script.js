const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },



  autoplay: {
    delay: 3000,
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
