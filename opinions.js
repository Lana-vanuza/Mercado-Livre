// opinions.js

window.addEventListener('DOMContentLoaded', () => {
  const photos = [
    "https://via.placeholder.com/600x600?text=Foto+1",
    "https://via.placeholder.com/600x600?text=Foto+2",
    "https://via.placeholder.com/600x600?text=Foto+3",
    "https://via.placeholder.com/600x600?text=Foto+4",
    "https://via.placeholder.com/600x600?text=Foto+5",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg"
  ];

  const modal = document.getElementById("photoModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("modalCloseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function abrirModal(index) {
    currentIndex = index;
    modalImage.src = photos[currentIndex];
    modal.classList.add("active");
    document.body.style.overflow = 'hidden'; // bloqueia scroll fundo
  }

  function fecharModal() {
    modal.classList.remove("active");
    document.body.style.overflow = ''; // libera scroll fundo
  }

  function mostrarAnterior() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    modalImage.src = photos[currentIndex];
  }

  function mostrarProximo() {
    currentIndex = (currentIndex + 1) % photos.length;
    modalImage.src = photos[currentIndex];
  }

  if (closeBtn) closeBtn.addEventListener("click", fecharModal);

  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target === modal) fecharModal();
    });
  }

  if (prevBtn) prevBtn.addEventListener("click", mostrarAnterior);

  if (nextBtn) nextBtn.addEventListener("click", mostrarProximo);

  document.querySelectorAll(".photo-thumb").forEach((img, idx) => {
    img.addEventListener("click", () => abrirModal(idx));
  });
});
