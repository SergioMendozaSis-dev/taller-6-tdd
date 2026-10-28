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
- `test/tres-en-raya.test.js`: pruebas escritas de forma directa para los casos principales.
- `test/tres-en-raya-ia.test.js`: casos adicionales generados a partir del prompt de `prompts/pruebas-ia.md`.

## Reglas cubiertas

El juego alterna X y O, reconoce filas, columnas y diagonales, y termina con empate cuando ya no quedan casillas. También rechaza posiciones inválidas, casillas ocupadas y jugadas posteriores al final.

## Nota para la comparación

La consigna pide comparar pruebas propias con pruebas generadas por IA. Aquí se separan los dos grupos para que se puedan revisar. La carpeta marcada `IA` representa los casos generados usando el prompt adjunto; conviene leerlos, entenderlos y adaptarlos antes de presentarlos como trabajo personal.
