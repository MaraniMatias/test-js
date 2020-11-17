# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las _promises_
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones,
pero tenemos un pequeño problema… No es una solución totalmente cross-browser.
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo
modificarías nuestro código (`test.js`) para que funcione correctamente.

**Respuesta:**

Recomiendo escribir el código en libraries como _Babeljs_ que permite transcript
los script para que soporten distintas version de navegadores. Otra opción es usar
librarías como _Bluebird_ que es una solución dedicada a las Promesa de
Javascript, pero creo que este ejercicio apunta al uso de libraries como
**Polyfill**

