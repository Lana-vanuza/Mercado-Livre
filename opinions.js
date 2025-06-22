// opinions.js
window.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll(".comentario-fotos img");
  const modal = document.getElementById("comentarioModal");
  const modalImg = document.getElementById("comentarioModalImage");
  const fechar = document.getElementById("comentarioModalClose");

  imagens.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.style.display = "flex";
    });
  });

  fechar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Fecha ao clicar fora da imagem
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
