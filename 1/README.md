# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta
misma carpeta donde hay un pequeño fragmento de código que deberás analizar
y responder a las siguientes cuestiones.

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
   hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al
   finalizar la ejecución del script?

**Respuesta:**

- La variable _wb_ mantendrá sus propiedades
- Para _rgb_ a demás de sus propiedades, se le agregaran las de _wb_
- En cuanto a _colors_ apunta al mismo objeto que _rgb_, esto quiere decir que
  si agregas o cambias una propiedad de _rgb_ lo veras reflejado en _colors_

2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores
   iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del
   script.

**Respuesta:**

```javascript
var colors = Object.assign({}, rgb, wb);
```

3. Además, tenemos un bug localizado en dispositivos con Internet Explorer…
   El código de nuestro script no funciona y necesitamos que se ejecute también
   en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
   propones?

**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug.

**Respuesta:**

Como muestra MDN en [este link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign),
_Object.assing_ no es compatible con IE, la solución que puede analizar es usar
_Polyfill_, usar _Babel_, _Typescript_ indicando que transcriba el código para
que sea compatible con IE, la otra opción hacer un for para extraer las
propiedades del objeto y agregarselas a la variable deseada.
