const canaisExtras = document.querySelectorAll(".menu__canal.escondido");

const botaoExpandirCanais = document.querySelector(".menu__botao-expandir-canais");

let canaisEstaoExpandidos = false;

botaoExpandirCanais.addEventListener("click", () => {
  canaisExtras.forEach((canal) => {
    canal.classList.toggle("escondido");
  });

  if (!canaisEstaoExpandidos) {
    canaisEstaoExpandidos = true;

    botaoExpandirCanais.innerHTML = `
      <i class="icone-mostrar icone-mostrar-rotacionado"></i>
      <span class="texto-colapsar-canais">Mostrar menos</span>
    `;
  } else {
    canaisEstaoExpandidos = false;

    botaoExpandirCanais.innerHTML = `
      <i class="icone-mostrar"></i>
      <span class="texto-colapsar-canais">Mostrar mais 2</span>
    `;
  }
});
