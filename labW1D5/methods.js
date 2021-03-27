"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator,sortByAge }; //add all of your function names here that you need for the node mocha tests

/*
Implement the tasks in VSCode and run them with the arrayMethodsTests.js file.
 Add your own Mocha tests for the following tasks:
• Copy and sort array,
• Sort users by age,
• Shuffle an array,
• Get average age
*/

// Write the function getAverageAge(users) that gets an array of objects with 
//property age and returns the average age.
//input: array of objects
//output: number of average age
function getAverageAge(users){
  const average = users.reduce(function(acc, obj){  
   acc + obj.age;
  },0) / users.length;
  
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arrAge = [ john, pete, mary ];
console.log(getAverageAge(arrAge));



/*
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:


shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
*/
// let arr3 = [1, 2, 3];

// shuffle(arr3);
// // arr = [3, 2, 1]
// function shuffle(arr){
// const max = arr.length;
// const min = 0;
// let randomNum = Math.trunc(Math.random()* (max - min) );

// }

function shuffle(array) {
  array.sort(function () {
    Math.random() - 0.5;
  })
}

let arr5 = [1, 2, 3];
shuffle(arr5);
console.log(arr5);

/*
Write the function sortByAge(users) that gets an array of 
objects with the age property and sorts them by age.
For instance:
*/
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arrNames = [ pete, john, mary ];
//console.log(sortByAge(arrNames));
function sortByAge(arr) {
  arr.sort(function (a, b) {
    return a.age - b.age;
  });
  return arr;
}


/*
We have an array of strings arr. We’d like to have a sorted copy of it,
 but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/
let arr22 = ["HTML", "JavaScript", "CSS"];
copySorted(arr22);

function copySorted(arr) {
  let sortedArray = arr.slice();

  sortedArray = sortedArray.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;

  })
  return sortedArray;
}


/**
 * 
 * @param {*} str 
 * @returns{string}
 */
function camelize(str) {
  return str
    .split(' ') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
//console.log(camelize("connor lakour"));


/*
Write a function filterRange(arr, a, b) that gets an array arr,
 looks for elements with values higher or equal to a and lower
  or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/
function filterRange(arr, a, b) {

  const array = arr.filter(function (element) {
    if (element >= a && element <= b)
      return element;
  })
  return array;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRangeInPlace(arr, a, b) {
  arr.forEach((element, index) => {
    if (element < a || element > b) {
      arr.splice(index, 1);
    }
  });
  console.log(arr);
}
// let filtered2 = filterRangeInPlace(arr,1,4);



/*
First, implement the method calculate(str) that 
takes a string like "1 + 2" in the format “NUMBER operator NUMBER” 
(space-delimited) and returns the result. Should understand plus + and minus -.

Then add the method addMethod(name, func) that teaches the calculator a new operation.
 It takes the operator name and the two-argument function func(a,b) that implements it.
For instance, let’s add the multiplication *, division / and power **:
//took some of the code
Then add the method addMethod(name, func) that teaches the calculator a new operation. 
It takes the operator name and the two-argument function func(a,b) that implements it.
*/
let powerCalc = new Calculator;
//powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 - 3");
console.log(result); // 8

function Calculator() {

  this.calculate = function (string) {
    this.stringArr = string.split(" ");
    let [first, operation, last] = this.stringArr
    first = Number(first);
    last = Number(last);
    //console.log(first, last);
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };

    //check the inputs , check if the operation exists in this.methods
    if (first === NaN || last === NaN) {
      return NaN;
    }
    console.log(this.methods[operation](first, last));
    return this.methods[operation](first, last);
  }
  //return this.methods[sign](first, last);
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
};


// const calc = new Calculator();
//console.log(calc.calculate("3 + 7"))

/*
Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/
function unique(arr) {
  let filtered = [];

  for (const element of arr) {
    if (!filtered.includes(element)) {
      filtered.push(element);
    }
  }
  return filtered;

}


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, 
and array items as values.
see example:  https://javascript.info/array-methods
Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.

input: object
output: object with key: id, and array as values
process; create a property and add the id to it
*/
function groupById(array) {
  const reduced = array.reduce(function (acc, element) {
    //set acc as an object, 
    //within the brackets create a key for the object with element as the value
    acc[element.id] = element;
    return acc;
  }, {});

  return reduced;
}

;
