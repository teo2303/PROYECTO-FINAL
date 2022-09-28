const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

function entrar(){
    const usu = document.getElementById('name').value;
    const pass = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    
    //Si los campos estan completos, guarda la información de cada input en el localStorage
   localStorage.setItem('usuario', usu)
   localStorage.setItem('password', pass)
   localStorage.setItem('email', email)
   window.document.location = '/index.html'; 
    
}
let usuario = localStorage.getItem("usu")
let password = localStorage.getItem("pass")
let mail = localStorage.getItem("email")



//let botonVerificador = document.getElementById('boton-verificador');

//let funcionIngresar = addEventListener('keypress', teclaEnter); 
//botonVerificador.addEventListener('click', verificar);


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es válida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Acceso exitoso!"
    }
})

//localStorage.setItem('nombre','email');



