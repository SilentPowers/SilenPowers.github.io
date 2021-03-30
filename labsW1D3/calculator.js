"use strict";

let calculator = {
   value1: 0,
   value2: 0,
  
  getValues: function(op1, op2){
    this.value1 = op1;
    this.value2 = op2;
  },
  
  sum: function(){
    return this.value1 + this.value2;
  },
  
  mul: function(){
    return this.value1 * this.value2;
  }
};

calculator.getValues(5, 10);
console.log( "expect 15 : " +  calculator.sum() );
console.log("expect 50 : " + calculator.mul() );

exports.calculator = calculator;