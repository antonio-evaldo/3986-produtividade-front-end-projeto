const checkboxModoEscuro = document.getElementById('checkbox-modo-escuro');
const logo = document.getElementById('logo-vidflow');

checkboxModoEscuro.addEventListener('change', () => {
  if (checkboxModoEscuro.checked) {
    document.body.classList.add('modo-escuro');
    logo.src = './img/modo_escuro/vidflow-logo-dark-mode.png';
  } else {
    document.body.classList.remove('modo-escuro');
    logo.src = './img/modo_claro/vidflow-logo-light-mode.png';
  }
});

