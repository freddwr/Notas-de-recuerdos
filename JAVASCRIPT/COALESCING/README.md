# **COALESCRING**

### se incorpoco el operador nullix coalescing en las ultimas versiones de EC6

> #### este operador sirve para tener una manera rapida de aplicar valores por defecto a variable

## Forma correcta de utilizarlos

## Con el operador AND
```js
console.log("#---------------------------------#");

const valor1 = 0 ?? 100;
console.log(valor1); // # -> Salida 0

const valor2 = false ?? true;
console.log(valor2); // # -> Salida false

console.log("#---------------------------------#");

console.log("#---------------------------------#");

const valor3 = null ?? 100;
console.log(valor3); // # -> Salida 1000

const valor4 = undefined ?? true;
console.log(valor4); // # -> Salida true

console.log("#---------------------------------#");


```
## Con el operador OR
```js

console.log("#---------------------------------#");

const valor5 = 0 || 100;
console.log(valor5); // # -> Salida 100

const valor6 = false || true;
console.log(valor6); // # -> Salida true

console.log("#---------------------------------#");

console.log("#---------------------------------#");

const valor7 = null || 100;
console.log(valor7); // # -> Salida 100

const valor8 = undefined || true;
console.log(valor8); // # -> Salida true

console.log("#---------------------------------#");

```

# Salida

```js
#------------------------------------#
#-> funcion:
[Function: transaction]
#-> argumento:
[ 0 ]
#---------------------------------#
0
false
#---------------------------------#
#---------------------------------#
100
true
#---------------------------------#
#---------------------------------#
100
true
#---------------------------------#
#---------------------------------#
100
true
#---------------------------------#
```
