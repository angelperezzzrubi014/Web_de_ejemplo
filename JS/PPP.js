function jugar(eleccionJugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    const eleccionMaquina = opciones[indiceAleatorio];

    const divResultado = document.getElementById("resultado-juego");

    let resultadoFinal = "";

    if (eleccionJugador === eleccionMaquina) {
        resultadoFinal = "EMPATE";
    } else if (
        (eleccionJugador === "piedra" && eleccionMaquina === "tijera") ||
        (eleccionJugador === "tijera" && eleccionMaquina === "papel") ||
        (eleccionJugador === "papel" && eleccionMaquina === "piedra")
    ) {
        resultadoFinal = "HAS GANADO";
    } else {
        resultadoFinal = "HAS PERDIDO";
    }

   
    divResultado.textContent = "Tú: " + eleccionJugador + " | Máquina: " + eleccionMaquina + " -> " + resultadoFinal;
}