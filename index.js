let info = () => {
    console.log("This package is a combination of many useful functions.");
    console.log({
        "Find GCD": 'getGcd(arg1, arg2)',
        // "Find LCM": 'getLcm(arg1, arg2)',
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
        "Convert the Decimal to Binary number system.": 'decToBin(hex)'
    });
}

let getGcd = (arg1, arg2) => {
    let less = arg1 > arg2 ? arg2 : arg1;
    for(less; less>=2; less--){
        if((arg1 % less === 0) && (arg2 % less === 0)) return(less);
    }
    return(less);
}

let getFib = (arg_n) => {
    if(arg_n == 0 || arg_n == 1) return arg_n;
    return getFib(arg_n-1) + getFib(arg_n-2); 
}

let printFib = (n) => {
    let num1 = 1;
    let num2 = 0;
    let num3 = 0;
    let st = "";
    for(let i=0;i<n;i++){
        num3 = num1 + num2;
        st = st + num3 + ' ';
        num1 = num2;
        num2 = num3;
    }
    return("Fibonacci Series : "+st);
}

let sumAllDigit = (n) => {
    let sum = 0;
    n.toString().split('').map(x => sum+=parseInt(x))
    return(sum)
}

let reverseNumber = (n) => {
    return parseInt(n.toString().split('').reverse().join(''))
}

let isArmstrong = (n) => {
    let sum = 0;
    n.toString().split('').map(x => sum += parseInt(x) * parseInt(x) * parseInt(x))
    return n === sum
}

let sumOfN = (n) => {
    return n == 1 ? n : n + sumOfN(n-1);
}

let fac = (n) => {
    return n == 1 ? n : n * fac(n-1);
}

let pow = (x, y) => {
    return y == 0 ? 1 : x * pow(x, y-1);
}

let len = (x) => {
    return x.toString().length;
}

let isPrime = (x) => {
    if(x == 1) return false;
    for(let i=x-1; i>=2; i--)
        if(x % i == 0)
            return false;
    return true;

}

let isCoPrime = (x, y) => {
    return getGcd(x, y) == 1;
}

let Base = (number, base) => {
    value = 0
    p = len(number) - 1;
    for(let i=0;i<len(number);i++){
        value += parseInt(number.toString()[i]) * pow(base, p);
        p--;
    }
    return value;
}

let DecToBase = (number, base) => {
    value = ''
    while(number >= base){
        value += number % base;
        number = Math.floor(number / base)
    }
    value += number;
    return parseInt(reverseNumber(value));
}

let hexToDec = (hax) => Base(hax, 16);
let hexToOct = (hex) => DecToBase(Base(hex, 16), 8);
let hexToBin = (hex) => DecToBase(Base(hex, 16), 2);

let decToHex = (dec) => DecToBase(dec, 16);
let decToOct = (dec) => DecToBase(dec, 8);
let decToBin = (dec) => DecToBase(dec, 2);

module.exports = {
    info,
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
    hexToDec,
    hexToOct,
    hexToBin,
    decToHex,
    decToOct,
    decToBin
}