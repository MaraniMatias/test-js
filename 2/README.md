# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que
nos devuelve el código es el mismo valor en cada iteración.

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
   por consola el script? ¿Cuál es el motivo?

_Respuesta:_

La verdad ejecute el código antes de leer el Readme, costumbre, ya que uso
mucho la consola de Linux y tengo instado Node, así que lo primero que hice fue
_'node ./test.js'_, cuando vi el resultado enseguida pensé en el típico
ejemplo del for en JavaScript, esto se debe a que el _for_ incremente el valor de
_i_ antes de que sea mostrado, en ES6 con solo cambiar _var i_ por _let i_ se
resuelve el problema.

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas…
   ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```

_Respuesta:_

- Con ES6 remplazo _var_ por _let_
- Con ES Clásico

```javascript
var print = function (i) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
};
for (var i = 0; i < 5; i++) {
  print(i);
}
```

