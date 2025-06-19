window.addEventListener("DOMContentLoaded", () => {
  fetch("comentarios.html")
    .then(response => response.text())
    .then(html => {
      const container = document.createElement("div");
      container.innerHTML = html;
      document.body.appendChild(container);
    })
    .catch(err => console.error("Erro ao carregar comentários:", err));
});
