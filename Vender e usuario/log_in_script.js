console.log("Inicializado")

let current_profile = null;

const input_first_name = document.getElementById("first_name_input");
const input_last_name = document.getElementById("last_name_input");

const input_email = document.getElementById("email_input");

const input_password = document.getElementById("password_input");
const input_confirm_password = document.getElementById("confirm_password_input");

const create_account_button = document.getElementById("create_account_button");
create_account_button.addEventListener('click', log_in);

const home_button = document.getElementById("home_button");
home_button.addEventListener('click', go_to_homepage);

const account_button = document.getElementById("account_button");
account_button.addEventListener('click', go_to_useraccount);

function log_in() {

  const name = validate_user_name();
  const email = validate_email();
  const password = validade_password();

  if (name !== null && email !== null && password !== null) {

    if (name === "Marnie" && email === "marnie@gmail.com" && password === "123456") {

      window.location.href = "perfil_usuario_marnie.html"

    }
    else if (name === "Krobus" && email === "krobus@gmail.com" && password === "123456") {

      window.location.href = "perfil_usuario_krobus.html"

    }
    else if (name === "Pierre" && email === "pierre@gmail.com" && password === "123456") {

      window.location.href = "perfil_usuario_pierre.html"

    }
    else {
      alert("Usuario nao existe")
    }
  }

}

function validate_user_name() {

  if (input_first_name.value) {

    return input_first_name.value

  }

  alert("Nome incompleto")
  return null

}

function validate_email() {

  if (input_email.value) {

    return input_email.value

  }

  alert("Email inválido")
  return null

}

function validade_password() {

  if (input_password.value && input_confirm_password.value) {

    if (input_password.value == input_confirm_password.value) {

      return input_password.value

    }

    alert("Senhas não combinam")
    return null

  }

  alert("Senha inválida")
  return null

}

function go_to_homepage() {

  window.location.href = "../Pagina principal/Pagina_principal.html"

}

