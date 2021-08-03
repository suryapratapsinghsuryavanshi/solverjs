// getGcd return the gcd of two numbers.
let getGcd = (arg1, arg2) => {
    let less = arg1 > arg2 ? arg2 : arg1;
    for(less; less>=2; less--){
        if((arg1 % less === 0) && (arg2 % less === 0)) return(less);
    }
    return(less);
}

// getFib return the n'th fibonacci number.
let getFib = (arg_n) => {
    if(arg_n == 0 || arg_n == 1) return arg_n;
    return getFib(arg_n-1) + getFib(arg_n-2); 
}

// printFib return the fibonacci series string up to n.
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

// sumAllDigit return the addition of all the digits in a given number.
let sumAllDigit = (n) => {
    let sum = 0;
    n.toString().split('').map(x => sum+=parseInt(x))
    return(sum)
}

// reverseNumber return the reversed value of the given number.
let reverseNumber = (n) => {
    return parseInt(n.toString().split('').reverse().join(''))
}

// isArmstrong return the boolean in respenct of the are armstorng or not.
let isArmstrong = (n) => {
    let sum = 0;
    n.toString().split('').map(x => sum += parseInt(x) * parseInt(x) * parseInt(x))
    return n === sum
}

// sumOfN return the sum of n natural numbers.
let sumOfN = (n) => {
    return n == 1 ? n : n + sumOfN(n-1);
}

// fac return the factorial of n.
let fac = (n) => {
    return n == 1 ? n : n * fac(n-1);
}

// the pow function return the power of x^y.
let pow = (x, y) => {
    return y == 0 ? 1 : x * pow(x, y-1);
}

// the len function return the length of number or string.
let len = (x) => {
    return x.toString().length;
}

// the isPrime return boolean in respect of the given number prime or not.
let isPrime = (x) => {
    if(x == 1) return false;
    for(let i=x-1; i>=2; i--)
        if(x % i == 0)
            return false;
    return true;

}

// isCoPrime function return the boolean in respect of the given number is co-prime or not.
let isCoPrime = (x, y) => {
    return getGcd(x, y) == 1;
}

// krishnamurthy number is a number the sum of the all fectorial all the dight is equal to the number.
// 145 => 1! + 4! + 5! = 1  + 24 + 120 = 145
let isKishnamurthyNumber = (n) => {
    let sm = 0;
    String(n).split('').map(x => sm+=fac(Number(x)));
    return sm == n;
}

// Average is a terms is define summetion of all the given point and divide by thers numbers of count.
// [1, 2, 3, 4, 5] => 15 / 5 = 3
let avg = (arr) => {
    let sm = 0;
    arr.map(x => sm+=x);
    return sm / arr.length;
}

// mod is define as the absulute value , without the signe.
// 0 <= mod (all the real numbers.)
let mod = (n) => {
    return Math.abs(n);
}

// A leap year is a calendar year that contains an additional day
// check the given year leap year or not.
let isLeap = (year) => {
    if(year % 400 == 0) return true;
    else if(year % 100 == 0) return false;
    else if(year % 4 == 0) return true;
    else return false;
}

// LCM - Least Comman multiple.
// least common multiple of integers a and b
let lcm = (a, b) => {
    return (mod(a)/getGcd(a, b)) * mod(b);
}

// HCF - Highest Common Factor
let hcf = (a, b) => getGcd(a, b);

// ASCII Code of the charector.
let ascii = (ch) => String(ch).charCodeAt();

// Number To ASCII code.
let numToAscii = (num) => String.fromCharCode(num);

// Reverse - read backword
let reverse = (str) => {
    return str.toString().split('').reverse().join('')
}

// Palindrome - A palindrome is a word, number, phrase, or other sequence 
//of characters which reads the same backward as forward
// check string or numebr is palindrome or not.
let isPalindrome = (str) => {
    return str == reverse(str);
}

// Word count
let wordCount = (str, separetor) => {
    return str.split(separetor).length
}

// permutation - get all the permutation of a given string.
let permutation = (str) => {
    str = str.split('');
    let result = [];
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m.join(''))
            } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    permute(str)
    return result;
}

// alternative string arrangement.
let alternativeStringArrange = (st1, st2) => {
    st1Length = st1.length
    st2Length = st2.length
    let len = st1Length > st2Length ? st1Length : st2Length
    let ar = []
    for(let i = 0;i<len;i++){
        if(i < st1Length){
            ar.push(st1[i]);
        }
        if(i < st2Length){
            ar.push(st2[i]);
        }
    }
    return ar.join('')
}

// indian phone number Validator.
let phoneValidator = (str) => {
    const re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    return re.test(str);
}

// indian phone number extractor.
let phoneExtractor = (str) => {
    return str.match(/(\+)+([91])+(\d{10})/)[0];
}

// use for check the given string are alphanumeric or not.
const { contatinSpecial } = require('../utils/utils');
const isAlNum = (str) => {
    const pat = /([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)/;
    return(!contatinSpecial(str) && pat.test(str));
}

// use for check the given stirn is alpha or not.
const isAlpha = (str) => {
    const pat = /^[a-zA-Z_]*$/;
    return pat.test(str);
}

// this function check the givent string is all decimal charectors or not.
const isDecimal = (str) => {
    const pat = /^(\d+)$/;
    return(!isAlNum(str) && pat.test(str));
}

// this method check the givne string in lower case or not.
const isLower = (str) => str.toLowerCase() == str && !isAlNum(str);

// this method check the given string in upper case or not.
const isUpper = (str) => str.toUpperCase() == str && !isAlNum(str);

// this method is used for the given string is only contain spaces.
const isSpace = (str) => /^(\s+)$/.test(str);

// this method is used for the given string is in title form or not.
const isTitle = (str) => /^([A-Z][a-z]+)$/.test(str);

// unique token generator, generate a unique token.
const token = () => {
    let token = "";
    while(true){
        let char = numToAscii(Math.floor(Math.random() * (126 - 64 + 1) + 64))
        if(token.length > 5) break;
        if(char != ' ')
            token += char;
    }
    let total = 0;
    while(true){
        let num = Math.round(Math.random() * 1000000);
        if(total > 1000000) break;
        total += num;
    }
    token = token + total;
    while(true){
        let char = numToAscii(Math.floor(Math.random() * (126 - 64 + 1) + 64))
        if(token.length > 25) break;
        if(char != ' ')
            token += char;
    }
    return token;
}

console.log(token());

// export maths methods.
module.exports = {
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
    isKishnamurthyNumber,
    avg, 
    mod, 
    wordCount,
    isLeap, 
    lcm, 
    hcf, 
    ascii, 
    reverse, 
    isPalindrome, 
    permutation,
    alternativeStringArrange,
    phoneValidator,
    phoneExtractor,
    isAlNum,
    isAlpha,
    numToAscii,
    isDecimal,
    isLower,
    isUpper,
    isSpace,
    isTitle,
    token
}