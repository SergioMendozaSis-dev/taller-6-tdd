# Taller 6: TDD con Tres en Raya

Este proyecto resuelve la kata de Tres en Raya con JavaScript sencillo y pruebas unitarias de Node.js. No necesita instalar dependencias.

## Requisitos

Node.js 18 o superior.

## Ejecutar las pruebas

```sh
npm test
```

## Usar el programa

```js
const { crearJuego, jugar } = require("./src/tres-en-raya");

const juego = crearJuego();
console.log(jugar(juego, 0)); // X ocupa la primera casilla
console.log(juego.tablero);
```

Las posiciones van de `0` a `8`, de izquierda a derecha y de arriba abajo:

```text
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
```

## Cómo está organizado

- `src/tres-en-raya.js`: crea la partida y aplica jugadas.
- `test/tres-en-raya.test.js`: versión manual corta de los casos base.
- `test/tres-en-raya-ia.test.js`: versión más explicada, generada con el prompt de `prompts/pruebas-ia.md`.
- `prompts/pruebas-ia.md`: prompt usado para pedir a la IA los casos base.

## Casos comparados

Las dos suites comprueban los mismos ocho comportamientos: inicio, turno, victoria por fila, victoria diagonal, empate, casilla ocupada, posición fuera del tablero y jugada después de ganar. En cada caso, los comentarios marcan preparación, ejecución y verificación. La prueba del estado inicial indica que no necesita ejecución. La primera suite mantiene títulos breves; la segunda explica más los pasos y resultados.

La suite corta queda como una versión sencilla para estudiar y explicar. Revisa y entiende ambas antes de presentarlas como parte de tu trabajo.
