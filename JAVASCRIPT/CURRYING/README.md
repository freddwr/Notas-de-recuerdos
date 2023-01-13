# **CURRYING**

### Evaluar funcionaes con multiples argumentos y las descompone en una secuencia de funciones con un unico argumento

> #### asi en lugar de tomar todos los argumentos a la vez, la funcion toma el primer argumento y devuelve una funcion la cual toma el segundo argumento y devuelve una funcion la cual toma el tercero y asi sucesivamente hasta que todos los argumentos sean provistos y la funcion final se ejecute
>
> #### el currying ayuda a dividir funciones en otras mas pequenias y reutilizables y ademas que manejes una unica responsabilidad, esto hace que la funcion sean mas puras mas tolerante a errores y mejor testeables.

```js
const transaction = (fee, balance, amount) => {
  return balance + amount - fee;
};

const curry = (fn, ...arg) => {
  console.log("#------------------------------------#");
  console.log("#-> funcion:");
  console.log(fn);
  console.log("#-> argumento:");
  console.log(arg);
  console.log("#------------------------------------#");
  return (...newArg) => {
    console.log("#------------------------------------#");
    console.log("#-> nuevo  argumento:");
    console.log(newArg);
    console.log("#------------------------------------#");
    return fn(...arg, ...newArg);
  };
};

const freeTransaction = curry(transaction, 0);
const freeTransactionOtro = curry(transaction, 30);

console.log("#------------------------------------#");
console.log("#-> Salida Pantalla");
console.log(freeTransaction(10, 90));
console.log(freeTransactionOtro(10, 90));
console.log("#------------------------------------#");

```

# Salida

```js
#------------------------------------#
#-> funcion:
[Function: transaction]
#-> argumento:
[ 0 ]
#------------------------------------#
#------------------------------------#
#-> funcion:
[Function: transaction]
#-> argumento:
[ 30 ]
#------------------------------------#
#------------------------------------#
#-> Salida Pantalla
#------------------------------------#
#-> nuevo  argumento:
[ 10, 90 ]
#------------------------------------#
100
#------------------------------------#
#-> nuevo  argumento:
[ 10, 90 ]
#------------------------------------#
70
#------------------------------------#
```
# Para mas

> ### investigas librerias como ramda con funciones currying con N numero de argumentos
