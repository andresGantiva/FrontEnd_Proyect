function filtrarBuy() {
  var filtro = document.getElementById("filtro").value.toLowerCase();
  var elementos = document.getElementsByClassName("buy");

  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var contenido = elemento.innerHTML.toLowerCase();

    if (contenido.includes(filtro)) {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  }
}

function filtrarRent() {
  var filtro = document.getElementById("filtro").value.toLowerCase();
  var elementos = document.getElementsByClassName("rent");

  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var contenido = elemento.innerHTML.toLowerCase();

    if (contenido.includes(filtro)) {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  }
}

