document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if (document.getElementById("nome-da-usuaria").value != "" &&                  document.getElementById("email-da-usuaria").value != ""){
  alert("Você receberá as novidades por email!")
  }else{
  alert("Por favor, preencha os campos nome e email")
}
}

   