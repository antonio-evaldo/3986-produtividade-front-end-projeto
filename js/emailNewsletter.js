const dialog = document.querySelector('.dialog-confirmacao');

document.querySelector('.newsletter').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.querySelector('.newsletter__input').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (emailRegex.test(email)) {
    dialog.showModal();
  } else {
    alert('Por favor, insira um email válido.');
  }
});

// Fechar o dialog quando o usuário clicar no "x"
document.querySelector('.dialog-confirmacao__fechar').addEventListener('click', function () {
  dialog.close();
});

// Fechar o dialog quando o usuário clicar fora da janela
document.addEventListener('click', function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});
