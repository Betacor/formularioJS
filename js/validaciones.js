function validarForm()
{
    var verificar=true;
    var expRegNombre= /^([a-z ñáéíóú]{2,60})$/i;
	var expRegEmail =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;

    var formulario=document.getElementById("contacto-frm");
    var nombre=document.getElementById("nombre");
    var edad=document.getElementById("edad");             //debería usarse fecha de nacimiento (fecha de hoy - fecha de nac = fecha actual)
    var email=document.getElementById("email");
    var asunto=document.getElementById("asunto");
    var masculino=document.getElementById("M");
    var femenino=document.getElementById("F");
    var comentarios=document.getElementById("comentarios");

    if(!nombre.value){
        alert("El campo nombre es requerido");
        nombre.focus();
        verificar=false;
    }else if(!expRegNombre.exec(nombre.value))        //.exec= ejecucion  (evalua y luego ejecuta)
    {
        alert("El campo nombre solo acepta letras y espacios en blanco");
        nombre.focus();
        verificar=false;
    }else if(!edad.value){
        alert("El campo edad es requerido");
        edad.focus();
        verificar=false;
    }else if(isNaN(edad.value)){                      //isNan = is not a number
        alert("El campo solo acepta numeros"),
        edad.focus();
        verificar=false;
    }else if(!expRegEmail.exec(email.value)){
        alert("El campo correo esta mal escrito");
        email.focus();
        verificar=false;
    }else if (!asunto.value) {
        alert("El campo asunto es requerido");
        asunto.focus();
        verificar=false;
    }else if (!comentarios.value){                   // ! niega la variable; es si no hay nada en ese campo
        alert("El campo comentarios es requerido");
        comentarios.focus();
        verificar=false;
    }
    if(verificar){
        alert("Se ha enviado el formulario");
    }
}
