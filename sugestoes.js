window.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.id = 'sugestoes-container';
  document.body.appendChild(container);

  fetch('sugestoes.html')
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      console.error('Erro ao carregar sugestões:', error);
    });
});
