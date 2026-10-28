// Casos propuestos por IA usando el prompt incluido en prompts/pruebas-ia.md.
const test = require("node:test");
const assert = require("node:assert/strict");
const { crearJuego, jugar } = require("../src/tres-en-raya");

test("también reconoce una victoria en columna", () => {
  const juego = crearJuego();
  [0, 1, 3, 2].forEach((posicion) => jugar(juego, posicion));

  assert.equal(jugar(juego, 6).mensaje, "Ganó X");
});

test("rechaza posiciones decimales", () => {
  const juego = crearJuego();

  assert.equal(jugar(juego, 2.5).ok, false);
});

test("rechaza una posición negativa", () => {
  const juego = crearJuego();

  assert.equal(jugar(juego, -1).ok, false);
});

test("rechaza una posición que no sea número", () => {
  const juego = crearJuego();

  assert.equal(jugar(juego, "2").ok, false);
});

test("un movimiento rechazado deja igual el tablero", () => {
  const juego = crearJuego();
  const tableroAntes = [...juego.tablero];

  jugar(juego, 12);

  assert.deepEqual(juego.tablero, tableroAntes);
});

test("un movimiento rechazado no cambia el turno", () => {
  const juego = crearJuego();

  jugar(juego, 12);

  assert.equal(juego.turno, "X");
});

test("el juego no cambia el turno después de un empate", () => {
  const juego = crearJuego();
  [0, 1, 2, 4, 3, 5, 7, 6].forEach((posicion) => jugar(juego, posicion));
  const turnoAntesDeLaUltimaJugada = juego.turno;

  jugar(juego, 8);

  assert.equal(juego.turno, turnoAntesDeLaUltimaJugada);
});
