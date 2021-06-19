[![Express Logo](https://localprofiler.ml/uploads/file_1622214512395.png)](https://www.npmjs.com/package/solverjs/)


  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]
  [![](https://tokei.rs/b1/github/suryapratapsinghsuryavanshi/solverjs)](https://github.com/suryapratapsinghsuryavanshi/solverjs)
  
[npm-image]: https://img.shields.io/badge/npm-v1.5.10-blue
[npm-url]: https://www.npmjs.com/package/solverjs
[downloads-image]: https://img.shields.io/badge/downloads-200%2FWeeks-green
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

## Usage In NodeJs
    // Load the full solverjs.
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

### isKishnamurthyNumber
    // The Krshna Murthy Number is a number sum of all factorial digit
    // is equal to the given number.
    console.log(solverjs.isKishnamurthyNumber(145));
    // The output is : true

### avg
    // Average - is a term mid of the all given data point.
    console.log(solverjs.avg([5, 6, 8, 9, 3]));
    // The output is : 6.2

### mod 
    // mod is define the absulute value whout sign.
    console.log(solverjs.mod(-145));
    // The output is : 145

### wordCount
    // Word Counter is count he word of the given stirng.
    // provide seperator.
    console.log(solverjs.wordCount('alsdjf lasjfd lsjf', ' '));
    // The output is : 3

### isLeap
    // The isLeap year check the given year is leap or not.
    console.log(solverjs.isLeap(2021));
    // The output is : false

### lcm
    // Find the lcm of two numbers.
    console.log(solverjs.lcm(12, 3));
    // The output is : 12

### hcf
    // Find the hcf of two numbers.
    console.log(solverjs.hcf(72, 23));
    // The output is : 1

### ascii
    // Find the ascii value of the given charector.
    console.log(solverjs.ascii('A'));
    // The output is : 65

### reverse
    // The method reverse the given stirn g.
    console.log(solverjs.reverse('abcde'));
    // The output is : edcba

### isPalindrome
    // The isPalindrome check the given stirn is
    // palindrome or not.
    console.log(solverjs.isPalindrome('abcba'));
    // The output is : true

### permutation
    // The permutation return the all combination of a string.
    console.log(solverjs.permutation('abc'));
    // The output is : [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

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

