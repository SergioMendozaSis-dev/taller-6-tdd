const test = require("node:test");
const assert = require("node:assert/strict");
const { crearJuego, jugar } = require("../src/tres-en-raya");

test("empieza con X y el tablero vacío", () => {
  const juego = crearJuego();
  assert.equal(juego.turno, "X");
  assert.deepEqual(juego.tablero, Array(9).fill(""));
});

test("una jugada válida cambia el turno", () => {
  const juego = crearJuego();
  const resultado = jugar(juego, 0);
  assert.equal(resultado.ok, true);
  assert.equal(juego.turno, "O");
});

test("gana al completar una fila", () => {
  const juego = crearJuego();
  [0, 3, 1, 4].forEach((posicion) => jugar(juego, posicion));
  assert.equal(jugar(juego, 2).mensaje, "Ganó X");
});

test("gana al completar una diagonal", () => {
  const juego = crearJuego();
  [0, 1, 4, 2].forEach((posicion) => jugar(juego, posicion));
  assert.equal(jugar(juego, 8).mensaje, "Ganó X");
});

test("termina en empate", () => {
  const juego = crearJuego();
  [0, 1, 2, 4, 3, 5, 7, 6, 8].forEach((posicion) => jugar(juego, posicion));
  assert.equal(juego.ganador, null);
  assert.equal(juego.terminado, true);
});

test("rechaza una casilla ocupada", () => {
  const juego = crearJuego();
  jugar(juego, 0);
  assert.equal(jugar(juego, 0).ok, false);
});

test("rechaza una posición fuera del tablero", () => {
  const juego = crearJuego();
  assert.equal(jugar(juego, 9).ok, false);
});

test("rechaza jugadas después de ganar", () => {
  const juego = crearJuego();
  [0, 3, 1, 4, 2].forEach((posicion) => jugar(juego, posicion));
  assert.equal(jugar(juego, 5).ok, false);
});
