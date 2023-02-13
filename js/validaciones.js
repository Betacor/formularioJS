function validarForm()
{
    var verificar=true;
    var expRegNombre= /^([a-z ñáéíóú]{2,60})$/i;
	var expRegEmail =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;

    var formulario=document.getElementById("contacto-frm");
    var nombre=document.getElementById("nombre");
    var edad=document.getElementById("edad");
    var email=document.getElementById("email");
    var asunto=document.getElementById("asunto");
    var masculino=document.getElementById("M");
    var femenino=document.getElementById("F");
    var comentarios=document.getElementById("comentarios");
}