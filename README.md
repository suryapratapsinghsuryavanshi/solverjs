[![Express Logo](https://localshares.herokuapp.com/files/download/31359a19-d85d-48f1-beec-db95c3de6508)](https://www.npmjs.com/package/solverjs/)


  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]
  
[npm-image]: https://img.shields.io/badge/npm-v1.2.6-blue
[npm-url]: https://www.npmjs.com/package/solverjs
[downloads-image]: https://img.shields.io/badge/downloads-500%2FWeeks-green
[downloads-url]: https://www.npmjs.com/package/solverjs
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://www.npmjs.com/package/solverjs
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://www.npmjs.com/package/solverjs
[coveralls-image]: https://img.shields.io/badge/coverage-2%25-yellow
[coveralls-url]: https://www.npmjs.com/package/solverjs
#

With web application all the time we face many problems to implement some logic, but in logic, we want some common mathematical applications like GCD, sum of all digits and this makes our implementation more complex hence If you want all these common math problems solved, then you can use solverjs.
SolversJS are a combination of many common mathematical and some very used logic solutions.

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

## All Commonly used Functions
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
    // The sumAllDigit function are return the sum of all
    // digit of the given number.
    console.log(solverjs.sumAllDighti(123));
    // The output is : 6

### reverseNumber
    // The reverseNumber function are return the reverse of 
    // the given number.
    console.log(solverjs.reverseNumber(935));
    // The output is : 539

### isArmstrong
    // The isArmstrong function are return true/false according
    // to the given number.
    console.log(solverjs.isArmstrong(153));
    // The output is : true

### sumOfN
    // The sumOfN function are return the sum of n natural numbers.
    console.log(solverjs.sumOfN(5));
    // The output is : 15

### fac
    // The fac function are return the factoril of the given number.
    console.log(solverjs.fac(5));
    // The output is : 120

### pow
    // The pow function are return the power of x^y.
    console.log(solverjs.pow(4, 2));
    // The output is : 16

### len
    // The len function are return the length ot given number or string.
    console.log(solverjs.len(1234));
    // The output is : 4

### isPrime
    // The isPrime function are return the true or false according
    // to the number is prime or not
    console.log(solverjs.isPrime(2));
    // The output is : true

### isCoPrime
    // The isCoPrime function are return the true/false
    // acording the both number are co-prime or not.
    console.log(solverjs.isCoPrime(13, 34));
    // The output is : true


## Number System Conversion
We all know we have very frequently is number system conversion in programming, our number system conversion methods provide all type of conversion of the numbers systems.

### Number system are four types
- Hexadecimal Number System   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F ]
- Decimal Number System       [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
- Octal Number System         [ 0, 1, 2, 3, 4, 5, 6, 7 ]
- Binary Number System        [ 0, 1 ] 

### Number system Conversion Methods

#### Hexadecimal to Decimal
    // The hexToDec function are take a hexadecimal value and return decimal value.
    console.log(solverjs.hexToDec(18));
    // The output is : 24

#### Hexadecimal to Octal
    // The hexToOct function are take a hexadecimal value and return octal value.
    console.log(solverjs.hexToOct(18));
    // The output is : 30

#### Hexadecimal to Binary
    // The hexToBin function are take a hexadecimal value and return binary value.
    console.log(solverjs.hexToBin(18));
    // The output is : 11000

#### Decimal to Hexadecimal
    // The decToHex function are take a decimal value and return hexadecimal value.
    console.log(solverjs.decToHex(18));
    // The output is : 12

#### Decimal to Octal
    // The decToOct function are take a decimal value and return octal value.
    console.log(solverjs.decToOct(18));
    // The output is : 22

#### Decimal to Binary
    // The decToBin function are take a decimal value and return binary value.
    console.log(solverjs.decToBin(18));
    // The output is : 10010

#### Octal to Hexadecimal
    // The octToHex function are take a octal value and return hexadecimal value.
    console.log(solverjs.octToHex(11236));
    // The output is : 129E

#### Octal to Decimal
    // The octToDec function are take a octal value and return decimal value.
    console.log(solverjs.octToDec(11236));
    // The output is : 4766

#### Octal to Binary
    // The octToBin function are take a octal value and return binary value.
    console.log(solverjs.octToBin(11236));
    // The output is : 1001010011110

#### Binary to Hexadecimal
    // The binToHex function are take a binary value and return hexadecimal value.
    console.log(solverjs.binToHex('010110101'));
    // The output is : B5

#### Binary to Decimal
    // The binToDec function are take a binary value and return decimal value.
    console.log(solverjs.binToDec('010110101'));
    // The output is : 181

#### Binary to Octal
    // The binToOct function are take a binary value and return octal value.
    console.log(solverjs.binToOct('010110101'));
    // The output is : 265


## Length Conversion
The length conversion is used very frequently in the many time in code base so if you want a solution use this method.

### Length Types
The length has many types but in this time we see only some very frequently used.
- Kilometer(km)
- Meter(me)
- Centimeter(cm)
- Millimeter(mm)
- Micormeter(Um)
- Nanometer(nm)
- Yard(yd)
- Foot(ft)
- Inch(in)

### Length Conversion Methods

#### Kilometer to Meter => kmToMe(km)
    // the kmToMe() function are take kilometer value and return there meter value. 
    console.log(solverjs.kmToMe(1));
    // The output is : 1000

#### Kilometer to Centimeter => kmToCm(km)
    // the kmToCm() function are take kilometer value and return there centimeter value. 
    console.log(solverjs.kmToCm(1));
    // The output is : 100000

#### Kilometer to Millimeter => kmToMm(km)
    // the kmToMm() function are take kilometer value and return there millimeter value.
    console.log(solverjs.kmToMm(1));
    // The output is : 1000000

#### Kilometer to Micrometer => kmToUm(km)
    // the kmToUm() function are take kilometer value and return there micrometer value.
    console.log(solverjs.kmToUm(1));
    // The output is : 1000000000

#### Kilometer to Nanometer => kmToNm(km)
    // the kmToNm() function are take kilometer value and return there nanometer value.
    console.log(solverjs.kmToNm(1));
    // The output is : 1000000000000

#### Kilometer to Yard => kmToYd(km)
    // the kmToYd() function are take kilometer value and return there Yard value.
    console.log(solverjs.kmToYd(1));
    // The output is : 1094

#### Kilometer to Foot => kmToFt(km)
    // the kmToFt() function are take kilometer value and return there Foot value.
    console.log(solverjs.kmToFt(1));
    // The output is : 3281

#### Kilometer to Inch => kmToIn(km)
    // the kmToIn() function are take kilometer value and return there Inch value.
    console.log(solverjs.kmToIn(1));
    // The output is : 39370


