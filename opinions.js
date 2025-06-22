function ativarModalFotosComentarios() {
  document.querySelectorAll(".comentario-fotos img").forEach(img => {
    img.addEventListener("click", () => {
      const lightbox = document.createElement('div');
      lightbox.style.position = 'fixed';
      lightbox.style.top = 0;
      lightbox.style.left = 0;
      lightbox.style.width = '100vw';
      lightbox.style.height = '100vh';
      lightbox.style.background = 'rgba(0,0,0,0.85)';
      lightbox.style.display = 'flex';
      lightbox.style.justifyContent = 'center';
      lightbox.style.alignItems = 'center';
      lightbox.style.zIndex = 9999;

      const imagem = document.createElement('img');
      imagem.src = img.src;
      imagem.style.maxWidth = '90vw';
      imagem.style.maxHeight = '80vh';
      imagem.style.borderRadius = '12px';
      imagem.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';

      lightbox.appendChild(imagem);
      document.body.appendChild(lightbox);

      lightbox.addEventListener("click", () => {
        document.body.removeChild(lightbox);
      });
    });
  });
}
