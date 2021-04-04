"use strict";

const ingredients = ["cheese", "pepperoni"];

const timer = setTimeout(function(ing1, ing2){ 
  console.log(`pizza is here! with ${ing1} ${ing2}`);
}, 3000, "cheese", "pepperoni");
//console.log("here first");


// if(ingredients.includes("spinach")){
//   clearTimeout(timer);
// }

//automatically calls no need to call it
let timerId = setInterval(
  function(){
    const today = new Date();
    console.log(today);
  }, 1000);



//after 5 seconds stop
setTimeout(() => { clearInterval(timerId);
   console.log('stop'); }, 5000);


  //  let timerId2 = setTimeout(function tick() {
  //   console.log('tick');
  //   timerId2 = setTimeout(tick, 5000); // (*)
  // }, 2000);