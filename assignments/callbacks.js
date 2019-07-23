// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function higherOrderFunction(anArray, callback) {
  return callback(anArray);
}

function callbackFunction(anArray) {
  let newArray = anArray.shift(); //Remove items[0] and create a new array equal to the removed item;
  console.log(`Gimme a ${newArray}`);
}

higherOrderFunction(items, callbackFunction);

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  let arrayLength = arr.length;
  return cb(arrayLength);
}

function getLengthCallback(length) {
  console.log(`items.length = ${length}`);
}

getLength(items, getLengthCallback);



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

function lastItem(theLastItem) {
  console.log(`The last item in the array is: ${theLastItem}`);
}

last(items, lastItem);



let message = "";
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  message =  `${x} + ${y} =`;
  return cb(message, x + y);
} 

function printSum(aString, sum) {
  console.log(`${aString} ${sum}`);
}

sumNums(5, 10, printSum);



function multiplyNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  message =  `${x} * ${y} =`;
  return cb(message, x * y);
} 

function printProduct(aString, product) {
  console.log(`${aString} ${product}`);
}

multiplyNums(5, 10, printProduct);



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let boolValue = false;
  for (let i = 0; i < list.length; i++) {
    let currentItem = list[i];
    if (item === currentItem) {
      boolValue = true;
      message =  `List contains ${item} =`;
      return cb(message, boolValue);
    }
    boolValue = false;
    message =  `List contains ${item} =`;
  }
  return cb(message, boolValue);
}

function doesItContain(message, doesIt) {
  console.log(`${message} ${doesIt}`);
}

contains("Notebook", items, doesItContain);
contains("Binder", items, doesItContain);

/* STRETCH PROBLEM */

const nums = [1 , 2, 2, 5, 7, 6, 8, 2, 5, 6, 1, 2];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
 
  let newNums = [];
 
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (newNums.includes(element)) {
      continue;
    } else {
      newNums.push(element);
    }
  }

  return cb(newNums);
}

function printCleanArray(array) {
  console.log(array);
}

removeDuplicates(nums, printCleanArray);
