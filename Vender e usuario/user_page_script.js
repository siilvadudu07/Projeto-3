const home_button = document.getElementById("home_button");
home_button.addEventListener('click', go_to_homepage);

const leave_button = document.getElementById("leave_button");
leave_button.addEventListener('click', leave_account);


function go_to_homepage() {

  window.location.href = "../Pagina principal/Pagina_principal.html"

}

function leave_account() {

  window.location.href = "login.html"

}