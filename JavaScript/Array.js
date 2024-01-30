/*

let arr = new Array("Raihan", "Rashed", "Tareq", "Anik");
console.log(arr);

let arrName = ["jamal", "kamal", "Rahim", "faisal"];

console.log(arrName);

arrName[2];
console.log(arrName.length); // Dot notation
console.log(arrName["length"]); // Brackets Notation

*/

// let arrName = ["Raihan", "Anik", "Kamal", "Jamal"];

// for (i = 0; i < arrName.length; i++) {
//   console.log("Name : ", arrName[i]);
// }

// arrName.push("Vutto");
// arrName.pop();
// arrName.shift();
// arrName.unshift("I am new");
// arrName.indexOf('Raihan')
// console.log(arrName.indexOf('Kamal'));
// console.log(arrName.indexOf("Kamal"));

// const arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[100] = 105;
// console.log(arr);
// console.log(arr.length);

// Length = Last Index + 1;
//Last Index = Length - 1;

// let names = [
//   "Raihan",
//   "Rashed",
//   "Hafiza",
//   "habibur",
//   "Asiya",
//   "kushbu",
//   "amar name",
// ];
// names.push('dola + Raihan')
// names[names.length] = "Habib";
// console.log(names);

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = x === y;
// console.log(z);

// let x = 0.1
// let y = 0.2
// let z = x + y
// console.log(z === 0.3)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*

let sum = 0;

for (i = 1; i <= numbers.length; i++) {
    sum += i;
}

console.log(sum);
console.log(sum / numbers.length);

*/

// sum = 0; i = 1; = 1
// sum = 1; i = 2; = 3
// sum = 3 i = 3; = 6
// sum = 6; i = 4; = 10;
// sum = 10; i = 5; = 15;

/*

let numbers = [61, 27, 3, 44, 75, 66, 77, 48, 19, 11,99];

let lergestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > lergestNumber) {
    lergestNumber = numbers[i];
  }
}

console.log(lergestNumber);




let numbers = [61, 27, 3, 44, 75, 66, 77, 48, 19, 11,99];

let lowestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < lowestNumber) {
    lowestNumber = numbers[i];
  }
}

console.log(lowestNumber);



let numbers = [10, 34, 56, 78, 45, 53, 15, 234, 57];

let largestnumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestnumber) {
    largestnumber = numbers[i];
  }
}

console.log(largestnumber);




let response = new Array(9);

response.fill(false);
for(let i = 0; i < response.length; i++){
  let rand = Math.floor(Math.random() * 10 + 1);
  response[i] = rand > 5 ? 'X' : 'O'
}
console.log(response)

*/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

/*

let numbers = [12, 45, 42, 11, 71, 84, 67, 89, 99];

let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}

console.log(largestNumber);



let numbers = [12, 45, 42, 11, 71, 84, 67, 89, 99,3];

let smallestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}

console.log(smallestNumber);



let arr = new Array(9);
// arr.fill(false);

for(let i = 0; i < arr.length; i++){
  let rand = Math.floor(Math.random()* 10 + 1)

  arr[i] = rand > 5? "X" : "O"
}

console.log(arr)

*/

/*
let names = ["Raihan", "Anik", "kamal", "jamal", "Hemel"];

function update(arr) {
  for (let i = 0; i < names.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
  return arr;
}

let updatedArr = update(names);
console.log(updatedArr);
console.log(names);

console.log(names === updatedArr);s

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
console.log(fruits);
