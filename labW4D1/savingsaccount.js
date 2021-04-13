"use strict";
/*eslint-disable*/
/* global Account require  */
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests


// Extend the Account class by creating a class called SavingsAccount in a file called
// savingsaccount.js. In addition to the attributes of Account, SavingsAccount should
// have an interest variable, which is set in the constructor and has a getter and a setter mehtod. It
// should also have an addInterest() method which deposits the interest amount into the
// account. The calculation for the amount is balance * interest / 100 . Be sure to also overwrite
// the toString() method, and test with the Mocha tests in bankTests.js for the methods in
// SavingsAccount

class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number)
    this.interest = interest;
  }

  getInterest() {
    return this.interest;
  }
  setInterest(int) {
    return this.interest = int;
  }

  /**
       * Method to add money into the account
       * 
       * @param {number} amount money to be deposited into the account 
       * @returns {undefined}
       * @throws {RangeError} when amount is less than or equal to zero
       */
  deposit(amount) {
    if (amount <= 0) {
      throw new RangeError("Deposit amount has to be greater than zero");
    }
    this._balance += amount;
  }

  addInterest() {
    const amount = this._balance * this.interest / 100;
    this.deposit(amount)
  }
  
  /**
   * @returns {string} representation of this account
   */
  // toString() {
  //   return "Account " + this._number + ": balance " + this._balance;
  // }
}

// const save = new SavingsAccount(1000, 7);

// console.log(save.toString())



/* exports at end of file since exporting an object, which can only be referenced after definition   */
/* global exports */
//exports.SavingsAccount = SavingsAccount;