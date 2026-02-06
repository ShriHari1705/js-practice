"use strict";

// 1. Declare variables of each primitive type
let myString = "Hello";
let myNumber = 42;
let myBoolean = true;
let myUndefined;
let myNull = null;
let myBigInt = 9007199254740991n;
let mySymbol = Symbol("unique");

// 2. Log each with typeof
console.log(typeof myString);     // ?
console.log(typeof myNumber);     // ?
console.log(typeof myBoolean);    // ?
console.log(typeof myUndefined);  // ?
console.log(typeof myNull);       // ? (surprise!)
console.log(typeof myBigInt);     // ?
console.log(typeof mySymbol);     // ?

// 3. Test null vs undefined
console.log(myNull === myUndefined);   // ?
console.log(myNull == myUndefined);    // ?

// 4. Test NaN
console.log(0 / 0);           // ?
console.log(typeof (0 / 0));  // ?
console.log(NaN === NaN);     // ?
console.log(isNaN(NaN));      // ?

// 5. Number limits
console.log(Number.MAX_SAFE_INTEGER);  // ?
console.log(Number.MAX_SAFE_INTEGER + 1);  // ?
console.log(Number.MAX_SAFE_INTEGER + 2);  // ? (loses precision!)
