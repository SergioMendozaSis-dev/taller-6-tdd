const test = require("node:test");
const assert = require("node:assert/strict");
const { crearJuego, jugar } = require("../src/tres-en-raya");

test("una partida nueva empieza con X y el tablero vacío", () => {
  const juego = crearJuego();

  assert.equal(juego.turno, "X");
  assert.deepEqual(juego.tablero, Array(9).fill(""));
});

test("después de una jugada válida cambia el turno", () => {
  const juego = crearJuego();

  const resultado = jugar(juego, 0);

  assert.equal(resultado.ok, true);
  assert.equal(juego.tablero[0], "X");
  assert.equal(juego.turno, "O");
});

test("el jugador gana al completar una fila", () => {
  const juego = crearJuego();
  [0, 3, 1, 4].forEach((posicion) => jugar(juego, posicion));

  const resultado = jugar(juego, 2);

  assert.equal(resultado.mensaje, "Ganó X");
  assert.equal(juego.ganador, "X");
  assert.equal(juego.terminado, true);
});

test("el jugador gana al completar una diagonal", () => {
  const juego = crearJuego();
  [0, 1, 4, 2].forEach((posicion) => jugar(juego, posicion));

  const resultado = jugar(juego, 8);

  assert.equal(resultado.mensaje, "Ganó X");
});

test("la partida termina en empate si se llena el tablero sin ganador", () => {
  const juego = crearJuego();
  [0, 1, 2, 4, 3, 5, 7, 6, 8].forEach((posicion) => jugar(juego, posicion));

  assert.equal(juego.terminado, true);
  assert.equal(juego.ganador, null);
});

test("no permite jugar en una casilla ocupada", () => {
  const juego = crearJuego();
  jugar(juego, 0);

  const resultado = jugar(juego, 0);

  assert.equal(resultado.ok, false);
  assert.equal(juego.turno, "O");
});

test("no permite posiciones fuera del tablero", () => {
  const juego = crearJuego();

  assert.equal(jugar(juego, 9).ok, false);
  assert.equal(juego.turno, "X");
});

test("no permite seguir jugando después de una victoria", () => {
  const juego = crearJuego();
  [0, 3, 1, 4, 2].forEach((posicion) => jugar(juego, posicion));

  const resultado = jugar(juego, 5);

  assert.equal(resultado.ok, false);
  assert.equal(juego.tablero[5], "");
});
