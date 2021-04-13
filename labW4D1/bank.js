"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */
/*eslint-disable*/

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount; 

/*
Next create a Bank class, a Bank object should have an array of Account objects, and have
addAccount(), addSavingsAccount(interest),
addCheckingAccount(overdraft) methods each of which returns the number of the
created account. Also add a closeAccount(number) method that closes (removes from the
array) the account with that number, and a accountReport() method that returns a String 
with each account on its own line. Use a static nextNumber variable on the Bank class to know
what the number for the next account will be. Test with bankTests.js.


Create an endOfMonth() method on the Bank class, and on Account, SavingsAccount,
and CheckingAccount. The method on the Bank class it should go through the array calling
endOfMonth() on each of the accounts collecting their output. For normal Accounts the
endOfMonth() method should return an empty string. For SavingsAccounts it should call
the addInterest() method and return a string specifying how much interest was added to
this account (see example below), and for CheckingAccounts it should check if the balance is
below zero, and if so return a string with a warning (see example below). Test with
bankTests.js.
*/
class Bank {

// account = []

  addSavingsAccount(interest){

  }

  addAccount(){

  }

  addCheckingAccount(overdraft){

  }
}



/* exports at end of file since exporting an object, which can only be referenced after definition   */
//exports.Bank = Bank;
