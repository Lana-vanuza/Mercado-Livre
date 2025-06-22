window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('comentarioModal');
  const modalImg = document.getElementById('comentarioModalImage');
  const closeBtn = document.getElementById('comentarioModalClose');

  // Abre o modal com a imagem clicada
  document.querySelectorAll('.comentario-fotos img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('active');
    });
  });

  // Fecha o modal ao clicar no botão de fechar
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Fecha o modal ao clicar fora da imagem (na área escura)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
