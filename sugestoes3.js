window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('sugestoes-container'); // usa o que já existe no HTML

  fetch('sugestoes3.html')
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      console.error('Erro ao carregar sugestões:', error);
    });
});
