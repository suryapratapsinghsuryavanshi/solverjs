# solverjs v1.1.2
This package is a combination of many useful functions.

## Installation
### Using npm:
    npm i solverjs
    npm i -g solverjs
    npm i --save solverjs

## Usage In NodeJs
    // Load teh full solverjs.
    var solverjs = require('solverjs');
    // The getFib return the n'th fibonacci number.
    var ans = solverjs.getFib(8);
    // The 8'th fibonacci number is 8.
    // Output should be : 21

## All Functions
### info
    // The info function are give the information about the solverjs.
    solverjs.info();
    // The output is : information about the module.

### getFib
    // The getFib function are return the n'th fibonacci number.
    console.log(solverjs.getFib(8));
    // The 8'th fibonacci number is : 8.

### getGcd
    // The getGcd function are return the gcd of the given two numbers.
    console.log(solverjs.getGcd(12, 24));
    // The output is : 12.

### printFib
    // The printFib function are return the string formated as:
    // Fibonacci Series : 1 1 2 3 5
    console.log(solverjs.printFib(8));
    // Fibonacci Series : 1 1 2 3 5 8 13 21

### sumAllDigit
    // The sumAllDigit function are return the sum of all digit of the given number.
    console.log(solverjs.sumAllDighti(123));
    // The output is : 6

### reverseNumber
    // The reverseNumber function are return the reverse of the given number.
    console.log(solverjs.reverseNumber(935));
    // The output is : 539

### isArmstrong
    // The isArmstrong function are return true/false according to the given number.
    console.log(solverjs.isArmstrong(153));
    // The output is : true