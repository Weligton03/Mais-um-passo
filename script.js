// ============== Contador de tempo ==============
const startDate = new Date("2025-04-20T00:00:00"); // <-- Coloque aqui a data de início
const loveDuration = document.getElementById("loveDuration");

function updateLoveTime() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  loveDuration.innerText =
    `${years} anos, ${months % 12} meses, ${days % 30} dias, ` +
    `${hours} horas e ${minutes} minutos`;
}

setInterval(updateLoveTime, 1000);
updateLoveTime();

// ============== Carrossel de Imagens ==============
const carousel = document.getElementById('carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  if (index < carousel.children.length - 1) index++;
  updateCarousel();
});

function updateCarousel() {
  const width = carousel.clientWidth;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}
