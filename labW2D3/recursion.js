"use strict";
// /*eslint-disable*/

//recursive structure
//module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, list2Array, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests


//From javascript.info
let company = { // the same object, compressed for brevity
  sales: [{ name: "John", salary: 1000 }, { name: "Alice", salary: 1600 }],
  development: {
    sites: [{ name: "Peter", salary: 2000 }, { name: "Alex", salary: 1800 }],
    internals: [{ name: "Jack", salary: 1300 }]
  }
};
const { sales, development } = company;
//console.log(sales);


//Example
// The function to do the job
// eslint-disable-next-line require-jsdoc
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 7700



//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
/**
 * 
 * @param {*} n is a number
 * @returns{*} the recursive sum of all digits
 */
function sumTo(n) {

  if (!(n > 1)) {
    return 1;
  }

  return n + (sumTo(n - 1));
}

//console.log(sumTo(100));


/**
 * 
 * @param {*} num is a positive integer
 * @returns {*} recursive fibonacci sequence of num
 */
function fibonacci(num) {
  if (num === 1) {
    return 1;
  }
  if (num === 0) {
    return 0;
  }
  else {
    return fibonacci(num - 1) + fibonacci(num - 2);

  }
}
//console.log(fibonacci(7));

/**
 * 
 * @param {*} num positive integer
 * @returns{*} recursvie factorial of num
 */
function factorial(num) {

  if (num === 1) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
}

/*
Write a function printList(list) that outputs list items one-by-one.
Make two variants of the solution: using a loop and using recursion.
What’s better: with recursion or without it?
*/
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/**
 * 
 * @param {*} list of linked list
 * @returns{*} undefined
 */
function printList(list) {
  if (list.next) {
    printList(list.next);
  }
}

//printList(list);


let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null
};
let node4 = {
  name: "label",
  value: "Name",
  children: null
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5]
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

/*
body: null
div: null
label: Name
input: this was typed by a user
p: This is text in the a paragraph
*/

/**
 * 
 * @param {*} node linked list
 * @returns{*} (key: value) of each node
 * 
 * process: 
 * first print the value of the node.  then check to see if it has children. 
 *  if so, loop through the children and recurse on each child node.  
 * the argument to the function must always be a node.  simple  -Professor
 */
function printLinkedList(node) {
  let currentNode = node;
  console.log(currentNode.name);
  if (currentNode.children) {
    for (const nodeN of currentNode.children)
      //console.log(currentNode.name);
      printLinkedList(nodeN);
  }

}

//printLinkedList(node1);



// eslint-disable-next-line require-jsdoc
function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

// eslint-disable-next-line require-jsdoc
function outputNames(node) {
  console.log(node.value)
  if (Array.isArray(node.descendents)) {
    for (const el of node.descendents) {
      outputNames(el);
    }

  }

}

/*
Given a target value, return true or false if there is a 
node in the tree with the target value. E.g.,
contains(tree, “Lisa”) → true
contains(tree, “Crusty”) → false
*/
/**
 * 
 * @param {*} node 
 * @param {*} value 
 */
function targetValue(node, value){
if(node.value === value){
  console.log(node.value);
} else if(Array.isArray(node.descendents)){
    for(const el of node.descendents){
      return targetValue(el, value);
    }
  }
}

//outputNames(abe);
targetValue(abe, "Maggie")