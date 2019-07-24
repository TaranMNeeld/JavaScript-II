// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let dollaz = 0;
const gettingPaid = function() {
  let paycheck = 1000;
  return function() {
    dollaz += paycheck;
    console.log(dollaz);
  }
};

const deposit = gettingPaid();

deposit();
deposit();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    count++;
    console.log(count);
  }
};
const newCounter = counter();
newCounter();
newCounter(); 

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let anObject = {
    increment: function() {
      return function() {
        count++;
        console.log(count);
      }
    },
    decrement: function() {
      return function() {
        count--;
        console.log(count);
      }
    }
  }
  return anObject;
};