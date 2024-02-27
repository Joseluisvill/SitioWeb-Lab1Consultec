function registrar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let fecha = document.getElementById("fecha").value;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

     if(nombre==""){
        alert("Ingresa un nombre")
    }else
        if(apellido==""){
            alert("ingresa un apellido")
        }else
            if(dni==""){
                alert("ingresa el dni")
            }else
                if (fecha=="") {
                    alert("ingresa una fecha")
                }else
                    if(pass1==""){
                        alert("ingresa una contraseña")
                    }else
                        if(pass2==""){
                            alert("ingresa la contraseña 2")
                        } else 
                                
                            if (pass1 != pass2) {
                                alert("Las contraseñas no coinciden")
                            }


}
