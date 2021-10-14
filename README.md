<div align="center">

[![SolverJs Logo](https://localprofiler.ml/uploads/file_1622214512395.png)](https://www.npmjs.com/package/solverjs/)
</div>

<div align="center">
 
[![GitHub forks](https://img.shields.io/github/forks/suryapratapsinghsuryavanshi/solverjs.svg?style=social&label=Fork&maxAge=2592000)](https://https://github.com/suryapratapsinghsuryavanshi/solverjs//network/)
[![GitHub stars](https://img.shields.io/github/stars/suryapratapsinghsuryavanshi/solverjs.svg?style=social&label=Star&maxAge=2592000)](https://https://github.com/suryapratapsinghsuryavanshi/solverjs//stargazers/)
<br />
 
[![Welcome to my profile](https://img.shields.io/badge/Hello,Programmer!-Welcome-blue.svg?style=flat&logo=github)](https://github.com/suryapratapsinghsuryavanshi)
[![Visits](https://komarev.com/ghpvc/?username=suryapratapsinghsuryavanshi&label=You%20Are%20Visitor%20No.&color=f20707&logo=github&style=flat-square)](https://github.com/suryapratapsinghsuryavanshi/solverjs)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/suryapratapsinghsuryavanshi/solverjs)
![Lines of code](https://img.shields.io/tokei/lines/github/suryapratapsinghsuryavanshi/solverjs?color=red&label=Lines%20of%20Code)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
<br/>

[![Updated Badge](https://img.shields.io/github/last-commit/suryapratapsinghsuryavanshi/solverjs?label=Last%20Updated&style=flat)](https://github.com/suryapratapsinghsuryavanshi/solverjs/commits)
[![Number of Contributors](https://img.shields.io/github/contributors/suryapratapsinghsuryavanshi/solverjs?style=flat&label=Contributors)](https://github.com/suryapratapsinghsuryavanshi/solverjs/graphs/contributors)
[![Issues opened](https://img.shields.io/github/issues/suryapratapsinghsuryavanshi/solverjs?label=Issues)](https://github.com/suryapratapsinghsuryavanshi/solverjs)
[![Issues closed](https://img.shields.io/github/issues-closed/suryapratapsinghsuryavanshi/solverjs?label=Issues)](https://github.com/suryapratapsinghsuryavanshi/solverjs/issues)
[![PRs open](https://img.shields.io/github/issues-pr/suryapratapsinghsuryavanshi/solverjs?label=Pull%20Requests)](https://github.com/suryapratapsinghsuryavanshi/solverjs/pulls)
[![PRs closed](https://img.shields.io/github/issues-pr-closed/suryapratapsinghsuryavanshi/solverjs?label=Pull%20Requests)](https://github.com/suryapratapsinghsuryavanshi/solverjs/pulls)
<br/>

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][travis-image]][travis-url]
[![Windows Build][appveyor-image]][appveyor-url]
[![Test Coverage][coveralls-image]][coveralls-url]
  
[npm-image]: https://img.shields.io/badge/npm-v3.26.13-blue
[npm-url]: https://www.npmjs.com/package/solverjs
[downloads-image]: https://img.shields.io/badge/Downloads-200%2FWeeks-green
[downloads-url]: https://www.npmjs.com/package/solverjs
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=Linux
[travis-url]: https://www.npmjs.com/package/solverjs
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=Windows
[appveyor-url]: https://www.npmjs.com/package/solverjs
[coveralls-image]: https://img.shields.io/badge/Coverage-2%25-yellow
[coveralls-url]: https://www.npmjs.com/package/solverjs

<br>

![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-21-red)
</div>

# SolverJS

With web application all the time we face many problems to implement some logic, but in logic, we want some common mathematical applications like GCD, sum of all digits and this makes our implementation more complex hence If you want all these common math problems solved, then you can use solverjs.
SolverJS are a combination of many common mathematical and some very used logic solutions.

## ☯ What's New
Finally, jsDelivr CDN is available so you can now use the SolverJs in your non-npm project and we use 'let' over the 'const' so you freely use SolverJs package within an old codebase also.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 4.2.4 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

### Using npm:
    npm i solverjs

### Using yarn:
    yarn add solverjs

### Using jsDelivr CDN
[SolverJS jsDelivr CDN](https://www.jsdelivr.com/package/npm/solverjs)

## Contributing

[Contributing Guide](Contributing.md)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/suryapratapsinghsuryavanshi/solverjs)&nbsp;

## Usage In NodeJs
    // Load the full solverjs.
    var solverjs = require('solverjs');
    // The getFib return the n'th fibonacci number.
    var ans = solverjs.getFib(8);
    // The 8'th fibonacci number is 8.
    // Output should be : 21

## All Commonly used Functions
### info
The info () function is used to print a concise summary of a all solverjs methods.

    // The info function are give the information about the solverjs methods.
    solverjs.info();
    // The output is : information about the module.

### getFib
The Fibonacci numbers form a sequence such that each number is the sum of the two preceding numbers, starting from 0 and 1
getFib function to calculate the nth term of the Fibonacci sequence.

    // The getFib function are return the n'th fibonacci number.
    console.log(solverjs.getFib(8));
    // The 8'th fibonacci number is : 8.

### getGcd
The GCD is a mathematical term for the Greatest Common Divisor of two or more numbers.
It is the Greatest common divisor that completely divides two or more numbers without leavingany remainder. 

    console.log(solverjs.getGcd(12, 24));
    // The output is : 12.

### printFib
The Fibonacci numbers form a sequence such that each number is the sum of the two preceding numbers, starting from 0 and 1
we use the recursive printFib function that takes a number n as a parameter and display  Fibonacci sequence uoto nth place .
The first few Fibonacci numbers are: 
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89…

    console.log(solverjs.printFib(8));
    // Fibonacci Series : 1 1 2 3 5 8 13 21

### sumAllDigit
Function that takes a number and returns sum of the digit the given number.

    console.log(solverjs.sumAllDighti(123));
    // The output is : 6

### reverseNumber
reverseNumber function that takes in a number and returns its reversed number.

    console.log(solverjs.reverseNumber(935));
    // The output is : 539

### isArmstrong
An Armstrong number is a number such that the sum ! of its digits raised to the third power is equal to the number ! itself. 
153 is an Armstrong number. 153 = (1*1*1)+ (5*5*5)+ (3*3*3)

    // The isArmstrong function are return true/false according
    // to the given number.
    console.log(solverjs.isArmstrong(153));
    // The output is : true

### sumOfN
The sumOfN function returns the sum of n natural numbers.
    
    console.log(solverjs.sumOfN(5));
    // The output is : 15

### fac
Factorial is the product of a given positive integer multiplied by all lesser positive integers.
Zero Factorial is interesting ... it is generally agreed that 0! = 1.

    // The fac function are return the factoril of the given number.
    console.log(solverjs.fac(5));
    // The output is : 120

### pow
The function pow() is used to calculate the power raised to the base value. It takes two arguments. 
It returns the power raised to the base value.

    // The pow function are return the power of x^y.
    console.log(solverjs.pow(4, 2));
    // The output is : 16

### len
len function returns the number of characters in a given string or number. 
len takes just one argument, string or number.
  
    console.log(solverjs.len(1234));
    // The output is : 4

### isPrime
Prime numbers are the positive integers having only two factors, 1 and the integer itself.

    // The isPrime function are return the true or false according
    // to the number is prime or not
    console.log(solverjs.isPrime(2));
    // The output is : true

### isCoPrime
A Co-prime number is a set of numbers or integers which have only 1 as their common factor i.e.
their highest common factor (HCF) will be 1.

    // The isCoPrime function are return the true/false
    // acording the both number are co-prime or not.
    console.log(solverjs.isCoPrime(13, 34));
    // The output is : true

### isKishnamurthyNumber
A Krishnamurthy number is a number whose sum of the factorial of digits is equal to the number itself. 
For example 145, sum of factorial of each digits: 1! + 4! + 5! = 1 + 24 + 120 = 145
isKishnamurthyNumbrer is a boolean function that take number as agrument and return true/false.

    console.log(solverjs.isKishnamurthyNumber(145));
    // The output is : true

### avg
The average calculated by avg is the arithmetic mean (the sum of the values divided by the number of values).

    // Average - is a term mid of the all given data point.
    console.log(solverjs.avg([5, 6, 8, 9, 3]));
    // The output is : 6.2

### mod 
mod function return absolute value of a number is the number without its sign.
   
    console.log(solverjs.mod(-145));
    // The output is : 145

### wordCount
This method relies on the number of words present in the input string to count the number of words as every word in a sentence is separated by a space. 

    // Word Counter is count he word of the given string.
    // provide seperator.
    console.log(solverjs.wordCount('alsdjf lasjfd lsjf', ' '));
    // The output is : 3

### isLeap
A leap year is a year with 366 days instead of 365; every 4 years in February one extra day is added.
The isLeap year check the given year is leap or not and return true/false.
 
    console.log(solverjs.isLeap(2021));
    // The output is : false

### lcm
Least Common Multiple(LCM) is a method to find the smallest common multiple between any two or more numbers. 
A common multiple is a number which is a multiple of two or more numbers.
lcm function takes two numbers as argument and return lcm of these number.

    console.log(solverjs.lcm(12, 3));
    // The output is : 12

### hcf
The greatest number which divides each of the two or more numbers is called HCF or Highest Common Factor. 
It is also called the Greatest Common Measure(GCM) and Greatest Common Divisor(GCD).
hcf function takes two numbers as argument and return hcf of these number.

    console.log(solverjs.hcf(72, 23));
    // The output is : 1

### ascii
ASCII (which stands for American Standard Code for Information Interchange) is a character encoding standard for text files in computers and other devices.
ASCII is a subset of Unicode and is made up of 128 symbols in the character set. 
ascii method is returning equivalent numeric ascii value for the given character.

    // Find the ascii value of the given character.
    console.log(solverjs.ascii('A'));
    // The output is : 65

### reverse
 The method reverse the given string.
     
     console.log(solverjs.reverse('abcde'));
    // The output is : edcba

### isPalindrome
A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.
The isPalindrome check the given stirng is palindrome or not.
    
    console.log(solverjs.isPalindrome('abcba'));
    // The output is : true

### permutation
A permutation is an arrangement of objects in a definite order. The members or elements of sets are arranged here in a sequence or linear order.
permutation function take one string  argument and return all combination of string.
   
    console.log(solverjs.permutation('abc'));
    // The output is : [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

### alternativeStringArrange 
The alternativeStringArrange takes two string argument alternative merge  the character and return new merge string.

    console.log(solverjs.alternativeStringArrange('abcde', 'xyz'));
    // The output is : axbyczde
    // Time Complexity O(n)

### phoneValidator 
The phoneValidator takes number as argument and check the numebr is a valid or not , return true/false.

    console.log(solverjs.phoneValidator('+910011223344'));
    // The output is : true

### phoneExtractor
The phoneExtractor takes string as argument ,find the phone number in stirng and return phone number.
    
    console.log(solverjs.phoneExtractor('this is no. +910011223344'));
    // The output is : +910011223344

### isAlNum
Alphanumericals are a combination of alphabetical and numerical characters, and is used to describe the collection of Latin letters.

    // The isAlNum method check the given string
    // alphanumeric or not return boolean value.
    console.log(solverjs.isAlNum('55x'));
    // The output is : true

### isAlpha
The isAlpha method check the givne string alpha or not return boolean value.
    
    console.log(solverjs.isAlpha('55'));
    // The output is : false

### numToAscii
The numToAscii method  that converts a decimal number into ASCII or char value.
   
    console.log(solverjs.numToAscii(97));
    // The output is : a

### isDecimal
isDecimal is a function that returns true if all characters in a string are decimal. 
If all characters are not decimal then it returns false.

    console.log(solverjs.isDecimal('55'));
    // The output is : true

### isLower 
The isLower method are used for check the all charector in lower case form or not.
     
    console.log(solverjs.isLower('lower'));
    // The output is : true

### isUpper
The isUpper method are used for check the all charector in upper case form or not.
    
    console.log(solverjs.isUpper('UPPER'));
    // The output is : true

### isTitle 
The isTitle method returns True if all words in a text start with a upper case letter, AND the rest of the word are lower case letters, otherwise False.

    // The isTitle method are used for check the
    // given string in title form or not.
    console.log(solverjs.isTitle('Title'));
    // The output is : true

### isSpace 
The isSpace method returns True if all the characters in a string are whitespaces, otherwise False.

    // The isSpace method are used for check the given 
    // string is all character in space or not.
    console.log(solverjs.isSpace('  '));
    // The output is : true

### token
The token method provides a unique token value for any kind of authentication in string format.
    
    console.log(solverjs.token());
    // The output is : l\sF\h1402241vmEY@xkFziVNp (unique token)

### randomInt
randomint function takes two argument as a range and generates a random integer between the given range.
    
    console.log(solverjs.randomInt(5, 9));
    // The output is : 7

### remainder
remainder returns the remainder of a number divided by another number. 
remainder function take 2 number as a argument and return the remainder (first number divide by Second number).
remember second number can't be 0,function  returns an error as you cannot divide by 0.
 
    // Use to find the remainder or modulo division.
    console.log(solverjs.remainder(5, 2));
    // The output is : 1

### isFibonacci
The Fibonacci numbers form a sequence such that each number is the sum of the two preceding numbers, starting from 0 and 1.
isFibonacci is a boolean function that take one number as argument , checks the number is a fibonacci number or not  and return true/false;
    
    console.log(solverjs.isFibonacci(5));
    // The output is : true

### max
The max method returns the maximum value from the given array.

    console.log(solverjs.max([2, 5, 6, 3]));
    // The output is : 6

### min
The min method returns the minimum value from the given array.

    console.log(solverjs.min([2, 5, 6, 3]));
    // The output is : 2

## Number System Conversion
We all know we have very frequently is number system conversion in programming, our number system conversion methods provide all type of conversion of the numbers systems.

### Number system are four types
- Hexadecimal Number System   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F ]
- Decimal Number System       [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
- Octal Number System         [ 0, 1, 2, 3, 4, 5, 6, 7 ]
- Binary Number System        [ 0, 1 ] 

### Number system Conversion Methods

#### Hexadecimal to Decimal
    // The hexToDec function are take a hexadecimal value and return
    // decimal value.
    console.log(solverjs.hexToDec(18));
    // The output is : 24

#### Hexadecimal to Octal
    // The hexToOct function are take a hexadecimal value and return
    // octal value.
    console.log(solverjs.hexToOct(18));
    // The output is : 30

#### Hexadecimal to Binary
    // The hexToBin function are take a hexadecimal value and return
    // binary value.
    console.log(solverjs.hexToBin(18));
    // The output is : 11000

#### Decimal to Hexadecimal
    // The decToHex function are take a decimal value and return
    // hexadecimal value.
    console.log(solverjs.decToHex(18));
    // The output is : 12

#### Decimal to Octal
    // The decToOct function are take a decimal value and return
    // octal value.
    console.log(solverjs.decToOct(18));
    // The output is : 22

#### Decimal to Binary
    // The decToBin function are take a decimal value and return
    // binary value.
    console.log(solverjs.decToBin(18));
    // The output is : 10010

#### Octal to Hexadecimal
    // The octToHex function are take a octal value and return
    // hexadecimal value.
    console.log(solverjs.octToHex(11236));
    // The output is : 129E

#### Octal to Decimal
    // The octToDec function are take a octal value and return
    // decimal value.
    console.log(solverjs.octToDec(11236));
    // The output is : 4766

#### Octal to Binary
    // The octToBin function are take a octal value and return
    // binary value.
    console.log(solverjs.octToBin(11236));
    // The output is : 1001010011110

#### Binary to Hexadecimal
    // The binToHex function are take a binary value and return
    // hexadecimal value.
    console.log(solverjs.binToHex('010110101'));
    // The output is : B5

#### Binary to Decimal
    // The binToDec function are take a binary value and return
    // decimal value.
    console.log(solverjs.binToDec('010110101'));
    // The output is : 181

#### Binary to Octal
    // The binToOct function are take a binary value and return
    // octal value.
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

### Kilometer to All

#### Kilometer to Meter => kmToMe(km)
    // the kmToMe() function are take kilometer value and return there
    // meter value. 
    console.log(solverjs.kmToMe(1));
    // The output is : 1000

#### Kilometer to Centimeter => kmToCm(km)
    // the kmToCm() function are take kilometer value and return there
    // centimeter value. 
    console.log(solverjs.kmToCm(1));
    // The output is : 100000

#### Kilometer to Millimeter => kmToMm(km)
    // the kmToMm() function are take kilometer value and return there
    // millimeter value.
    console.log(solverjs.kmToMm(1));
    // The output is : 1000000

#### Kilometer to Micrometer => kmToUm(km)
    // the kmToUm() function are take kilometer value and return there
    // micrometer value.
    console.log(solverjs.kmToUm(1));
    // The output is : 1000000000

#### Kilometer to Nanometer => kmToNm(km)
    // the kmToNm() function are take kilometer value and return there
    // nanometer value.
    console.log(solverjs.kmToNm(1));
    // The output is : 1000000000000

#### Kilometer to Yard => kmToYd(km)
    // the kmToYd() function are take kilometer value and return there
    // Yard value.
    console.log(solverjs.kmToYd(1));
    // The output is : 1094

#### Kilometer to Foot => kmToFt(km)
    // the kmToFt() function are take kilometer value and return there
    // Foot value.
    console.log(solverjs.kmToFt(1));
    // The output is : 3281

#### Kilometer to Inch => kmToIn(km)
    // the kmToIn() function are take kilometer value and return there
    // Inch value.
    console.log(solverjs.kmToIn(1));
    // The output is : 39370

## Meter to All

### Meter to Kilometer => meToKm(me)
    // the meToKm() function are take meter value and return there
    // kilometer value.
    console.log(solverjs.meToKm(1));
    // The output is : 0.001

### Meter to Centimeter => meToCm(me)
    // the meToCm() function are take meter value and return there
    // centimeter value.
    console.log(solverjs.meToCm(1));
    // The output is : 100

### Meter to Millimetre => meToMm(me)
    // the meToMm() function are take meter value and return there
    // millimeter value.
    console.log(solverjs.meToMm(1));
    // The output is : 1000

### Meter to Micrometre => meToUm(me)
    // the meToUm() function are take meter value and return there
    // micrometres value.
    console.log(solverjs.meToUm(1));
    // The output is : 1000000

### Meter to Nanometre => meToNm(me)
    // the meToNm() function are take meter value and return there
    // nanometre value.
    console.log(solverjs.meToNm(1));
    // The output is : 1000000000

### Meter to Yard => meToYd(me)
    // the meToYd() function are take meter value and return there
    // yard value.
    console.log(solverjs.meToYd(1));
    // The output is : 1.094

### Meter to Foot => meToFt(me)
    // the meToFt() function are take meter value and return there
    // foot value.
    console.log(solverjs.meToFt(1));
    // The output is : 3.281

### Meter to Inch => meToIn(me)
    // the meToIn() function are take meter value and return there
    // inch value.
    console.log(solverjs.meToIn(1));
    // The output is : 39.37

## Centimetre to All

### Centimetre to Kilometer => cmToKm(cm)
    // the cmToKm() function are take centimeter value and return there
    // kilometer value.
    console.log(solverjs.cmToKm(1));
    // The output is : 0.00001

### Centimetre to Meter => cmToMe(cm)
    // the cmToMe() function are take centimeter value and return there
    // meter value.
    console.log(solverjs.cmToMe(1));
    // The output is : 0.01

### Centimetre to Millimetre => cmToMm(cm)
    // the cmToMm() function are take centimeter value and return there
    // millimeter value.
    console.log(solverjs.cmToMm(1));
    // The output is : 10

### Centimetre to Micrometre => cmToUm(cm)
    // the cmToUm() function are take centimeter value and return there
    // micrometres value.
    console.log(solverjs.cmToUm(1));
    // The output is : 10000

### Centimetre to Nanometre => cmToNm(cm)
    // the cmToNm() function are take centimeter value and return there
    // nanometre value.
    console.log(solverjs.cmToNm(1));
    // The output is : 10000000

### Centimetre to Yard => cmToYd(cm)
    // the cmToYd() function are take centimeter value and return there
    // yard value.
    console.log(solverjs.cmToYd(1));
    // The output is : 0.010936132983377079

### Centimetre to Foot => cmToFt(cm)
    // the cmToFt() function are take centimeter value and return there
    // foot value.
    console.log(solverjs.cmToFt(1));
    // The output is : 0.03280839895013123

### Centimetre to Inch => cmToIn(cm)
    // the cmToIn() function are take centimeter value and return there
    // inch value.
    console.log(solverjs.cmToIn(1));
    // The output is : 0.39370078740157477

## Millimetre to All

### Millimeter to Kilometer => mmToKm(mm)
    // the mmToKm() function are take millimetre value and return there
    // kilometer value.
    console.log(solverjs.mmToKm(1));
    // The output is : 0.000001

### Millimeter to Meter => mmToMe(mm)
    // the mmToMe() function are take millimetre value and return there
    // meter value.
    console.log(solverjs.mmToMe(1));
    // The output is : 0.001

### Millimeter to Centimeter => mmToCm(mm)
    // the mmToMm() function are take millimetre value and return there
    // centimeter value.
    console.log(solverjs.mmToCm(1));
    // The output is : 0.1

### Millimeter to Micrometre => mmToUm(mm)
    // the mmToUm() function are take millimetre value and return there
    // micrometres value.
    console.log(solverjs.mmToUm(1));
    // The output is : 1000

### Millimeter to Nanometre => mmToNm(mm)
    // the mmToNm() function are take millimetre value and return there
    // nanometre value.
    console.log(solverjs.mmToNm(1));
    // The output is : 1000000

### Millimeter to Yard => mmToYd(mm)
    // the mmToYd() function are take millimetre value and return there
    // yard value.
    console.log(solverjs.mmToYd(1));
    // The output is : 0.0010940919037199124

### Millimeter to Foot => mmToFt(mm)
    // the mmToFt() function are take millimetre value and return there
    // foot value.
    console.log(solverjs.mmToFt(1));
    // The output is : 0.003278688524590164

### Millimeter to Inch => mmToIn(mm)
    // the mmToIn() function are take millimetre value and return there
    // inch value.
    console.log(solverjs.mmToIn(1));
    // The output is : 0.03937007874015748

## Micrometre to All

### Micrometre to Kilometer => umToKm(um)
    // the umToKm() function are take micrometre value and return there
    // kilometer value.
    console.log(solverjs.umToKm(1));
    // The output is : 0.000000001

### Micrometre to Meter => umToMe(um)
    // the umToMe() function are take micrometre value and return there
    // meter value.
    console.log(solverjs.umToMe(1));
    // The output is : 0.000001

### Micrometre to Centimeter => umToCm(um)
    // the umToMm() function are take micrometre value and return there
    // centimeter value.
    console.log(solverjs.umToCm(1));
    // The output is : 0.0001

### Micrometre to Millimetre => umToMm(um)
    // the umToMm() function are take micrometre value and return there
    // millimetre value.
    console.log(solverjs.umToMm(1));
    // The output is : 0.001

### Micrometre to Nanometre => umToNm(um)
    // the umToNm() function are take micrometre value and return there
    // nanometre value.
    console.log(solverjs.umToNm(1));
    // The output is : 1000

### Micrometre to Yard => umToYd(um)
    // the umToYd() function are take micrometre value and return there
    // yard value.
    console.log(solverjs.umToYd(1));
    // The output is : 0.0000010936132983377078

### Micrometre to Foot => umToFt(um)
    // the umToFt() function are take micrometre value and return there
    // foot value.
    console.log(solverjs.umToFt(1));
    // The output is : 0.0000032808398950131235

### Micrometre to Inch => umToIn(um)
    // the umToIn() function are take micrometre value and return there
    // inch value.
    console.log(solverjs.umToIn(1));
    // The output is : 0.00003937007874015748

## Nanometer to All

### Nanometer to Kilometer => nmToKm(nm)
    // the nmToKm() function are take nanometer value and return there
    // kilometer value.
    console.log(solverjs.nmToKm(1));
    // The output is : 0.000000000001

### Nanometer to Meter => nmToMe(nm)
    // the nmToMe() function are take nanometer value and return there
    // meter value.
    console.log(solverjs.nmToMe(1));
    // The output is : 0.000000001

### Nanometer to Centimeter => nmToCm(nm)
    // the nmToMm() function are take nanometer value and return there
    // centimeter value.
    console.log(solverjs.nmToCm(1));
    // The output is : 0.0000001

### Nanometer to Millimetre => nmToMm(nm)
    // the nmToMm() function are take nanometer value and return there
    // millimetre value.
    console.log(solverjs.nmToMm(1));
    // The output is : 0.000001

### Nanometer to Micrometre => nmToUm(nm)
    // the nmToNm() function are take nanometer value and return there
    // micrometre value.
    console.log(solverjs.nmToUm(1));
    // The output is : 0.001

### Nanometer to Yard => nmToYd(nm)
    // the nmToYd() function are take nanometer value and return there
    // yard value.
    console.log(solverjs.nmToYd(1));
    // The output is : 1.0936132983377077e-9

### Nanometer to Foot => nmToFt(nm)
    // the nmToFt() function are take nanometer value and return there
    // foot value.
    console.log(solverjs.nmToFt(1));
    // The output is : 3.2808398950131233e-9

### Nanometer to Inch => nmToIn(nm)
    // the nmToIn() function are take nanometer value and return there
    // inch value.
    console.log(solverjs.nmToIn(1));
    // The output is : 3.937007874015748e-8

## Yard to All

### Yard to Kilometer => ydToKm(yd)
    // the ydToKm() function are take Yard value and return there
    // kilometer value.
    console.log(solverjs.ydToKm(1));
    // The output is : 0.0009140767824497258

### Yard to Meter => ydToMe(yd)
    // the ydToMe() function are take Yard value and return there
    // meter value.
    console.log(solverjs.ydToMe(1));
    // The output is : 0.9140767824497257

### Yard to Centimeter => ydToCm(yd)
    // the ydToCm() function are take Yard value and return there
    // centimeter value.
    console.log(solverjs.ydToCm(1));
    // The output is : 91.44

### Yard to Millimetre => ydToMm(yd)
    // the ydToMm() function are take Yard value and return there
    // millimetre value.
    console.log(solverjs.ydToMm(1));
    // The output is : 914

### Yard to Micrometre => ydToUm(yd)
    // the ydToUm() function are take Yard value and return there
    // micrometre value.
    console.log(solverjs.ydToUm(1));
    // The output is : 914400

### Yard to Nanometre => ydToNm(yd)
    // the ydToNm() function are take Yard value and return there
    // nanometre value.
    console.log(solverjs.ydToNm(1));
    // The output is : 914400000

### Yard to Foot => ydToFt(yd)
    // the ydToFt() function are take Yard value and return there
    // foot value.
    console.log(solverjs.ydToFt(1));
    // The output is : 3

### Yard to Inch => ydToIn(yd)
    // the ydToIn() function are take Yard value and return there
    // inch value.
    console.log(solverjs.ydToIn(1));
    // The output is : 36

## Foot to All

### Foot to Kilometer => ftToKm(ft)
    // the ftToKm() function are take foot value and return there
    // kilometer value.
    console.log(solverjs.ftToKm(1));
    // The output is : 0.00030478512648582747

### Foot to Meter => ftToMe(ft)
    // the ftToMe() function are take foot value and return there
    // meter value.
    console.log(solverjs.ftToMe(1));
    // The output is : 0.30478512648582745

### Foot to Centimeter => ftToCm(ft)
    // the ftToCm() function are take foot value and return there
    // centimeter value.
    console.log(solverjs.ftToCm(1));
    // The output is : 30.48

### Foot to Millimetre => ftToMm(ft)
    // the ftToMm() function are take foot value and return there
    // millimetre value.
    console.log(solverjs.ftToMm(1));
    // The output is : 305

### Foot to Micrometre => ftToUm(ft)
    // the ftToUm() function are take foot value and return there
    // micrometre value.
    console.log(solverjs.ftToUm(1));
    // The output is : 304800

### Foot to Nanometre => ftToNm(ft)
    // the ftToNm() function are take foot value and return there
    // nanometre value.
    console.log(solverjs.ftToNm(1));
    // The output is : 304800000

### Foot to Yard => ftToYd(ft)
    // the ftToYd() function are take foot value and return there
    // yard value.
    console.log(solverjs.ftToYd(1));
    // The output is : 0.3333333333333333

### Foot to Inch => ftToIn(ft)
    // the ftToIn() function are take foot value and return there
    // inch value.
    console.log(solverjs.ftToIn(1));
    // The output is : 12

## Inch to All

### Inch to Kilometer => inToKm(in)
    // the inToKm() function are take inch value and return there
    // kilometer value.
    console.log(solverjs.inToKm(1));
    // The output is : 0.0000254000508001016

### Inch to Meter => inToMe(in)
    // the inToMe() function are take inch value and return there
    // meter value.
    console.log(solverjs.inToMe(1));
    // The output is : 0.025400050800101603

### Inch to Centimeter => inToCm(in)
    // the inToCm() function are take inch value and return there
    // centimeter value.
    console.log(solverjs.inToCm(1));
    // The output is : 2.54

### Inch to Millimetre => inToMm(in)
    // the inToMm() function are take inch value and return there
    // millimetre value.
    console.log(solverjs.inToMm(1));
    // The output is : 25.4

### Inch to Micrometre => inToUm(in)
    // the inToUm() function are take inch value and return there
    // micrometre value.
    console.log(solverjs.inToUm(1));
    // The output is : 25400

### Inch to Nanometre => inToNm(in)
    // the inToNm() function are take inch value and return there
    // nanometre value.
    console.log(solverjs.inToNm(1));
    // The output is : 25400000

### Inch to Yard => inToYd(in)
    // the inToYd() function are take inch value and return there
    // yard value.
    console.log(solverjs.inToYd(1));
    // The output is : 0.027777777777777776

### Inch to Foot => inToft(in)
    // the inToFt() function are take inch value and return there
    // foot value.
    console.log(solverjs.inToFt(1));
    // The output is : 0.08333333333333333


## Temperature Conversion
Temperature conversion is one of the most used methods for weather report casting the temperature conversion method gives you all the popular temperature standard conversion methods.

## Temperature Conversion Types
All popular types.
- Celsius
- Fahrenheit
- Kelvin

## Temperature Conversion Methods

### Celsius To Fahrenheit, Kelvin

#### Celsius to Fahrenheit => celToFah(c)
    // the celToFah() function are take the temperature value
    // in celsius and convert to the temperature value in fahrenheit.
    console.log(solverjs.celToFah(0));
    // The output is : 32

#### Celsius to Kelvin => celToKel(c)
    // the celToKel() function are take the temperature value
    // in celsius and convert to the temperature value in kelvin.
    console.log(solverjs.celToKel(0));
    // The output is : 273.15

#### Fahrenheit to Celsius => fahToCel(f)
    // the fahToCel() function are take the temperature value
    // in fahrenheit and convert to the temperature value in celsius.
    console.log(solverjs.fahToCel(0));
    // The output is : -17.77777777777778

#### Fahrenheit to Kelvin => fahToKel(f)
    // the fahToKel() function are take the temperature value
    // in fahrenheit and convert to the temperature value in kelvin.
    console.log(solverjs.fahToKel(0));
    // The output is : 255.3722222222222

#### Kelvin to Celsius => kelToCel(k)
    // the kelToCel() function are take the temperature value
    // in kelvin and convert to the temperature value in celsius.
    console.log(solverjs.kelToCel(0));
    // The output is : -273.15

#### Kelvin to Fahrenheit => kelToFah(k)
    // the kelToFah() function are take the temperature value
    // in kelvin and convert to the temperature value in fahrenheit.
    console.log(solverjs.kelToFah(0));
    // The output is : -459.66999999999996

## Area Conversion
Area conversion is more used if you create a site to manage land and area. If you want to make your work easier then we have written some tools that you can use

## Types Of Areas
All popular types.
- Square kilometer
- Square meter
- Square yard
- Square foot
- Square inch
- Hectare
- Acre

## Area Conversion Methods

### Square Kilometer to square meter, yard, foot, inch, Hectare, Acre

#### Square Kilometer to Square Meter => sqKmToSqMe(sqkm)
    // the sqKmToSqMe() function are take the square kilometer value
    // and convert to the square meter value.
    console.log(solverjs.sqKmToSqMe(1))
    // The output is : 1000000

#### Square Kilometer to Square Yard => sqKmToSqYd(sqkm)
    // the sqKmToSqYd() function are take the square kilometer value
    // and convert to the square yard value.
    console.log(solverjs.sqKmToSqYd(1))
    // The output is : 1196000

#### Square Kilometer to Square Foot => sqKmToSqFt(sqkm)
    // the sqKmToSqFt() function are take the square kilometer value
    // and convert to the square foot value.
    console.log(solverjs.sqKmToSqFt(1))
    // The output is : 10760000

#### Square Kilometer to Square Inch => sqKmToSqIn(sqkm)
    // the sqKmToSqIn() function are take the square kilometer value
    // and convert to the square inch value.
    console.log(solverjs.sqKmToSqIn(1))
    // The output is : 1550000000

#### Square Kilometer to Hectare => sqKmToHect(sqkm)
    // the sqKmToHect() function are take the square kilometer value
    // and convert to the hectare value.
    console.log(solverjs.sqKmToHect(1))
    // The output is : 100

#### Square Kilometer to Acre => sqKmToAcre(sqkm)
    // the sqKmToAcre() function are take the square kilometer value
    // and convert to the acre value.
    console.log(solverjs.sqKmToAcre(1))
    // The output is : 247

### Square Meter to square Kilometer, yard, foot, inch, Hectare, Acre

#### Square Meter to Square Kilometer => sqMeToSqMe(sqme)
    // the sqMeToSqMe() function are take the square meter value
    // and convert to the square meter value.
    console.log(solverjs.sqMeToSqKm(1))
    // The output is : 0.000001

#### Square Meter to Square Yard => sqMeToSqYd(sqme)
    // the sqMeToSqYd() function are take the square meter value
    // and convert to the square yard value.
    console.log(solverjs.sqMeToSqYd(1))
    // The output is : 1.196

#### Square Meter to Square Foot => sqMeToSqFt(sqme)
    // the sqMeToSqFt() function are take the square meter value
    // and convert to the square foot value.
    console.log(solverjs.sqMeToSqFt(1))
    // The output is : 10.764

#### Square Meter to Square Inch => sqMeToSqIn(sqme)
    // the sqMeToSqIn() function are take the square meter value
    // and convert to the square inch value.
    console.log(solverjs.sqMeToSqIn(1))
    // The output is : 1550

#### Square Meter to Hectare => sqMeToHect(sqme)
    // the sqMeToHect() function are take the square meter value
    // and convert to the hectare value.
    console.log(solverjs.sqMeToHect(1))
    // The output is : 0.0001

#### Square Meter to Acre => sqMeToAcre(sqme)
    // the sqMeToAcre() function are take the square meter value
    // and convert to the acre value.
    console.log(solverjs.sqMeToAcre(1))
    // The output is : 0.00024709661477637757

### Square Yard to square Kilometer, meter, foot, inch, Hectare, Acre

#### Square Yard to Square Kilometer => sqYdToSqKm(sqyd)
    // the sqYdToSqKm() function are take the square yard value
    // and convert to the square meter value.
    console.log(solverjs.sqYdToSqKm(1))
    // The output is : 8.361204013377926e-7

#### Square Yard to Square Meter => sqYdToSqMe(sqyd)
    // the sqYdToSqMe() function are take the square yard value
    // and convert to the square meter value.
    console.log(solverjs.sqYdToSqMe(1))
    // The output is : 0.8361204013377926

#### Square Yard to Square Foot => sqYdToSqFt(sqyd)
    // the sqYdToSqFt() function are take the square yard value
    // and convert to the square foot value.
    console.log(solverjs.sqYdToSqFt(1))
    // The output is : 9

#### Square Yard to Square Inch => sqYdToSqIn(sqyd)
    // the sqYdToSqIn() function are take the square yard value
    // and convert to the square inch value.
    console.log(solverjs.sqYdToSqIn(1))
    // The output is : 1296

#### Square Yard to Hectare => sqYdToHect(sqyd)
    // the sqYdToHect() function are take the square yard value
    // and convert to the hectare value.
    console.log(solverjs.sqYdToHect(1))
    // The output is : 0.00008361204013377926

#### Square Yard to Acre => sqYdToAcre(sqyd)
    // the sqYdToAcre() function are take the square yard value
    // and convert to the acre value.
    console.log(solverjs.sqYdToAcre(1))
    // The output is : 0.00020661157024793388

### Square Foot to square Kilometer, meter, yard, inch, Hectare, Acre

#### Square Foot to Square Kilometer => sqFtToSqKm(sqyd)
    // the sqFtToSqKm() function are take the square foot value
    // and convert to the square kilometer value.
    console.log(solverjs.sqFtToSqKm(1))
    // The output is : 9.29368029739777e-8

#### Square Foot to Square Meter => sqFtToSqMe(sqyd)
    // the sqFtToSqMe() function are take the square foot value
    // and convert to the square meter value.
    console.log(solverjs.sqFtToSqMe(1))
    // The output is : 0.0929022668153103

#### Square Foot to Square Yard => sqFtToSqYd(sqyd)
    // the sqFtToSqYd() function are take the square foot value
    // and convert to the square yard value.
    console.log(solverjs.sqFtToSqYd(1))
    // The output is : 0.1111111111111111

#### Square Foot to Square Inch => sqFtToSqIn(sqyd)
    // the sqFtToSqIn() function are take the square foot value
    // and convert to the square inch value.
    console.log(solverjs.sqFtToSqIn(1))
    // The output is : 144

#### Square Foot to Hectare => sqFtToHect(sqyd)
    // the sqFtToHect() function are take the square foot value
    // and convert to the hectare value.
    console.log(solverjs.sqFtToHect(1))
    // The output is : 0.000009290312990644655

#### Square Foot to Acre => sqFtToAcre(sqyd)
    // the sqFtToAcre() function are take the square foot value
    // and convert to the acre value.
    console.log(solverjs.sqFtToAcre(1))
    // The output is : 0.00002295684113865932

### Square Inch to square Kilometer, meter, yard, foot, Hectare, Acre

#### Square Inch to Square Kilometer => sqInToSqKm(sqyd)
    // the sqInToSqKm() function are take the square inch value
    // and convert to the square kilometer value.
    console.log(solverjs.sqInToSqKm(1))
    // The output is : 6.451612903225806e-10

#### Square Inch to Square Meter => sqInToSqMe(sqyd)
    // the sqInToSqMe() function are take the square inch value
    // and convert to the square meter value.
    console.log(solverjs.sqInToSqMe(1))
    // The output is : 0.0006451612903225806

#### Square Inch to Square Yard => sqInToSqYd(sqyd)
    // the sqInToSqYd() function are take the square inch value
    // and convert to the square yard value.
    console.log(solverjs.sqInToSqYd(1))
    // The output is : 0.0007716049382716049

#### Square Inch to Square Foot => sqInToSqFt(sqyd)
    // the sqInToSqFt() function are take the square inch value
    // and convert to the square foot value.
    console.log(solverjs.sqInToSqFt(1))
    // The output is : 0.006944444444444444

#### Square Inch to Hectare => sqInToHect(sqyd)
    // the sqInToHect() function are take the square inch value
    // and convert to the hectare value.
    console.log(solverjs.sqInToHect(1))
    // The output is : 6.451612903225807e-8

#### Square Inch to Acre => sqInToAcre(sqyd)
    // the sqInToAcre() function are take the square inch value
    // and convert to the acre value.
    console.log(solverjs.sqInToAcre(1))
    // The output is : 1.5941335883947074e-7

### Hectare to square Kilometer, meter, yard, foot, inch, Acre

#### Hectare to Square Kilometer => hectToSqKm(hect)
    // the hectToSqKm() function are take the hectare value
    // and convert to the square kilometer value.
    console.log(solverjs.hectToSqKm(1))
    // The output is : 0.01

#### Hectare to Square Meter => hectToSqMe(hect)
    // the hectToSqMe() function are take the hectare value
    // and convert to the square meter value.
    console.log(solverjs.hectToSqMe(1))
    // The output is : 10000

#### Hectare to Square Yard => hectToSqYd(hect)
    // the hectToSqYd() function are take the hectare value
    // and convert to the square yard value.
    console.log(solverjs.hectToSqYd(1))
    // The output is : 11960

#### Hectare to Square Foot => hectToSqFt(hect)
    // the hectToSqFt() function are take the hectare value
    // and convert to the square foot value.
    console.log(solverjs.hectToSqFt(1))
    // The output is : 107639

#### Hectare to Square Inch => hectToSqIn(hect)
    // the hectToSqIn() function are take the hectare value
    // and convert to the square inch value.
    console.log(solverjs.hectToSqIn(1))
    // The output is : 15500000

#### Hectare to Acre => hectToAcre(hect)
    // the hectToAcre() function are take the hectare value
    // and convert to the acre value.
    console.log(solverjs.hectToAcre(1))
    // The output is : 2.471

### Acre to square Kilometer, meter, yard, foot, inch, hectare

#### Acre to Square Kilometer => acreToSqKm(acre)
    // the acreToSqKm() function are take the acre value
    // and convert to the square kilometer value.
    console.log(solverjs.acreToSqKm(1))
    // The output is : 0.004048582995951417

#### Acre to Square Meter => acreToSqMe(acre)
    // the acreToSqMe() function are take the acre value
    // and convert to the square meter value.
    console.log(solverjs.acreToSqMe(1))
    // The output is : 4047

#### Acre to Square Yard => acreToSqYd(acre)
    // the acreToSqYd() function are take the acre value
    // and convert to the square yard value.
    console.log(solverjs.acreToSqYd(1))
    // The output is : 4840

#### Acre to Square Foot => acreToSqFt(acre)
    // the acreToSqFt() function are take the acre value
    // and convert to the square foot value.
    console.log(solverjs.acreToSqFt(1))
    // The output is : 43560

#### Acre to Square Inch => acreToSqIn(acre)
    // the acreToSqIn() function are take the acre value
    // and convert to the square inch value.
    console.log(solverjs.acreToSqIn(1))
    // The output is : 6273000

#### Acre to Hectare => acreToHect(acre)
    // the acreToHect() function are take the acre value
    // and convert to the hectare value.
    console.log(solverjs.acreToHect(1))
    // The output is : 0.4046944556859571

## Util's Methods
    // The utility methods are very helpful in many small projects.

### All Util's Methods
Defined method.
- dateToDay
- dobToAge
- keywordExtractor
- contatinSpecial
- isKeywordExists
- checkCamelCase
- checkFlatCase
- checkKebabCase
- checkPascalCase
- checkSnakeCase
- URLShortener
- railwayTimeConversion
- sort
- ext

#### Date to Week-day => dateToDay('dd/mm/yyyy')
    // The dateToDay method takes a string date and returns the 
    // specific week-day.
    console.log(solverjs.dateToDay('01/01/2000'));
    // The output is : Saturday

#### Date of birth to Age => dobToAge('dd/mm/yyyy')
    // The dobToAge() method takes a string date and returns 
    // data delta along with the current date in a string.
    console.log(solverjs.dobToAge('01/01/2000'));
    // The output is : 21 years 5 months and 29 days

#### String To keyword => keywordExtractor(str)
    // The keywordExtractor() method is take stirng and
    // return the keyword array.
    console.log(solverjs.keywordExtractor('This is a special stirng with 5news char.'));
    // The output is : [ 'special', 'stirng' ]

#### Keyword Finder => isKeywordExists(str, keyword)
    // The isKeywordExists() method is take two string 
    // argument find second to first string.
    console.log(solverjs.isKeywordExists('This is a string', 'is');
    // The output is : true

#### Check String Containe Special Later => contatinSpecial
    // The contatinSpecial() method is take a string
    // and return true, if the string containe special later,
    // else return false.
    console.log(solverjs.contatinSpecial("My $Name is "));
    // The output is : true

#### Check CheckCamelCase => checkCamelCase
    // CheckCamelCase method checks the given string is in camelCase or not.
    console.log(solverjs.checkCamelCase("myVar"));
    // The output is : true

#### Check CheckFlatCase => checkFlatCase 
    // CheckFlatCase method checks the given string is in flatcase or not.
    console.log(solverjs.checkFlatCase("myvar"));
    // The output is : true

#### Check CheckKebabCase => checkKebabCase
    // CheckKebabCase method checks the given string is in kebab-case or not.
    console.log(solverjs.checkKebabCase("my-var"));
    // The output is : true

#### Check CheckPascalCase => checkPascalCase
    // CheckPascalCase method checks the given string is in PascalCase or not.
    console.log(solverjs.checkPascalCase("MyVar"));
    // The output is : true

#### Check CheckSnakeCase => checkSnakeCase
    // CheckSnakeCase method checks the given string is in snake_case or not.
    console.log(solverjs.checkSnakeCase("my_var"));
    // The output is : true

#### short url => URLShortener
    // URLShortener is a method sort your interger value in a string value.
    console.log(solverjs.URLShortener(12345));
    // The output is : dnh

### time conversion => railwayTimeConversion
    // railwayTimeConversion method takes a normalized time and convert railway time.
    console.log(solverjs.railwayTimeConversion('07:05:45PM'))
    // The output is : 19:05:45

### sort
The sort method sorts the given array.

    console.log(solverjs.sort([5, 6, 2, 3]));
    // The output is : [2, 3, 5, 6]

### ext
The ext method returns the extension of the given file name.

    console.log(solverjs.ext("mypic.jpg"));
    // The output is : .jpg

## Matrix Operations
    // The matrix mathod are highly optimized.

### All Matrix Methods
Defined method.
- matAdd
- matSub

#### Addition of the matrix => matAdd([[1, 2], [4, 5]], [[6, 7], [8, 9]])
    // The matAdd() method are take two matrix and perform
    // addition operation.
    console.log(solverjs.matAdd([[1, 2], [4, 5]], [[6, 7], [8, 9]]))
    // The output is : [ [ 7, 9 ], [ 12, 14 ] ]

#### Subtraction of the matrix => matSub([[1, 2], [4, 5]], [[6, 7], [8, 9]])
    // The matSub method are take two matrix and perform
    // subtraction operation.
    console.log(solverjs.matSub([[1, 2], [4, 5]], [[6, 7], [8, 9]]))
    // The output is : [ [ -5, -5 ], [ -4, -4 ] ]

#### Spiral print of a matrix => matSpiralPrint([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    // The matSpiralPrint print the matrix in spiral form.
    console.log(solverjs.matSpiralPrint([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
    // The output is : [1, 2, 3, 6, 9, 8, 7, 4, 5]

## Digital Storage Conversion
Digital storage conversion is very useful if you are working with some internal architecture tool or system configuration tools that provide lots of flexibility to work with memory size.

### Digital Storage Types
The Digital Storage has many types but in this time we see only some very frequently used.
- Bit(bit)
- Byte(byte)
- KiloByte(kb)
- MegaByte(mb)
- Gigabyte(gb)
- TeraByte(tb)
- PetaByte(pb)

### Digital Storage Conversion Methods

#### Bit To Byte => bitToByte(bit)

1 bit = 0.125 byte

The bitToByte method takes a digital storage value in bits   
and returns the corresponding digital storage value converted to Bytes.

    // console.log(solverjs.bitToByte(1))
    // The output is : 0.125

#### Bit to Kilobyte => bitToKb(bit)

1 bit=0.000125 kB

 The bitToKb method takes a digital storage value in bits   
 and returns the corresponding digital storage value converted to Kilobytes.

    //console.log(solverjs.bitToKb(1))
    // The output is : 0.000125

#### Bit to Megabyte => bitToMb(bit)

1 bit=0.000000125 MB

The bitToMb method takes a digital storage value in bits   
and returns the corresponding digital storage value converted to Megabytes.

    console.log(solverjs.bitToMb(1))
    // The output is : 1.25e-7

#### Bit to Gigabyte => bitToGb(bit)

1 bit=0.000000000125 GB

The bitToGb method takes a digital storage value in bits   
and returns the corresponding digital storage value converted to Gigabytes.

    //console.log(solverjs.bitToGb(1))
    // The output is : 1.25e-10

#### Bit to Terabyte => bitToTb(bit)

 1 bit=0.000000000000125 TB

The bitToTb method takes a digital storage value in bits   
and returns the corresponding digital storage value converted to Terabytes.

    //console.log(solverjs.bitToTb(1))
    // The output is : 1.25e-13


#### Bit to Petabyte => bitToPb(bit)

 1 bit=0.000000000000000125 PB

The bitToPb method takes a digital storage value in bits   
and returns the corresponding digital storage value converted to Petabytes.

    //console.log(solverjs.bitToPb(1))
    // The output is : 1.25e-16

#### Byte To Bit => byteToBit(byte)

1 byte=8 bit

The byteToBit method takes a digital storage value in Bytes   
and returns the corresponding digital storage value converted to bits.

    console.log(solverjs.byteToBit(1))
    // The output is : 8

#### Byte to Kilobyte => byteToKb(byte)

1 byte=0.001 kB

The byteToKb method takes a digital storage value in Bytes   
and returns the corresponding digital storage value converted to Kilobytes.

    console.log(solverjs.byteToKb(1))
    // The output is : 0.001

#### Byte to Megabyte => byteToMb(byte)

1 byte=0.000001 MB

The byteToMb method takes a digital storage value in Bytes   
and returns the corresponding digital storage value converted to Megabytes.

    console.log(solverjs.byteToMb(1))
    // The output is : 0.000001

#### Byte to Gigabyte => byteToGb(byte)

1 byte=0.0000000010 GB

The byteToGb method takes a digital storage value in Bytes   
and returns the corresponding digital storage value converted to Gigabytes.

    console.log(solverjs.byteToGb(1))
    // The output is : 1e-9

#### Byte to Terabyte => byteToTb(byte)


1 byte=0.0000000000010 TB

The byteToTb method takes a digital storage value in Bytes   
and returns the corresponding digital storage value converted to Terabytes.

    console.log(solverjs.byteToTb(1))
    // The output is : 1e-12

#### Byte to Petabyte => byteToPb(byte)

1 byte=0.0000000000000010 PB

The byteToPb method takes a digital storage value in Bytes   
and returns the corresponding digital storage value converted to Petabytes.

    console.log(solverjs.byteToPb(1))
    // The output is : 1e-15

#### Kilobyte To Bit => kbToBit(kB)

1 kB =8000 bit

The kbToBit method takes a digital storage value in Kilobytes   
and returns the corresponding digital storage value converted to bits.

     console.log(solverjs.kbToBit(1))
    // The output is : 8000

#### Kilobyte to Byte => kbToByte(kB)

1 kB=1000 byte

The kbToByte method takes a digital storage value in Kilobytes   
and returns the corresponding digital storage value converted to Bytes.

    console.log(solverjs.kbToByte(1))
    // The output is : 1000

#### Kilobyte to Megabyte => kbToMb(kB)

1 kB=0.001 MB

The kbToMb method takes a digital storage value in Kilobytes   
and returns the corresponding digital storage value converted to Megabytes.

    console.log(solverjs.kbToMb(1))
    // The output is : 0.001

#### Kilobyte to Gigabyte => kbToGb(kB)

1 kB=0.000001 GB

 The kbToGb method takes a digital storage value in Kilobytes   
 and returns the corresponding digital storage value converted to Gigabytes.

    console.log(solverjs.kbToGb(1))
    // The output is : 0.000001

#### Kilobyte to Terabyte => kbToTb(kB)

1 kB=0.0000000010 TB

 The kbToTb method takes a digital storage value in Kilobytes   
 and returns the corresponding digital storage value converted to Terabytes.

    console.log(solverjs.kbToTb(1))
    // The output is : 1e-9

#### Kilobyte to Petabyte => kbToPb(kB)

1 kB=0.0000000000010 PB

 The kbToPb method takes a digital storage value in Kilobytes   
 and returns the corresponding digital storage value converted to Petabytes.

    console.log(solverjs.kbToPb(1))
    // The output is : 1e-12

#### Megabyte To Bit => mbToBit(MB)

1 MB=8000000 bit

The mbToBit method takes a digital storage value in Megabytes   
and returns the corresponding digital storage value converted to bits.

    console.log(solverjs.mbToBit(1))
    // The output is : 8000000

#### Megabyte to Byte => mbToByte(MB)

1 MB=1000000 byte

 The mbToByte method takes a digital storage value in Megabytes   
 and returns the corresponding digital storage value converted to Bytes.

    console.log(solverjs.mbToByte(1))
    // The output is : 1000000

#### Megabyte to Kilobyte => mbToKb(MB)

1 MB=1000 kB

The mbToKb method takes a digital storage value in Megabytes   
and returns the corresponding digital storage value converted to Kilobytes.

    console.log(solverjs.mbToKb(1))
    // The output is : 1000

#### Megabyte to Gigabyte => mbToGb(MB)

1 MB=0.001 GB

The mbToGb method takes a digital storage value in Megabytes   
and returns the corresponding digital storage value converted to Gigabytes.

    console.log(solverjs.mbToGb(1))
    // The output is : 0.001

#### Megabyte to Terabyte => mbToTb(MB)


1 MB=0.000001 TB

 The mbToTb method takes a digital storage value in Megabytes   
 and returns the corresponding digital storage value converted to Terabytes.

    console.log(solverjs.mbToTb(1))
    // The output is : 0.000001

#### Megabyte to Petabyte => mbToPb(MB)

1 MB=0.0000000010 PB

The mbToPb method takes a digital storage value in Megabytes   
and returns the corresponding digital storage value converted to Petabytes.

    console.log(solverjs.mbToPb(1))
    // The output is : 1e-9

#### Gigabyte To Bit => gbToBit(GB)

 1 GB= 8000000000 bit

 The gbToBit method takes a digital storage value in Gigabytes   
 and returns the corresponding digital storage value converted to bits.

    console.log(solverjs.gbToBit(1))
    // The output is : 8000000000

#### Gigabyte to Byte => gbToByte(GB)

1 GB=1000000 byte

The gbToByte method takes a digital storage value in Gigabytes   
and returns the corresponding digital storage value converted to Byes.

    console.log(solverjs.gbToByte(1))
    // The output is : 1000000000

#### Gigabyte to Kilobyte => gbToKb(GB)

1 GB=1000000 kB

The gbToKb method takes a digital storage value in Gigabytes   
and returns the corresponding digital storage value converted to Kilobytes.

    console.log(solverjs.gbToKb(1))
    // The output is : 1000000

#### Gigabyte to Megabyte => gbToMb(GB)

1 GB=1000 MB

The gbToMb method takes a digital storage value in Gigabytes   
and returns the corresponding digital storage value converted to Megabytes.

    console.log(solverjs.gbToMb(1))
    // The output is : 1000

#### Gigabyte to Terabyte => gbToTb(GB)

1 GB=0.001 TB

The gbToTb method takes a digital storage value in Gigabytes   
and returns the corresponding digital storage value converted to Terabytes.

    console.log(solverjs.gbToTb(1))
    // The output is :0.001

#### Gigabyte to Petabyte => gbToPb(GB)

1 GB=0.000001 PB

The gbToPb method takes a digital storage value in Gigabytes   
and returns the corresponding digital storage value converted to Petabytes.

    console.log(solverjs.gbToPb(1))
    // The output is : 0.000001

#### Terabyte To Bit => tbToBit(TB)

1 TB=8000000000000 bit

The tbToBit method takes a digital storage value in Terabytes   
and returns the corresponding digital storage value converted to bits.

    console.log(solverjs.tbToBit(1))
    // The output is : 8000000000000

#### Terabyte to Byte => tbToByte(TB)

1 TB=1000000000000 byte

The tbToByte method takes a digital storage value in Terabytes   
and returns the corresponding digital storage value converted to Bytes.

    console.log(solverjs.tbToByte(1))
    // The output is : 1000000000000

#### Terabyte to Kilobyte => tbToKb(TB)

1 TB=1000000000 kB

The tbToKb method takes a digital storage value in Terabytes   
and returns the corresponding digital storage value converted to Kilobytes.

    console.log(solverjs.tbToKb(1))
    // The output is : 1000000000

#### Terabyte to Megabyte => tbToMb(TB)

1 TB=1000000 MB

The tbToMb method takes a digital storage value in Terabytes   
and returns the corresponding digital storage value converted to Megabytes.

    console.log(solverjs.tbToMb(1))
    // The output is : 1000000

#### Terabyte to Gigabyte => tbToTb(TB)

1 TB=1000 GB

The tbToTb method takes a digital storage value in Terabytes   
and returns the corresponding digital storage value converted to Gigabytes.

    console.log(solverjs.tbToTb(1))
    // The output is : 1000

#### Terabyte to Petabyte => tbToPb(TB)

1 TB=0.001 PB

The tbToPb method takes a digital storage value in Terabytes   
and returns the corresponding digital storage value converted to Petabytes.

    console.log(solverjs.tbToPb(1))
    // The output is : 0.001

#### Petabyte to Bit => pbToBit(PB)

 1 PB=8000000000000000 bit

 The pbToBit method takes a digital storage value in Petabytes   
 and returns the corresponding digital storage value converted to bits.

    console.log(solverjs.pbToBit(1))
    // The output is : 8000000000000000

#### Petabyte to Byte => pbToByte(PB)

1 PB=1000000000000000 byte

 The pbToByte method takes a digital storage value in Petabytes   
 and returns the corresponding digital storage value converted to Bytes.

    console.log(solverjs.pbToByte(1))
    // The output is : 1000000000000000

#### Petabyte to Kilobyte => pbToKb(PB)

1 PB=1000000000000 kB

 The pbToKb method takes a digital storage value in Petabytes   
 and returns the corresponding digital storage value converted to Kilobytes.

    console.log(solverjs.pbToKb(1))
    // The output is : 1000000000000

#### Petabyte to Megabyte => pbToMb(PB)

1 PB=1000000000 MB

The pbToMb method takes a digital storage value in Petabytes   
and returns the corresponding digital storage value converted to Megabytes.

    console.log(solverjs.pbToMb(1))
    // The output is : 1000000000

#### Petabyte to Gigabyte => pbToGb(PB)

1 PB=1000000 GB

The pbToGb method takes a digital storage value in Petabytes   
and returns the corresponding digital storage value converted to Gigabytes.

    console.log(solverjs.pbToGb(1))
    // The output is : 1000000

#### Petabyte to Terabyte => pbToTb(PB)

 1 PB=1000 TB

 The pbToTb method takes a digital storage value in Petabytes   
 and returns the corresponding digital storage value converted to Terabytes.

    console.log(solverjs.pbToTb(1))
    // The output is : 1000


## Time Conversion

Sometimes we work with time conversion, at that time we are very confused in calculating the time so we have created a very efficient way to do it.
The SI base unit for time is the second. 1 second is equal to 1000000000 nanoseconds, or 3.1688738506811E-8 years.

### Times Units
The Time units has many types but in this we see only some very frequently used.
- Nanosecond(ns)

### Time Conversion Methods

#### Nanosecond to Microsecond => nsToUs(ns)

The method converts nanoseconds to Microseconds

The nsToUs method takes a time in nanoseconds and returns the corresponding amount of time in Microseconds.

    console.log(solverjs.nsToUs(1))
    // The output is : 0.001

#### Nanosecond to Millisecond => nsToMs(ns)

The method converts nanoseconds to Milliseconds

The nsToMs method takes a time in nanoseconds and returns the corresponding amount of time in Milliseconds.


    console.log(solverjs.nsToMs(1))
    // The output is : 0.000001

#### Nanosecond to Second => nsToSc(ns)

The method converts nanoseconds to seconds

The nsToSc method takes a time in nanoseconds and returns the corresponding amount of time in seconds.

    console.log(solverjs.nsToSc(1))
    // The output is : 1e-9

#### Nanosecond to Minute => nsToMi(ns)

The method converts nanoseconds to minutes

The nsToMi method takes a time in nanoseconds and returns the corresponding amount of time in minutes.

    console.log(solverjs.nsToMi(1))
    // The output is : 1.6666666666666667e-11

#### Nanosecond to Hour => nsToHr(ns)

The method converts nanoseconds to hours

The nsToHr method takes a time in nanoseconds and returns the corresponding amount of time in hours.


    console.log(solverjs.nsToHr(1))
    // The output is : 2.777777777777778e-13

#### Nanosecond to Day => nsToDd(ns)

The method converts nanoseconds to days

The nsToDd method takes a time in nanoseconds and returns the corresponding amount of time in days.

    console.log(solverjs.nsToDd(1))
    // The output is : 1.1574074074074074e-14

#### Nanosecond to Week => nsToWk(ns)

The method converts nanoseconds to weeks

The nsToWk method takes a time in nanoseconds and returns the corresponding amount of time in weeks.

    console.log(solverjs.nsToWk(1))
    // The output is : 1.6534391534391534e-15

#### Nanosecond to Month => nsToMm(ns)

The method converts nanoseconds to months

The nsToMm method takes a time in nanoseconds and returns the corresponding amount of time in months.

     console.log(solverjs.nsToMm(1))
    // The output is : 3.8051750380517503e-16

#### Nanosecond to Year => nsToYy(ns)

The method converts nanoseconds to years

The nsToYy method takes a time in nanoseconds and returns the corresponding amount of time in years.


    console.log(solverjs.nsToYy(1))
    // The output is : 3.170577045022194e-17
