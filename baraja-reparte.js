function barajaTarjetas() {
  if (!totalTarjetas || totalTarjetas.length === 0) {
      console.error("Error: No se han definido tarjetas para barajar.");
      return [];
  }
  return totalTarjetas.sort(() => 2 - Math.random());
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(elemento) {
      var tarjeta = document.createElement("div");
      tarjeta.innerHTML =
          "<div class='tarjeta' data-valor='" + elemento + "'>" +
          "<div class='tarjeta__contenido'>" +
          elemento +
          "</div>" +
          "</div>";
      mesa.appendChild(tarjeta);
  });

  // Agregar eventos de click a las tarjetas
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
      elemento.addEventListener("click", descubrir);
  });
}