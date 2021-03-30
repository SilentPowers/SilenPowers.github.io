"use strict";

/*
/*
Write a constructor function Accumulator(initialValue, increment). 
 The object it creates should:
•	Store the current accumulated value in a property currentValue. 
     The constructor should set this to be initialValue.
•	The accumulate method should increase the currentValue by the increment.
•	The report method should return the currentValue.

Write a constructor function Accumulator(initialValue, increment). The object it creates should:
• Store the current accumulated value in a property currentValue. The constructor should set this
to be initialValue.
• The accumulate method should increase the currentValue by the increment.
• The report method should return the currentValue.
• Run this with the accumulatorTests.js Mocha test file.
Be sure to include the link to your <username>.github.io/cs303 home page and that the Mocha tests for
this assignment show up for the W1D3 link.
*/


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment) {
  this.currentValue = initialValue;
  this.increment = increment;

  this.accumulate = function () {
    this.currentValue = this.currentValue + this.increment;
  }

  this.report = function () {
    return this.currentValue;
  }
}

const accum = new Accumulator(5,10);
console.log(accum.accumulate())
console.log(accum.accumulate())
console.log(accum.report())
/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator(a,b) {

  this.setValues = function (a, b) {
    this.a = a;
    this.b = b;
  }

  this.sum = function () {
    const add = this.a + this.b;
    return add;
  }

  this.mul = function () {
    const sum = this.a * this.b;
    return sum;
  }
}

const calc = new Calculator();
calc.setValues(2,5);
console.log(calc.sum());
console.log(calc.mul());
