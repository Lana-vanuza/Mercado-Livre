// opinions.js
window.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll(".comentario-fotos img");
  const modal = document.getElementById("comentarioModal");
  const modalImg = document.getElementById("comentarioModalImage");
  const fechar = document.getElementById("comentarioModalClose");

  imagens.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("active");
    });
  });

  fechar.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Também fecha ao clicar fora da imagem
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
