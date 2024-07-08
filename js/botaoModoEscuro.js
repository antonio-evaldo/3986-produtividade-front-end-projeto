const checkboxModoEscuro = document.getElementById('checkbox-modo-escuro');

checkboxModoEscuro.addEventListener('change', () => {
  if (checkboxModoEscuro.checked) {
    document.body.classList.add('modo-escuro');
  } else {
    document.body.classList.remove('modo-escuro');
  }
});

// const botaoModoEscuro = document.querySelector(".cabecalho__switch-input");

// botaoModoEscuro.addEventListener("change", () => {
//   const root = document.querySelector(":root");
//   root.classList.toggle("modo-escuro", botaoModoEscuro.checked);
// });
