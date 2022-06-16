const inputEmail = document.querySelector('#input-Email');
const inputSenha = document.querySelector('#input-senha');
const botaoEntrar = document.querySelector('#botao-entrar');
const submitButton = document.querySelector('#submit-btn');
const checkboxToSubmit = document.querySelector('#agreement');

function verificarInputValues() {
  if (inputEmail.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

submitButton.disabled = true;

function verifyCheckboxToSubmit() {
  if (checkboxToSubmit.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkboxToSubmit.addEventListener('click', verifyCheckboxToSubmit);
botaoEntrar.addEventListener('click', verificarInputValues);
