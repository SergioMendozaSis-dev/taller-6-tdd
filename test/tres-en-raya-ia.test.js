// Versión más explicada de los mismos 8 casos base; generada con el prompt adjunto.
const test = require("node:test");
const assert = require("node:assert/strict");
const { crearJuego, jugar } = require("../src/tres-en-raya");

test("una partida nueva deja nueve casillas vacías y empieza con X", () => {
  const juego = crearJuego();

  assert.equal(juego.turno, "X");
  assert.deepEqual(juego.tablero, ["", "", "", "", "", "", "", "", ""]);
});

test("al aceptar una jugada, coloca la marca y pasa el turno a O", () => {
  const juego = crearJuego();

  const resultado = jugar(juego, 0);

  assert.equal(resultado.ok, true);
  assert.equal(juego.tablero[0], "X");
  assert.equal(juego.turno, "O");
});

test("al completar una fila, el juego anuncia que ganó X", () => {
  const juego = crearJuego();
  [0, 3, 1, 4].forEach((posicion) => jugar(juego, posicion));

  const resultado = jugar(juego, 2);

  assert.equal(resultado.mensaje, "Ganó X");
});

test("al completar una diagonal, el juego anuncia que ganó X", () => {
  const juego = crearJuego();
  [0, 1, 4, 2].forEach((posicion) => jugar(juego, posicion));

  const resultado = jugar(juego, 8);

  assert.equal(resultado.mensaje, "Ganó X");
});

test("si se llenan las nueve casillas sin ganador, la partida termina en empate", () => {
  const juego = crearJuego();
  [0, 1, 2, 4, 3, 5, 7, 6, 8].forEach((posicion) => jugar(juego, posicion));

  assert.equal(juego.ganador, null);
  assert.equal(juego.terminado, true);
});

test("si la casilla elegida ya está ocupada, la jugada no se acepta", () => {
  const juego = crearJuego();
  jugar(juego, 0);

  const resultado = jugar(juego, 0);

  assert.equal(resultado.ok, false);
});

test("si la posición es 9, la jugada no se acepta porque sale del tablero", () => {
  const juego = crearJuego();

  const resultado = jugar(juego, 9);

  assert.equal(resultado.ok, false);
});

test("después de una victoria, el juego rechaza otra jugada", () => {
  const juego = crearJuego();
  [0, 3, 1, 4, 2].forEach((posicion) => jugar(juego, posicion));

  const resultado = jugar(juego, 5);

  assert.equal(resultado.ok, false);
});
