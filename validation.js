// <--LOGIN VALIDATION-->

const username = document.querySelector("#username")

const password = document.querySelector("#password")

const btn = document.querySelector("#btnSubmit")

btn.addEventListener("click", function(event){
    if (username.value == ""){
        alert("Agregar un nombre de usuario")
    }
    if (password.value == ""){
        alert("Agregar una contraseña")
    }
});

// <--END LOGIN VALIDATION-->

// <--REGISTRATION VALIDATION-->
// <--END REGISTRATION VALIDATION-->