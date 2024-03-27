// --------------- map() method

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.map(function (item) {
  return item * item;
});

console.log(arr);
console.log(newArr);

*/

// const numbers1 = [45, 4, 9, 16, 25];

// let newNumber = numbers1.map(function (item) {
//   return item * 2;
// });

// console.log(numbers1);
// console.log(newNumber);
// function myFunction(value, index, array) {
//   return value * 2;
// }

// --------------- filter() method

/*

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.filter(function (item, index, array) {
  return item % 2 == 0;
});

// let newArr = arr.filter((item) => item % 2 == 0);

console.log(arr);
console.log(newArr);
*/

// --------------- reduce() method

/*

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.reduce(function (sum, item) {
  return (sum += item);
});
console.log(arr);
console.log(newArr);

*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.reduce(function (sum, item) {
//   //   console.log(sum);
//   return sum + item;
// });

// console.log(newArr);

// ---------------forEach() Method

// const numbers = [45, 4, 9, 16, 25];

// function myfunction(value, index, array) {
//   console.log("Value", value);
//   console.log("Index", index);
//   console.log("Array", array);
//   console.log("-------------");
// }

// numbers.forEach(myfunction);

// console.log(Math.min() < Math.max());

// --------------- flatMap() Method
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);

// -------------- reduceRight() Method

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.reduceRight(function (sum, item) {
  return (sum += item);
});
console.log(arr);
console.log(newArr);

*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let someArr = arr.some(function (item) {
//   return item == 1;
// });
// console.log(someArr);

// ------------ from() Method
// Array.from("ABCDEFG");

// ----------- keys() Method

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const k = fruits.keys();

// for (let x of k) {
//   return (text += x + "<br>");
// }

// console.log(text);

// -------spread() Method

/*
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
*/

let a = ["JavaScript", "React", "Node"];
let b = ["Next Js", "Python"];

b = a;
console.log(a);
console.log(b);
a.push("MongoDB");

// console.log(a);
// console.log(b);
