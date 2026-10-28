# Prompt para generar pruebas con IA

Estoy aprendiendo pruebas unitarias y TDD. Escribe pruebas fáciles de leer para una kata de Tres en Raya en JavaScript, usando solo `node:test` y `node:assert/strict` (sin instalar paquetes).

Usa las funciones existentes `crearJuego()` y `jugar(juego, posicion)`, que devuelve `{ ok, mensaje }`. No inventes funciones. El tablero tiene nueve posiciones numeradas del 0 al 8; X empieza y luego los turnos alternan.

Escribe exactamente estos mismos ocho casos base, sin agregar otros:

1. La partida empieza con X y el tablero vacío.
2. Una jugada válida cambia el turno.
3. Se gana al completar una fila.
4. Se gana al completar una diagonal.
5. El tablero lleno sin ganador termina en empate.
6. Se rechaza una casilla ocupada.
7. Se rechaza una posición fuera del tablero.
8. Se rechaza una jugada después de ganar.

Para cada caso, usa un título que explique el comportamiento y aserciones pequeñas. Mantén el código claro para un estudiante principiante. Devuelve solo el código de pruebas.
