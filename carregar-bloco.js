// carregar-bloco.js
fetch('teste.html')
  .then(response => response.text())
  .then(html => {
    const container = document.createElement('div');
    container.innerHTML = html;
    document.querySelector('main').appendChild(container);
  })
  .catch(error => {
    console.error('Erro ao carregar bloco novo:', error);
  });
