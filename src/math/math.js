// getGcd return the gcd of two numbers.
/**
 * getGcd return the gcd of two numbers.
 * @param {Number} arg1 first argument for gcd
 * @param {Number} arg2 second argument for gcd
 * @returns return a `gcd` value of both number.
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
    let [a, b] = [0, 1];
    while (--arg_n > 0) {
        [a, b] = [b, a + b];
    }
  return b;
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
    let st = [];
    for(let i=0;i<n;i++){
        num3 = num1 + num2;
        st.push(num3);
        num1 = num2;
        num2 = num3;
    }
    return("Fibonacci Series : "+st.join(' '));
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
    let sign= n >= 0? 1:-1;
    return sign * parseInt(n.toString().split('').reverse().join(''));
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
    return (n * (n + 1)) / 2;
}

// fac return the factorial of n.
/**
 * the `fac` method return the n'th factorial of given number.
 * @param {Number} n the number for calculating factorial.
 * @returns {BigInt} return n'th factorial value of a number.
 */
let fac = (n) => {
    if (n < 2) return 1;
    let product = BigInt(n);
    for (let i = BigInt(n - 1); i > 1; i--){
        product *= i;
    }
    return product;
}

// the pow function return the power of x^y.
/**
 * the pow function return the calculation of x^y.
 * @param {Number} x `base` value for operation.
 * @param {Number} y `exponent` value for operation.
 * @returns {Number} return the calculation of `x^y`.
 */
let pow = (x, y) => {
    let ans = 1;
    while(y != 0){
        if(y%2 == 1){
            ans = ans*x;
        }
        y = y/2;
        y = Number.parseInt(y);
        x = x*x;
    }
    return ans;
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
    let root=Math.sqrt(x);
    for(let i=2; i<=root; i++)
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
 * @returns return correspond boolean value, if the number is krishnamurthy number return `true` else return `false`.
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
 * @returns return boolean value, if the year is leep-year return `true`, else `false`.
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
 * @param {String} str a string value.
 * @returns return the reverse of the given string.
 * @example reverse('ABC') => 'CBA'
 */
let reverse = (str) => {
    return str.toString().split('').reverse().join('');
}

/**
 * The capitalize method converts any string in capitalize form for also known as title case form.
 * @param {String} str 
 * @returns return capitalize string.
 * @example capitalize('javascript') => 'Javascript'
 */
let capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Return count of the substring in the string.
 * @param {String} str input string.
 * @param {String} seq input character or substring.
 * @returns substring count.
 */
let count = (str, seq) => {
    if(seq === '.') {
        return str.match(/\./g).length;
    }
    let re = new RegExp(seq, 'g');
    let match = str.match(re)
    return match.length;
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
 * @param {String} str a string value or paragraph.
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
    let permute = (arr, m = []) => {
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
 * @param {String} st1 first string value
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
    let re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
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
let { contatinSpecial } = require('../utils/utils');
/**
 * Use for check the given string are alphanumeric or not.
 * @param {String} str string for checking.
 * @returns return boolean, true if alpahnumeric else return false.
 */
let isAlNum = (str) => {
    let pat = /([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)/;
    return(!contatinSpecial(str) && pat.test(str));
}

// use for check the given string is alpha or not.
/**
 * Use for check the given stirn is alpha or not.
 * @param {String} str string for checking.
 * @returns return boolean, true if the string is alpha else return false.
 */
let isAlpha = (str) => {
    let pat = /^[a-zA-Z_]*$/;
    return pat.test(str);
}

// this function check the given string is all decimal characters or not.
/**
 * This function check the givent string is all decimal characters or not.
 * @param {String} str string for chacking.
 * @returns return true if the string is decimal else return false.
 */
let isDecimal = (str) => {
    let pat = /^(\d+)$/;
    return(!isAlNum(str) && pat.test(str));
}

// this method check the givne string in lower case or not.
/**
 * This method check the given string in lower case or not.
 * @param {String} str string value for checking.
 * @returns return true if the string in lower case, else return false.
 */
let isLower = (str) => str.toLowerCase() == str && !isAlNum(str);

// this method check the given string in upper case or not.
/**
 * This method check the given string in upper case or not.
 * @param {String} str string value for checking.
 * @returns return true if the string in upper case, else return false.
 */
let isUpper = (str) => str.toUpperCase() == str && !isAlNum(str);

// this method is used for the given string is only contain spaces.
/**
 * This method is used for the given string is only contain spaces.
 * @param {String} str string for checking.
 * @returns return true if the string  is only space, else return false.
 */
let isSpace = (str) => /^(\s+)$/.test(str);

// this method is used for the given string is in title form or not.
/**
 * This method is used for check the given string is in title form or not.
 * @param {String} str string value for checking.
 * @returns return true, if given string in title case, else return false.
 */
let isTitle = (str) => /^([A-Z][a-z]+)$/.test(str);

// unique token generator, generate a unique token.
/**
 * The token method generates and returns a unique token in string format, every time you run without any arguments.
 * @returns return a unique token every time to run.
 */
let token = () => {
    let token = "";
    while(true){
        let char = numToAscii(Math.floor(Math.random() * (126 - 64 + 1) + 64))
        if(token.length > 5) break;
        if(char != ' ' && char != '[' && char != ']' && char != '\\' && char != '/' && char != '{' && char != '}' && char != '(' && char != ')' && char != `'` && char != `"` && char != '`')
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
        if(char != ' ' && char != '[' && char != ']' && char != '\\' && char != '/' && char != '{' && char != '}' && char != '(' && char != ')' && char != `'` && char != `"` && char != '`')
            token += char;
    }
    return token;
}

/**
 * 
 * @param {Number} min a minimum range
 * @param {Number} max a maximum range
 * @returns Return a `random` value between min to max provided, both are inclusive.
 */
let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Use to find the remainder or modulo division.
 * @param {Number} divident 
 * @param {Number} devisor 
 * @returns `Number` return numeric value of the remainder.
 */
let remainder = (divident, devisor) => divident % devisor;

let isPerfectSquare = (x) => {
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}

/**
 * Check fibonacci number : Returns true if n is a Fibinacci Number, else false
 * @param {Number} num number for check the are fibonacci or not.
 * @returns `Boolean` true if the number is fibonacci, else return false.
 */
let isFibonacci = (num) => isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);

/**
 * The max method returns the maximum value from the given array.
 * @param {Number[]} arr Array or list
 * @returns {Number} maximum value form array.
 */
let max = (arr) => {
    let mx = arr[0];
    for(let i = 1; i < arr.length; i++)
        if (mx < arr[i])
            mx = arr[i];
    return mx;
}

/**
 * The min method returns the minimum value from the given array.
 * @param {Number[]} arr Array or list
 * @returns {Number} minimum value form array.
 */
 let min = (arr) => {
    let mn = arr[0];
    for(let i = 1; i < arr.length; i++)
        if (mn > arr[i])
            mn = arr[i];
    return mn;
}

/**
 * The getPowerset method calculates all subset of the given set and return it, also known as powerset.
 * @param {Array} set A set array.
 * @returns {Array[][]} `Powerset` Returns the powerset of the given set.
 */
function getPowerset(set) {
    let subset = new Array(new Array());

    for(let ele of set) {
        let len = subset.length;
        for(let i = 0; i < len; i++) {
            subset.push([...subset[i], ele]);
        }
    }

    return subset;
}


/**
 * 
 * @param {number} originalCost Gross Price
 * @param {number} gst gst percentage
 * @returns {object} {netCost: Total_production_cost, tex: Tex}
 */
const getGST = (originalCost, gst) => {
    const tex = (originalCost * gst) / 100;
    const totalProductionCost = originalCost + tex;
    return {netCost: totalProductionCost, tex: tex};
}

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
    capitalize,
    count,
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
    remainder,
    isFibonacci,
    max,
    min,
    getPowerset,
    getGST
}
