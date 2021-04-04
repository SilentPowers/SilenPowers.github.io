"use strict";

/*
Write a function printNumbers(from, to) that outputs a number every second, 
starting from from and ending with to.
Make two variants of the solution.
Using setInterval.
Using nested setTimeout.
*/

/**
 * 
 * @param {*} from num to start
 * @param {*} to num to end at
 * @returns{*} no return
 */
function printNumbers(from, to) {
  //assign from to keep track
  let current = from;
  const timeOut = setInterval(function () {
    console.log(current);
    if (current === to) {
      clearInterval(timeOut);
    }
    current++;
  }, 1000);
}

//printNumbers(5, 15);
//printNumbersNested(5, 15);
//setTimeout(() => {clearInterval(printNumbers),console.log("end")},4000);

/**
 * 
 * @param {*} from num to start
 * @param {*} to num to end at
 * @returns{*} no return
 */
function printNumbersNested(from, to) {

  let current = from;
  setTimeout(function print() {
    console.log(current);
    if (current < to) {
      setTimeout(print, 1000);
    }
    current++;
  }, 1000);
}

/////////////////////////////////////////
//Bank Object




const bank = { transactionsDB: [], };
bank.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] }];

bank.getBalance = function (id) {
  const customer = bank.transactionsDB.find(customer => customer.customerId === id);
  let balance = 0;
  for (const trans of customer.customerTransactions) {
    balance += trans;
  }
  return balance;
};

/** * @returns {number}  sum of all balances */
bank.bankBalance = function () {
  let balance = 0;
  for (const el of bank.transactionsDB) {
    balance += this.getBalance(el.customerId)
  }
  return balance;
};
bank.bankBalance();


bank.credit = function (id, amount) {
  const amountIn = this.saveTransaction(id, amount);
  return amountIn;
};

bank.debit = function (id, amount) {
  if (this.getBalance(id) < amount) {
    return "Not enough funds";
  }
  const amountOut = this.saveTransaction(id, amount);

  return amountOut;
};

bank.saveTransaction = function (id, amount) {
  const customer = bank.transactionsDB.find(function (customer) {
    return customer.customerId === id;
  });
  customer.customerTransactions.push(amount);

  return amount;
};
//bank.saveTransaction(1, 100);


/**
 * 
 * @returns{*} object
 * closure heere and object is now private
 */


const makeBank = (function(){
  const transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];
    
    return {transactionsDB};
  })();
  

