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
