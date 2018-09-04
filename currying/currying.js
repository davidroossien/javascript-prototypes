'use strict'

// https://medium.com/front-end-hacking/javascript-es6-curry-functions-with-practical-examples-6ba2ced003b1


// x is replaced by everything to the right
const sum = x => y => x + y;

// (2) becomes x, (1) becomes y
// returns the number 3
var result = sum (2)(1);
console.log(result);

// returns a function y => 2 + y
var resultFunction = sum (2);
var secondResult = resultFunction(4);
console.log(secondResult);


/**
 * Functions as pointers
 */

 // returns a function that takes no arguments and prints hello world
const function1 = () => console.log ('Hello World!');

// returns a function that calls a function that you pass in
const function2 = functionAsArgument => functionAsArgument ();

// calls functionAsArgument, passing in function1
function2(function1); // Hello World! is printed out

//const function3 = () => function1;
//function2 (function3()); // Hello World! is printed out