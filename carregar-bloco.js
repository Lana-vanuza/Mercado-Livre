// carregar-bloco.js
fetch('bloco-produto-novo.html')
  .then(response => response.text())
  .then(html => {
    const container = document.createElement('div');
    container.innerHTML = html;
    document.querySelector('main').appendChild(container);
  })
  .catch(error => {
    console.error('Erro ao carregar bloco novo:', error);
  });


<script src="carregar-bloco.js"></script>
