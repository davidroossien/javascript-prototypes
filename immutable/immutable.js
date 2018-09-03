'use strict'

// https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2/

// Immutability is when you declare a variable like a string, number
// Then make a copy of the variable by assigning it to another variable.
// If you change 1 of the variables, then it does not change the other.

// IMMUTABLE string
// you change 1 string, but it leaves the other alone
let a = 'test';
let b = a;

console.log("a = " + a);
console.log("b = " + b);

console.log("set a = st");
a = a.substring(2); // make a change to a

console.log("a = " + a); //st
console.log("b = " + b); //test, b does not change

console.log("Strings are MUTABLE a===b ?");
console.log(a === b); //false

console.log("--------------------");

// IMMUTABLE number
// you change 1 number, but it leaves the other alone
let e = 1;
let f = e;

console.log("e = " + e);
console.log("f = " + f);

console.log("increment e");
e++;

console.log("e = " + e); //2
console.log("f = " + f); //1
console.log("Numbers are MUTABLE e===f ?");
console.log(e === f); //false

console.log("--------------------");

// MUTABLE JSON object
// If you change an object that is referenced by another object, then both
// change. For mutable objects, updating state applies across all references
//  to that object. So changing a value in one place, changes it for all 
// references to that object.
let g = {
    foo: 'bar'
};

let h = g; //assign a reference
console.log("g.foo = " + g.foo); // bar
console.log("h.foo = " + h.foo); // bar

console.log("set g.foo = test"); // test

g.foo = 'test'; // make a change to g

console.log("g.foo = " + g.foo); // bar
console.log("h.foo = " + h.foo); // test

console.log("JSON objects are MUTABLE g===h ?");
console.log(g === h); // true

console.log("--------------------");

// MUTABLE array
let c = ['foo', 'bar'];
let d = c; //assign a reference

console.log("c = " + c);
console.log("d = " + d);

console.log("push baz onto c");

c.push('baz');

console.log("c = " + c); // ['foo', 'bar', 'baz']
console.log("d = " + d); // ['foo', 'bar', 'baz']

console.log("Arrays are MUTABLE c===d ?"); // true
console.log(c === d); // true