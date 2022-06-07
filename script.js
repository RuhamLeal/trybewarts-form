const inputEmail = document.querySelector('#input-Email');
const inputSenha = document.querySelector('#input-senha');
const botaoEntrar = document.querySelector('#botao-entrar');

function verificarInputValues() {
  if (inputEmail.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

botaoEntrar.addEventListener('click', verificarInputValues);
