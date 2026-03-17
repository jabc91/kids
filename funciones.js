function registro(){
  var usuarioPredeterminado = "Alejo";
  var contraseñaPredeterminada = 1991;
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
