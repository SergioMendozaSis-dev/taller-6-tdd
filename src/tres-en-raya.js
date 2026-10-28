const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function crearJuego() {
  return {
    tablero: Array(9).fill(""),
    turno: "X",
    ganador: null,
    terminado: false,
  };
}

function buscarGanador(tablero) {
  for (const [a, b, c] of combinacionesGanadoras) {
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return tablero[a];
    }
  }

  return null;
}

function jugar(juego, posicion) {
  if (juego.terminado) {
    return { ok: false, mensaje: "La partida ya terminó" };
  }

  if (!Number.isInteger(posicion) || posicion < 0 || posicion > 8) {
    return { ok: false, mensaje: "La posición debe estar entre 0 y 8" };
  }

  if (juego.tablero[posicion] !== "") {
    return { ok: false, mensaje: "Esa casilla ya está ocupada" };
  }

  juego.tablero[posicion] = juego.turno;
  juego.ganador = buscarGanador(juego.tablero);

  if (juego.ganador) {
    juego.terminado = true;
    return { ok: true, mensaje: `Ganó ${juego.ganador}` };
  }

  if (juego.tablero.every((casilla) => casilla !== "")) {
    juego.terminado = true;
    return { ok: true, mensaje: "Empate" };
  }

  juego.turno = juego.turno === "X" ? "O" : "X";
  return { ok: true, mensaje: `Turno de ${juego.turno}` };
}

module.exports = { crearJuego, jugar };
