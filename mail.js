
var a = '@'


//not empty usuario
function validarusuario() {
    var mail = document.getElementById('exampleInputEmail1').value;
    
    if (mail == ""){
        alert('Complete el campo usuario');
    }else{
        validararroba();
    }
}
document.getElementById('validarDatos').addEventListener('click', validarusuario);

//valida arroba
function validararroba() {
   var mail = document.getElementById('exampleInputEmail1').value;
    if (mail.includes(a) ) {
    alert('Campo Usuario validado. Arroba validada');
    }
    else {
    alert('El campo Usuario debe contener @');
    }
    }  
   
    
//not empty clave
function validarpass() {
    var pass = document.getElementById('exampleInputPassword1').value;
    
    if (pass == ""){
        alert('Complete el campo Clave');
    }else{
        alert('Datos Clave validados');
    }
}
document.getElementById('validarDatos').addEventListener('click', validarpass);