"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


let arr = [1, 2, 3, 4, 5, 6, 7];
let testArr = [1, 2, 10];

  //arr.filter(inArray(testArr));

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}


//console.log(arr.filter(inBetween(3, 6)));
/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
  return function (x) {
    return x > low && x < high;
  };
}
console.log(arr.filter(inBetween(5,10)))
/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
 function byField(fieldName){
  return function(a, b){
    a[fieldName] > b[fieldName] ? 1 : -1;
  };
}


/**
 * @returns {Function} closure that returns it's number
 */
 function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    //otherwise shooter fcn gets i from outer fcn 
    let j = i;
    // let shooter = function() { // create a shooter function,
    //   console.log(j); // that should show its number
    // };

    let shooter = function() {
      console.log("I am shooter ", j);
      return j;
      };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 from the shooter number 2
