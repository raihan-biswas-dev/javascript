let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;
let mod = (a, b) => a % b;

let funcs = [sum, sub, mul, div, mod];

let a = 10;
let b = 20;

for (let i = 0; i < funcs.length; i++) {
  results = funcs[i](a, b);
  console.log(results);
}
