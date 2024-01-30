// let x = 123;
// x.toString();
// (123).toString();
// (100 + 23).toString();

// let b = (234).toString();
// console.log(b);

// let x = 9.656;
// a = x.toExponential(2);
// b = x.toExponential(4);
// c = x.toExponential(6);

// console.log(`${a} ${b}  ${c} `);

// JavaScript Number Methods

/* 
Method	        Description
toString()	    Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	    Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	    Returns a number as a number
*/

// The toString() method returns a number as a string.

/*
let a = 45;
let b = a.toString();
console.log(b);
*/

// toExponential() returns a string, with a number rounded and written using exponential notation.

/*
let x = 9.656;
d = x.toExponential(); // 9.66
a = x.toExponential(2); // 9.65
b = x.toExponential(4); // 9.6560
c = x.toExponential(6); // 9.656000

console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

// toFixed() returns a string, with the number written with a specified number of decimals

/*
let x = 9.656;
a = x.toFixed(0);
b = x.toFixed(2);
c = x.toFixed(4);
d = x.toFixed(6);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

// toPrecision() returns a string, with a number written with a specified length:

/*
let x = 9.656;
a = x.toPrecision();
b = x.toPrecision(2);
c = x.toPrecision(4);
d = x.toPrecision(6);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

// valueOf() returns a number as a number.
// All JavaScript data types have a valueOf() and a toString() method.

/*
let x = 123;
a = x.valueOf();
b = (123).valueOf();
c = (100 + 23).valueOf();

console.log(a);
console.log(b);
console.log(c);
*/

/*
Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number:

Method	Description
Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number
*/

// let a = Number(new Date("1970-01-01"));
// console.log(a);

/*
a = parseInt("-10");
b = parseInt("-10.33");
c = parseInt("10");
d = parseInt("10.33");
e = parseInt("10 20 30");
f = parseInt("10 years");
g = parseInt("years 10");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
*/
