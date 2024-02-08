// --------------- map() method

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.map(function (item) {
  return item * item;
});

console.log(arr);
console.log(newArr);

*/

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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.reduce(function (sum, item) {
  return (sum += item);
});
console.log(arr);
console.log(newArr);
