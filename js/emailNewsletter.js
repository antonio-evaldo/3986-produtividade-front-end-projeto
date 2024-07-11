document.querySelector('.newsletter').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.querySelector('.newsletter__input').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (emailRegex.test(email)) {
    alert('Email válido! Formulário enviado.');
    // Aqui você pode enviar o formulário ou realizar outra ação
    // this.submit(); // Para enviar o formulário
  } else {
    alert('Por favor, insira um email válido.');
  }
});
