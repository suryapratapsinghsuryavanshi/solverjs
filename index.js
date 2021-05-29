// info function for giveing information about the methods.
let info = () => {
    console.log("This package is a combination of many useful functions.");
    console.log({
        "Find GCD": 'getGcd(arg1, arg2)',
        "Find Fibonnaci": 'getFib(arg_n)',
        "Print Fibonacci": 'printFib(n)',
        "Sum Of All Digit": 'sumAllDigit(n)',
        "Reverse Number": 'reverseNumber',
        "Check Armstrong number": 'isArmstrong(n)',
        "Sum of n numbers": 'sumOfN(n)',
        "Factorial": 'fac(n)',
        "Power x^y": 'pow(x, y)',
        "Lenght of string or numbers": 'len(str/number)',
        "Check given number prime or not": 'isPrime(n)',
        "Check the both number co-prime or not.": 'isCoPrime(x, y)',
        "Convert the Hexadecimal to Decimal number system.": 'hexToDec(hex)',
        "Convert the Hexadecimal to Octal number system.": 'hexToOct(hex)',
        "Convert the Hexadecimal to Binary number system.": 'hexToBin(hex)',
        "Convert the Decimal to Hexadecimal number system.": 'decToHex(hex)',
        "Convert the Decimal to Octal number system.": 'decToOct(hex)',
        "Convert the Decimal to Binary number system.": 'decToBin(hex)',
        "Convert the Octal to Hexadecimal number system.": 'octToHex(oct)',
        "Convert the Octal to Decimal number system.": 'octToDec(oct)',
        "Convert the Octal to Binary number system.": 'octToBin(oct)',
        "Convert the Binary to Hexadecimal number system.": 'binToHex(bin)',
        "Convert the Binary to Decimal number system.": 'binToDec(bin)',
        "Convert the Binary to Octal number system.": 'binToOct(bin)',
        // kilometer
        "The kmToMe function convert kilometer to meter.": 'kmToMe(km)',
        "The kmToCm function convert kilometer to centimeter.": 'kmToCm(km)',
        "The kmToMm function convert kilometer to millimeter.": 'kmToMm(km)',
        "The kmToUm function convert kilometer to micrometer.": 'kmToUm(km)',
        "The kmToNm function convert kilometer to nanometer.": 'kmToNm(km)',
        "The kmToYd function convert kilometer to yard.": 'kmToYd(km)',
        "The kmToFt function convert kilometer to foot.": 'kmToFt(km)',
        "The kmToIn function convert kilometer to inch.": 'kmToIn(km)',
        // meter
        "The meToKm function convert meter to kilometer.": 'meToKm(me)',
        "The meToCm function convert meter to centimeter.": 'meToCm(me)',
        "The meToMm function convert meter to millimeter.": 'meToMm(me)',
        "The meToUm function convert meter to micrometer.": 'meToUm(me)',
        "The meToNm function convert meter to nanometer.": 'meToNm(me)',
        "The meToYd function convert meter to yard.": 'meToYd(me)',
        "The meToFt function convert meter to foot.": 'meToFt(me)',
        "The meToIn function convert meter to inch.": 'meToIn(me)',
        // centimetre
        "The cmToKm function convert centimeter to kilometer.": 'cmToKm(cm)',
        "The cmToMe function convert centimeter to meter.": 'cmToMe(cm)',
        "The cmToMm function convert centimeter to millimeter.": 'cmToMm(cm)',
        "The cmToUm function convert centimeter to micrometer.": 'cmToUm(cm)',
        "The cmToNm function convert centimeter to nanometer.": 'cmToNm(cm)',
        "The cmToYd function convert centimeter to yard.": 'cmToYd(cm)',
        "The cmToFt function convert centimeter to foot.": 'cmToFt(cm)',
        "The cmToIn function convert centimeter to inch.": 'cmToIn(cm)',
        // centimetre
        "The mmToKm function convert millimeter to kilometer.": 'mmToKm(mm)',
        "The mmToMe function convert millimeter to meter.": 'mmToMe(mm)',
        "The mmToCm function convert millimeter to centimeter.": 'mmToCm(mm)',
        "The mmToUm function convert millimeter to micrometer.": 'mmToUm(mm)',
        "The mmToNm function convert millimeter to nanometer.": 'mmToNm(mm)',
        "The mmToYd function convert millimeter to yard.": 'mmToYd(mm)',
        "The mmToFt function convert millimeter to foot.": 'mmToFt(mm)',
        "The mmToIn function convert millimeter to inch.": 'mmToIn(mm)',
    });
}

// maths methods.
const {
    getFib,
    getGcd,
    printFib,
    sumAllDigit,
    reverseNumber,
    isArmstrong,
    sumOfN,
    fac,
    pow,
    len,
    isPrime,
    isCoPrime
} = require('./src/math/math');

// numbers systems.
const {
    hexToDec,
    hexToOct,
    hexToBin,
    decToHex,
    decToOct,
    decToBin,
    octToHex,
    octToDec,
    octToBin,
    binToHex,
    binToDec,
    binToOct
} = require('./src/number/number');

// length conversion
const {
    // km
    kmToMe,
    kmToCm,
    kmToMm,
    kmToUm,
    kmToNm,
    kmToYd,
    kmToFt,
    kmToIn,
    // me
    meToKm,
    meToCm,
    meToMm,
    meToUm,
    meToNm,
    meToYd,
    meToFt,
    meToIn,
    // cm to all
    cmToKm,
    cmToMe,
    cmToMm,
    cmToUm,
    cmToNm,
    cmToYd,
    cmToFt,
    cmToIn,
    // mm to all
    mmToKm,
    mmToMe,
    mmToCm,
    mmToUm,
    mmToNm,
    mmToYd,
    mmToFt,
    mmToIn
} = require('./src/units/length/length');


// exports the all functions.
module.exports = {
    info,
    // maths.
    getFib,
    getGcd,
    printFib,
    sumAllDigit,
    reverseNumber,
    isArmstrong,
    sumOfN,
    fac,
    pow,
    len,
    isPrime,
    isCoPrime,
    // numbers system.
    hexToDec,
    hexToOct,
    hexToBin,
    decToHex,
    decToOct,
    decToBin,
    octToHex,
    octToDec,
    octToBin,
    binToHex,
    binToDec,
    binToOct,
    // length conversion
    // km
    kmToMe,
    kmToCm,
    kmToMm,
    kmToUm,
    kmToNm,
    kmToYd,
    kmToFt,
    kmToIn,
    // me
    meToKm,
    meToCm,
    meToMm,
    meToUm,
    meToNm,
    meToYd,
    meToFt,
    meToIn,
    // cm
    cmToKm,
    cmToMe,
    cmToMm,
    cmToUm,
    cmToNm,
    cmToYd,
    cmToFt,
    cmToIn,
    // mm
    mmToKm,
    mmToMe,
    mmToCm,
    mmToUm,
    mmToNm,
    mmToYd,
    mmToFt,
    mmToIn
}