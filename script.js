//jQuery
$(document).ready(function(){

    $("#btnSubmit").dblclick(function () {
           
        let firstName=  ($('#validationTooltipName').val());
        let lastName = ($("#validationTooltipLastName").val());
        let email = ($("#validationTooltipEmail").val());
        let phone = ($("#validationTooltipPhone").val());
        let date = ($("#validationTooltipDate").val());
        let mensaje = ($("#validationMensaje").val());
        let genero = ($('#validationCustomGenero').val()); 
        
        alert(`Los datos del cliente son: \nNombre: ${firstName} \nApellido: ${lastName} \nCorreo: ${email} \nGénero: ${genero} \nFecha Nacimiento: ${date} \nCelular: ${phone} \nMensaje: ${mensaje}`)
        
    });

});


//-----------------------------Práctica-------------------------------
//$(function(){
 /*  
    $("#btnSubmit").dblclick(function(){
        $(".icons").hide();
    });

    $("#btnReturn").clik(function(){
        $(".icons").show();
    });
*/

/*
    $("#validationTooltipPhone").mouseenter(function(){
        $("#validationTextarea").hide();
    });

    $("#validationTooltipPhone").mouseleave(function(){
        $("#validationTextarea").show();
    });

*/
/*
    $("#validationTooltipPhone").mouseenter(function(){
        $("#validationTextarea").fadeOut();
    });

    $("#validationTooltipPhone").mouseleave(function(){
        $("#validationTextarea").fadeIn();
    });
*/
/*
    $("#validationTooltipPhone").mouseenter(function(){
        $("#validationTextarea").slideDown();
    });

    $("#validationTooltipPhone").mouseleave(function(){
        $("#validationTextarea").slideUp();
    });
*/
 
 // });

//-----------------------------------------------------------------
//Java Script
// Ejemplo de JavaScript de inicio para deshabilitar el envío de formularios si hay campos no válidos
(() => {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    const forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar la presentación
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()