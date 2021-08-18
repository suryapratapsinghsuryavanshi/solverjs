// getGcd return the gcd of two numbers.
/**
 * getGcd return the gcd of two numbers.
 * @param {Number} arg1 first argument for gcd
 * @param {Number} arg2 second argument for gcd
 * @returns return a `gcd` vlaue of both number.
 */
let getGcd = (arg1, arg2) => {
    let less = arg1 > arg2 ? arg2 : arg1;
    for(less; less>=2; less--){
        if((arg1 % less === 0) && (arg2 % less === 0)) return(less);
    }
    return(less);
}

// getFib return the n'th fibonacci number.
/**
 * getFib return the n'th fibonacci number.
 * @param {Number} arg_n n'th natural number
 * @returns return a `n'th fibonacci` number.
 */
let getFib = (arg_n) => {
    if(arg_n == 0 || arg_n == 1) return arg_n;
    return getFib(arg_n-1) + getFib(arg_n-2); 
}

// printFib return the fibonacci series string up to n.
/**
 * printFib return the fibonacci series string up to n.
 * @param {Number} n n'th natural number
 * @returns return a `series` of n'th fibonacci numbers.
 */
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
/**
 * sumAllDigit return the addition of all the digits in a given number.
 * @param {Number} n n'th natural number.
 * @returns return the sum of all digit of n number numebrs.
 */
let sumAllDigit = (n) => {
    let sum = 0;
    n.toString().split('').map(x => sum+=parseInt(x))
    return(sum)
}

// reverseNumber return the reversed value of the given number.
/**
 * reverseNumber return the reversed value of the given number.
 * @param {Number | String} n any digit number.
 * @returns `Number` n reverse in reverse.
 */
let reverseNumber = (n) => {
    return parseInt(n.toString().split('').reverse().join(''))
}

// isArmstrong return the boolean in respenct of the are armstorng or not.
/**
 * isArmstrong return the boolean in respenct of the are armstorng or not.
 * @param {Number | String} n a number for checking.
 * @returns return boolen based on condition the number is armstrong or not.
 */
let isArmstrong = (n) => {
    let sum = 0;
    n.toString().split('').map(x => sum += parseInt(x) * parseInt(x) * parseInt(x))
    return n === sum
}

// sumOfN return the sum of n natural numbers.
/**
 * sumOfN return the sum of n natural numbers.
 * @param {Number} n natural number in series.
 * @returns {Number} sum of n natural numbers.
 */
let sumOfN = (n) => {
    return n == 1 ? n : n + sumOfN(n-1);
}

// fac return the factorial of n.
/**
 * the `fac` method return the n'th factorial of given number.
 * @param {Number} n the number for calculating factorial.
 * @returns {Number} return n'th factorial value of a number.
 */
let fac = (n) => {
    return n == 1 ? n : n * fac(n-1);
}

// the pow function return the power of x^y.
/**
 * the pow function return the calculation of x^y.
 * @param {Number} x `base` value for operation.
 * @param {Number} y `exponent` value for operation.
 * @returns {Number} return the calculation of `x^y`.
 */
let pow = (x, y) => {
    return y == 0 ? 1 : x * pow(x, y-1);
}

// the len function return the length of number or string.
/**
 * the len function return the length of number or string.
 * @param {Number | String} x a given number or string.
 * @returns return the `length` of givne number or string.
 */
let len = (x) => {
    return x.toString().length;
}

// the isPrime return boolean in respect of the given number prime or not.
/**
 * the isPrime return boolean in respect of the given number prime or not.
 * @param {Number} x n number for checking is prime or not.
 * @returns return correspond boolean value, if prime return `ture` else return `false`.
 */
let isPrime = (x) => {
    if(x == 1) return false;
    for(let i=x-1; i>=2; i--)
        if(x % i == 0)
            return false;
    return true;

}

// isCoPrime function return the boolean in respect of the given number is co-prime or not.
/**
 * isCoPrime function return the boolean in respect of the given number is co-prime or not.
 * @param {Number} x first number for cheing co-prime or not.
 * @param {Number} y second number for chieng co-prime or not.
 * @returns return correspond boolean value, if both number are co-prime return `true`, else return `false`.
 */
let isCoPrime = (x, y) => {
    return getGcd(x, y) == 1;
}

// krishnamurthy number is a number the sum of the all fectorial of the all dights is equal to the number itself.
// 145 => 1! + 4! + 5! = 1  + 24 + 120 = 145
/**
 * krishnamurthy number is a number the sum of the all fectorial of the all dights is equal to the number itself.
 * @param {Number} n a number for ching is krishnamurthy number or not.
 * @returns return correspond boolean vlaue, if the number is krishnamurthy number return `true` else return `false`.
 * @example 145 => 1! + 4! + 5! = 1  + 24 + 120 = 145
 */
let isKishnamurthyNumber = (n) => {
    let sm = 0;
    String(n).split('').map(x => sm+=fac(Number(x)));
    return sm == n;
}

// Average is a terms is define summetion of all the given point and divide by thers numbers of count.
// [1, 2, 3, 4, 5] => 15 / 5 = 3
/**
 * Average is a terms is define summetion of all the given point and divide by thers numbers of count.
 * @param {Number[]} arr A sequese of value for conting the avarage.
 * @returns return appropriate `avarage` of the all terms.
 * @example [1, 2, 3, 4, 5] => 15 / 5 = 3
 */
let avg = (arr) => {
    let sm = 0;
    arr.map(x => sm+=x);
    return sm / arr.length;
}

// mod is define as the absulute value , without the signe.
// 0 <= mod (all the real numbers.)
/**
 * mod is define as the absulute value , without the signe.
 * @param {Number} n a number with a sign or without a sign.
 * @returns return the absolute value of the given number.
 * @description `0 <= mod (all the real numbers.)`
 */
let mod = (n) => {
    return Math.abs(n);
}

// A leap year is a calendar year that contains an additional day
// check the given year leap year or not.
/**
 * A leap year is a calendar year that contains an additional day check the given year leap year or not.
 * @param {Number} year value for check leap year.
 * @returns return boolean vlaue, if the year is leep-year return `true`, else `false`.
 */
let isLeap = (year) => {
    if(year % 400 == 0) return true;
    else if(year % 100 == 0) return false;
    else if(year % 4 == 0) return true;
    else return false;
}

// LCM - Least Comman multiple.
// least common multiple of integers a and b
/**
 * LCM - Least Comman multiple, find least common multiple of integers a and b
 * @param {Number} a first number for operation
 * @param {Number} b second number for operation
 * @returns return the `lcm` of the number.
 */
let lcm = (a, b) => {
    return (mod(a)/getGcd(a, b)) * mod(b);
}

// HCF - Highest Common Factor
/**
 * HCF - Highest Common Factor of the given numbers.
 * @param {Number} a first number for operation.
 * @param {Number} b second number for operation.
 * @returns return the `gcd` of the number.
 */
let hcf = (a, b) => getGcd(a, b);

// ASCII Code of the character.
/**
 * ASCII Code of the character.
 * @param {String | CharacterData} ch a valid character 
 * @returns return `ascii code` of the given character
 * @example ascii('A') => 65 
 */
let ascii = (ch) => String(ch).charCodeAt();

// Number To ASCII code.
/**
 * Number To ASCII code.
 * @param {Number} num for find the character.
 * @returns return correspond string character of the number.
 * @example numToAscii(65) => 'A'
 */
let numToAscii = (num) => String.fromCharCode(num);

// Reverse - read backword
/**
 * Reverse the given string.
 * @param {String} str a string vlaue.
 * @returns return the reverse of the given string.
 * @example reverse('ABC') => 'CBA'
 */
let reverse = (str) => {
    return str.toString().split('').reverse().join('');
}

// Palindrome - A palindrome is a word, number, phrase, or other sequence 
//of characters which reads the same backward as forward
// check string or numebr is palindrome or not.
/**
 * Palindrome - A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward check string or numebr is palindrome or not.
 * @param {String} str string value for chacking.
 * @returns return correspond boolean value, if the string is palindrom return `true`, else return `false`.
 * @example isPalindrome('AABAA') => true
 */
let isPalindrome = (str) => {
    return str == reverse(str);
}

// Word count
/**
 * Count the number of work with the help of separetor.
 * @param {String} str a string vlaue or paragraph.
 * @param {String} separetor a value for separation.
 * @returns return a work count with the help of separetor.
 * @example workCount('This is normal string', ' ') => 4
 */
let wordCount = (str, separetor) => {
    return str.split(separetor).length
}

// permutation - get all the permutation of a given string.
/**
 * permutation - get all the permutation of a given string.
 * @param {String} str a string value or a paragraph.
 * @returns {String[]} return all `permutation` of the string.
 */
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
/**
 * alternative string arrangement.
 * @param {String} st1 first string vlaue
 * @param {String} st2 second string value.
 * @returns return a `alternative arranged string`.
 * @example alternativeStringArrange('ABCD', 'XY') => 'AXBYCD'
 */
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
/**
 * indian phone number Validator.
 * @param {String} str a phone number in form of string
 * @returns check the number is true if `indian number`, else return flase.
 */
let phoneValidator = (str) => {
    const re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    return re.test(str);
}

// indian phone number extractor.
/**
 * Indian phone number extractor.
 * @param {String} str a paragraph for extracting a indain number.
 * @returns return a indian number string if present.
 */
let phoneExtractor = (str) => {
    return str.match(/(\+)+([91])+(\d{10})/)[0];
}

// use for check the given string are alphanumeric or not.
const { contatinSpecial } = require('../utils/utils');
/**
 * Use for check the given string are alphanumeric or not.
 * @param {String} str string for checking.
 * @returns return boolean, true if alpahnumeric else return false.
 */
const isAlNum = (str) => {
    const pat = /([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)/;
    return(!contatinSpecial(str) && pat.test(str));
}

// use for check the given stirn is alpha or not.
/**
 * Use for check the given stirn is alpha or not.
 * @param {String} str string for checking.
 * @returns return boolean, true if the string is alpha else return false.
 */
const isAlpha = (str) => {
    const pat = /^[a-zA-Z_]*$/;
    return pat.test(str);
}

// this function check the given string is all decimal characters or not.
/**
 * This function check the givent string is all decimal characters or not.
 * @param {String} str string for chacking.
 * @returns return true if the string is decimal else return false.
 */
const isDecimal = (str) => {
    const pat = /^(\d+)$/;
    return(!isAlNum(str) && pat.test(str));
}

// this method check the givne string in lower case or not.
/**
 * This method check the given string in lower case or not.
 * @param {String} str string value for checking.
 * @returns return true if the string in lower case, else return false.
 */
const isLower = (str) => str.toLowerCase() == str && !isAlNum(str);

// this method check the given string in upper case or not.
/**
 * This method check the given string in upper case or not.
 * @param {String} str string value for checking.
 * @returns return true if the string in upper case, else return false.
 */
const isUpper = (str) => str.toUpperCase() == str && !isAlNum(str);

// this method is used for the given string is only contain spaces.
/**
 * This method is used for the given string is only contain spaces.
 * @param {String} str string for checking.
 * @returns return true if the string  is only space, else return false.
 */
const isSpace = (str) => /^(\s+)$/.test(str);

// this method is used for the given string is in title form or not.
/**
 * This method is used for check the given string is in title form or not.
 * @param {String} str string vlaue for checking.
 * @returns return true, if given string in title case, else return false.
 */
const isTitle = (str) => /^([A-Z][a-z]+)$/.test(str);

// unique token generator, generate a unique token.
/**
 * Fenerate a unique token, every time you run without any arguments.
 * @returns return a unique token every time to run.
 */
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

/**
 * 
 * @param {Number} min a minimum range
 * @param {Number} max a maximum range
 * @returns return `random` vlaue between min to max.
 */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Use to find the remainder or modulo division.
 * @param {Number} divident 
 * @param {Number} devisor 
 * @returns `Number` return numeric value of the remainder.
 */
const remainder = (divident, devisor) => divident % devisor;

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
    token,
    randomInt,
    remainder
}