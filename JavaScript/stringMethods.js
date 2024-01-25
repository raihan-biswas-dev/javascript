// let text = "JAVASCRIPT & REACT";
// console.log(text.charAt(1));

// JavaScript String at()

// const name = "RAIHAN BISWAS";

// The at() method returns the character at a specified index (position) in a string.

// The at() method is supported in all modern browsers since March 2022:

// console.log(name.at(2));
// console.log(name[2]);

// JavaScript String slice()==============

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(8, 13);
// console.log(part);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);
// console.log(part);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);

// console.log(part);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// console.log(part);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():

// let raihans = "raihan biswas";
// let upper = raihans.toLocaleUpperCase();
// console.log(upper);

// let raihanc = "RAIHAN BISWAS";
// let low = raihanc.toLowerCase();
// console.log(low);

// let text1 = "Hello";
// let text2 = "World!";
// let text3 = "How are you?";

// text4 = text1.concat(" ", text2, " ", text3);
// console.log(text4);

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// let text = "Please visit Microsoft!";
// let newText = text.replace("visit", "see");
// console.log(newText);

// ------------------JavaScript String split()-------------

// let text = "Hello";
// const myArr = text.split("");

// console.log(myArr);

// let name = "My name is Raihan biswas";

// let myname = name.indexOf("Raihan");
// console.log(myname);

// let text = "Please locate Raihan locate  where 'locate'  occurs!";
// let index = text.lastIndexOf("Raihan", 20);
// console.log(index);

// let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.match("ain");
// console.log(myArr);

// let text =
//   "I love cats. Cats are very easy to love. Cats are very popular cats.";
// const iterator = text.matchAll(/Cats/gi);
// document.write(Array.from(iterator));

// let header = "Template Strings";
// let tags = ["template strings", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;
// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }

// html += `</ul>`;

let header = "This is Heading";
let bullet = ["Templae String", "JavaScript", "Es6"];

let html = `<h2>${header} ${bullet}</h2> <ul>`;

for (const x of bullet) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.write(html);
