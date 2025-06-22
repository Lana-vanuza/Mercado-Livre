window.addEventListener("DOMContentLoaded", () => {
  const blocoFrete = document.getElementById("bloco-frete");

  // Tenta recuperar os dados do localStorage
  const cep = localStorage.getItem("cep");
  const cidade = localStorage.getItem("cidade");
  const estado = localStorage.getItem("estado");

  if (cep && cidade && estado) {
    blocoFrete.innerHTML = `
      <div class="frete-info">
        <p>Frete para <strong>${cidade} - ${estado}</strong>: <span class="gratis">GRÁTIS</span></p>
      </div>
    `;
  } else {
    blocoFrete.innerHTML = `
      <div class="frete-calc">
        <p>Calcule seu frete</p>
        <a href="cep.html" class="link-pix">Informar CEP</a>
      </div>
    `;
  }
});
