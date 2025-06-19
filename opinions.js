// opinions.js compatível com HTML/CSS atual

window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("photoModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("modalCloseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

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

  let currentIndex = 0;

  function abrirModal(index) {
    currentIndex = index;
    modalImage.src = photos[currentIndex];
    modal.classList.add("active");
    document.body.style.overflow = 'hidden';
  }

  function fecharModal() {
    modal.classList.remove("active");
    document.body.style.overflow = '';
  }

  function mostrarAnterior() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    modalImage.src = photos[currentIndex];
  }

  function mostrarProximo() {
    currentIndex = (currentIndex + 1) % photos.length;
    modalImage.src = photos[currentIndex];
  }

  closeBtn.addEventListener("click", fecharModal);
  modal.addEventListener("click", e => {
    if (e.target === modal) fecharModal();
  });
  prevBtn.addEventListener("click", mostrarAnterior);
  nextBtn.addEventListener("click", mostrarProximo);

  document.querySelectorAll(".photo-thumb").forEach((img, idx) => {
    img.addEventListener("click", () => abrirModal(idx));
  });

  // (Opcional) Lógica para "Ver mais opiniões" se quiser implementar depois
  // const btnLoadMore = document.getElementById('load-more-comments');
  // if (btnLoadMore) {
  //   btnLoadMore.addEventListener('click', () => {
  //     alert('Aqui você pode carregar mais comentários dinamicamente');
  //   });
  // }
});
