//validação usuário
function onChangeEmail() {
  const emailValido = emailEhValido();
  errosEmail();
}
//validação senha
function onChangeSenha() {
  const senhaValida = senhaEhValida();
  errosSenha();
}

//puxa elementos dos HTML
const form = {
  //elemento e-mail:
  email: () => document.getElementById("email"),
  //elemento senha
  password: () => document.getElementById("password"),
};

function emailEhValido() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validaEmail(email);
}

function senhaEhValida() {
  const senha = form.password().value;
  if (!senha) {
    return false;
  }
  return true;
}

//verifica atraves de REGEX formatação do email (ex teste@teste.com)
function validaEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

//função onclick que leva para home logada após clicar em entrar
function logar() {
  var email = form.email().value;
  var senha = form.password().value;

  if (email == "email@email.com" && senha == "senha") {
    location.href = "home-logada.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

//função onclick que leva pra home-não logada
function sair() {
  location.href = "home-nao-logada.html";
}

//função onclick que leva pra tela-login
function entrar() {
  location.href = "tela-login.html";
}
