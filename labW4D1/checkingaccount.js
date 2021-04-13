"use strict";
/* global Account  */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
/*eslint-disable*/
/*
Create a CheckingAccount class by extending Account. In addition to the attributes of an
Account, it should have an overdraft limit variable. The overdraft amount indicates how much
a person is allowed to temporarily withdraw beyond what they have. In other words, it’s the
amount that an account is allowed to go into the red (negative balance). Be sure to set this value
in the constructor and create a getter and a setter for it. Also make sure that you override the
withdraw(amount) method and the toString() method. Test with bankTests.js.
*/

class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this.overdraft = overdraft
  }

  getOverdraft() {
    return this.overdraft;
  }

  setOverdraft(value) {
    return this.overdraft = value;
  }

  /**
      * Method to take money out of the account
      * 
      * @param {number} amount money to be taken out of the account
      * @returns {undefined}
      * @throws {RangeError} when amount is less than or equal to zero
      * @throws {Error} when the account has insufficient funds (balance)
      */
  withdraw(amount) {
 
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (this._balance < 0) {
      throw Error("Insufficient funds, cannot withdraw beyond overdraft limit")
    }
    if (amount > this.overdraft) {
      throw Error("Insufficient funds, cannot withdraw beyond overdraft limit")
    }
    // if ( amount > this._balance) {
    //   throw Error("Insufficient funds");
    // }
    this._balance -= amount;
  }
}









/* exports at end of file since exporting an object, which can only be referenced after definition   */
//exports.CheckingAccount = CheckingAccount;

