<script>
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("bloco-frete");
    const cep = localStorage.getItem("cep");
    const cidade = localStorage.getItem("cidade");
    const estado = localStorage.getItem("estado");

    if (cep && cidade && estado) {
      container.innerHTML = `
        <div>
          Frete para <strong>${cidade} - ${estado}</strong>: <strong>GRÁTIS</strong>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div>
          Calcule seu frete:
          <br />
          <a href="cep.html?from=index" class="btn-frete">Informar CEP</a>
        </div>
      `;
    }
  });
</script>
