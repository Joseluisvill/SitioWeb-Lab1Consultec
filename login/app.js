let elemento = document.getElementById("mensaje");
elemento.style.display = "none";
let clave = document.getElementById("lg_nuevo");

function validarEmail() {
    let email = document.getElementById("form_email").value;
    let password = document.getElementById("form_pass").value;
    if (email.length == 0 || password.length == 0) {
        elemento.innerHTML = "Debe ingresar más parametros!!!";
        elemento.style.display = "block";
    } else {
        var emailField = document.getElementById("form_email");
        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!validEmail.test(emailField.value)) {
            elemento.innerHTML = "El correo es invalido";
            elemento.style.display = "block";
            return true;
        } else {
            window.location.replace("https://joseluisvill.github.io/SitioWeb-Lab1Consultec/cuentas/Cuentas.html");
            return false;
        }
    }
}
function banco(){
    alert('Todavia no tiene una cuenta');
}
