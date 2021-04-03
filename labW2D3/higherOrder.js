"use strict";

const arr = [1, 2, 3, 4, 5];


// const mapped = arr.map(function(fcn){
//   return fcn()
// })

/**
 * 
 * @param {*} arr of integers
 * @param {*} callBack function
 * @returns{*} returns filtered array
 */
function myfilter(arr, callBack){
  let arrayFiltered = [];

  for(let i = 0; i < arr.length; i++){
    const bool = callBack(arr[i]);
    if(bool === true){
      arrayFiltered.push(arr[i]);
    }
  }
  return arrayFiltered;
}
const filter = num => num > 3;
console.log(myfilter(arr, filter));

/**
 * 
 * @param {Array} arr to be processed
 * @param {*} callBack to map the elements
 * @returns {Array} of mapped elements
 */
function myMap(arr, callBack) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {

    array.push(callBack(arr[i]));
  }
  return array;
}
const dblFun = num => num * 2;
const squareFun = num => num * num;

// console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
// console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

// console.log("expect [1, 4, 9, 16, 25] ", arr.map(squareFun));
// console.log("expect [1, 4, 9, 16, 25] ", myMap(arr, squareFun));

/**
 * 
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction
 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal) {
  let reduced = initialVal;

  for(let i = 0; i < arr.length; i++){

   reduced = (cbk(reduced, arr[i]));
  }
  return reduced;
}

const sumFun = (accum, val) => accum + val;
const mulFun = (accum, val) => accum * val;


console.log("expect: 15: ", arr.reduce(sumFun, 0));
console.log("expect: 15: ", myReduce(arr, sumFun, 0));

console.log("expect: 120: ", arr.reduce(mulFun, 1));
console.log("expect: 120: ", myReduce(arr, mulFun, 1));


//my example

const greet = function(greeting){
  return function(name){
    return `${greeting} ${name}`;
  };
};
const greeter = greet("hey");
console.log(greeter("Connor"));

console.log(greet("hello")("Connor"));

//const greetArr = greeting => name => console.log(`${greeting} ${name}`);