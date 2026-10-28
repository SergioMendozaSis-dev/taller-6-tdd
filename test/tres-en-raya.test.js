const test = require("node:test");
const assert = require("node:assert/strict");
const { crearJuego, jugar } = require("../src/tres-en-raya");

test("empieza con X y el tablero vacío", () => {
  // Preparación
  const juego = crearJuego();

  // Ejecución: no aplica, porque probamos el estado inicial.

  // Verificación
  assert.equal(juego.turno, "X");
  assert.deepEqual(juego.tablero, Array(9).fill(""));
});

test("una jugada válida cambia el turno", () => {
  // Preparación
  const juego = crearJuego();

  // Ejecución
  const resultado = jugar(juego, 0);

  // Verificación
  assert.equal(resultado.ok, true);
  assert.equal(juego.turno, "O");
});

test("gana al completar una fila", () => {
  // Preparación
  const juego = crearJuego();
  [0, 3, 1, 4].forEach((posicion) => jugar(juego, posicion));

  // Ejecución
  const resultado = jugar(juego, 2);

  // Verificación
  assert.equal(resultado.mensaje, "Ganó X");
});

test("gana al completar una diagonal", () => {
  // Preparación
  const juego = crearJuego();
  [0, 1, 4, 2].forEach((posicion) => jugar(juego, posicion));

  // Ejecución
  const resultado = jugar(juego, 8);

  // Verificación
  assert.equal(resultado.mensaje, "Ganó X");
});

test("termina en empate", () => {
  // Preparación
  const juego = crearJuego();

  // Ejecución
  [0, 1, 2, 4, 3, 5, 7, 6, 8].forEach((posicion) => jugar(juego, posicion));

  // Verificación
  assert.equal(juego.ganador, null);
  assert.equal(juego.terminado, true);
});

test("rechaza una casilla ocupada", () => {
  // Preparación
  const juego = crearJuego();
  jugar(juego, 0);

  // Ejecución
  const resultado = jugar(juego, 0);

  // Verificación
  assert.equal(resultado.ok, false);
});

test("rechaza una posición fuera del tablero", () => {
  // Preparación
  const juego = crearJuego();

  // Ejecución
  const resultado = jugar(juego, 9);

  // Verificación
  assert.equal(resultado.ok, false);
});

test("rechaza jugadas después de ganar", () => {
  // Preparación
  const juego = crearJuego();
  [0, 3, 1, 4, 2].forEach((posicion) => jugar(juego, posicion));

  // Ejecución
  const resultado = jugar(juego, 5);

  // Verificación
  assert.equal(resultado.ok, false);
});
