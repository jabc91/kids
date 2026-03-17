function registro(){
  var usuarioPredeterminado = "Ubuntu";
  var contraseñaPredeterminada = 123456789;
  var user = document.getElementById('inputUsuario').value;
  var pass = document.getElementById('inputContraseña').value;
  if (user == usuarioPredeterminado & pass==contraseñaPredeterminada){
    alert("Bien hecho");
    if (pass == contraseñaPredeterminada){
      location.href="menu.html";}
  } else {
      alert("Intenta de nuevo");
    }
}
