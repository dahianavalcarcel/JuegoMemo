function descubrir() {
    var totalDescubiertas = document.querySelectorAll(".descubierta");

    // Prevenir clics adicionales si ya hay 2 tarjetas descubiertas
    if (totalDescubiertas.length >= 2) {
        return;
    }

    // Añadir clase 'descubierta' a la tarjeta actual
    this.classList.add("descubierta");

    // Seleccionar todas las tarjetas descubiertas actualmente
    var descubiertas = document.querySelectorAll(".descubierta");

    // Comparar si hay exactamente 2 tarjetas descubiertas
    if (descubiertas.length === 2) {
        setTimeout(function() {
            if (descubiertas[0].dataset.valor === descubiertas[1].dataset.valor) {
                console.log("¡Acierto!");
                // Si coinciden, añadir la clase 'acertada' y quitar 'descubierta'
                descubiertas.forEach(function(tarjeta) {
                    tarjeta.classList.remove("descubierta");
                    tarjeta.classList.add("acertada");
                });

                // Animación de zoom y desaparición para las tarjetas acertadas
                setTimeout(function() {
                    descubiertas.forEach(function(tarjeta) {
                        tarjeta.style.transition = "transform 0.3s ease, opacity 0.3s ease";
                        tarjeta.style.transform = "scale(1.2)";
                        tarjeta.style.opacity = "0";
                    });
                }, 500); // Esperar 0.5 segundos antes de aplicar la animación
            } else {
                console.log("¡Error!");
                // Si no coinciden, añadir la clase 'error' para que vibren
               

                // Luego de un breve tiempo, remover la clase 'error' y 'descubierta'
                setTimeout(function() {
                    descubiertas.forEach(function(tarjeta) {
                        tarjeta.classList.remove("descubierta");
                        tarjeta.classList.add("error");
                    });
                }, 500); // Esperar 0.5 segundos antes de remover las clases
            }
        }, 1000); // Esperar 1 segundo antes de comparar las tarjetas
    }
}

// Llamar a la función para iniciar el juego
reparteTarjetas();