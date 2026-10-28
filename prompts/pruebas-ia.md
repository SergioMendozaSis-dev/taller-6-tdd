# Prompt para generar pruebas con IA

Estoy aprendiendo pruebas unitarias y quiero practicar TDD. En JavaScript, usando el módulo `node:test` de Node.js y sin instalar paquetes, crea pruebas para una kata sencilla de Tres en Raya.

El programa debe empezar con un tablero vacío de nueve casillas y el turno de X. Los jugadores alternan X y O. Una jugada válida coloca la marca en una casilla libre. El programa debe reconocer una victoria en cualquier fila, columna o diagonal, y declarar empate cuando se llena el tablero sin ganador. Debe rechazar posiciones que no sean números enteros entre 0 y 8, casillas ocupadas y jugadas después de terminar la partida. Una jugada rechazada no debe cambiar el tablero ni el turno.

Escribe casos pequeños que describan el comportamiento en lenguaje claro. Incluye éxito, límites y errores. No revises variables internas que no sean necesarias para comprobar el resultado. Evita duplicar casos. Devuelve solo el código de las pruebas y una lista breve de los comportamientos que cubre. No inventes funciones: usa `crearJuego()` y `jugar(juego, posicion)`, que devuelve `{ ok, mensaje }`.
