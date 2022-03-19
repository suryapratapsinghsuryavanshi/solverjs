/**
 * getFib return the n'th fibonacci number.
 * @param {Number} arg_n n'th natural number
 * @returns return a `n'th fibonacci` number.
 */
export function getFib(arg_n: number): number;


 /**
  * getGcd return the gcd of two numbers.
  * @param {Number} arg1 first argument for gcd
  * @param {Number} arg2 second argument for gcd
  * @returns return a `gcd` value of both number.
  */
export function getGcd(arg1: number, arg2: number): number;


 /**
  * printFib return the fibonacci series string up to n.
  * @param {Number} n n'th natural number
  * @returns return a `series` of n'th fibonacci numbers.
  */
export function printFib(n: number): string;


 /**
  * sumAllDigit return the addition of all the digits in a given number.
  * @param {Number} n n'th natural number.
  * @returns return the sum of all digit of n number numebrs.
  */
export function sumAllDigit(n: number): number;


 /**
  * reverseNumber return the reversed value of the given number.
  * @param {Number | String} n any digit number.
  * @returns `Number` n reverse in reverse.
  */
export function reverseNumber(n: number | string): number;


 /**
  * isArmstrong return the boolean in respenct of the are armstorng or not.
  * @param {Number | String} n a number for checking.
  * @returns return boolen based on condition the number is armstrong or not.
  */
export function isArmstrong(n: number | string): boolean;


 /**
  * sumOfN return the sum of n natural numbers.
  * @param {Number} n natural number in series.
  * @returns {Number} sum of n natural numbers.
  */
export function sumOfN(n: number): number;


 /**
  * the `fac` method return the n'th factorial of given number.
  * @param {Number} n the number for calculating factorial.
  * @returns {BigInt} return n'th factorial value of a number.
  */
export function fac(n: number): BigInt;


 /**
  * the pow function return the calculation of x^y.
  * @param {number} x `base` value for operation.
  * @param {number} y `exponent` value for operation.
  * @returns {number} return the calculation of `x^y`.
  */
export function pow(x: number, y: number): number;


 /**
  * the len function return the length of number or string.
  * @param {Number | String} x a given number or string.
  * @returns return the `length` of givne number or string.
  */
export function len(x: number | string): number;


 /**
  * the isPrime return boolean in respect of the given number prime or not.
  * @param {Number} x n number for checking is prime or not.
  * @returns return correspond boolean value, if prime return `ture` else return `false`.
  */
export function isPrime(x: number): boolean;


 /**
  * isCoPrime function return the boolean in respect of the given number is co-prime or not.
  * @param {Number} x first number for cheing co-prime or not.
  * @param {Number} y second number for chieng co-prime or not.
  * @returns return correspond boolean value, if both number are co-prime return `true`, else return `false`.
  */
export function isCoPrime(x: number, y: number): boolean;


 /**
  * krishnamurthy number is a number the sum of the all fectorial of the all dights is equal to the number itself.
  * @param {Number} n a number for ching is krishnamurthy number or not.
  * @returns return correspond boolean value, if the number is krishnamurthy number return `true` else return `false`.
  * @example 145 => 1! + 4! + 5! = 1  + 24 + 120 = 145
  */
export function isKishnamurthyNumber(n: number): boolean;


 /**
  * Average is a terms is define summetion of all the given point and divide by thers numbers of count.
  * @param {Number[]} arr A sequese of value for conting the avarage.
  * @returns return appropriate `avarage` of the all terms.
  * @example [1, 2, 3, 4, 5] => 15 / 5 = 3
  */
export function avg(arr: number[]): number;


 /**
  * mod is define as the absulute value , without the signe.
  * @param {Number} n a number with a sign or without a sign.
  * @returns return the absolute value of the given number.
  * @description `0 <= mod (all the real numbers.)`
  */
export function mod(n: number): number;


 /**
  * Count the number of work with the help of separetor.
  * @param {String} str a string value or paragraph.
  * @param {String} separetor a value for separation.
  * @returns return a work count with the help of separetor.
  * @example workCount('This is normal string', ' ') => 4
  */
export function wordCount(str: string, separetor: string): number;


 /**
  * A leap year is a calendar year that contains an additional day check the given year leap year or not.
  * @param {Number} year value for check leap year.
  * @returns return boolean value, if the year is leep-year return `true`, else `false`.
  */
export function isLeap(year: number): boolean;


 /**
  * LCM - Least Comman multiple, find least common multiple of integers a and b
  * @param {Number} a first number for operation
  * @param {Number} b second number for operation
  * @returns return the `lcm` of the number.
  */
export function lcm(a: number, b: number): number;


 /**
  * HCF - Highest Common Factor of the given numbers.
  * @param {Number} a first number for operation.
  * @param {Number} b second number for operation.
  * @returns return the `gcd` of the number.
  */
export function hcf(a: number, b: number): number;


 /**
  * ASCII Code of the character.
  * @param {String | CharacterData} ch a valid character
  * @returns return `ascii code` of the given character
  * @example ascii('A') => 65
  */
export function ascii(ch: string | CharacterData): number;


 /**
  * Reverse the given string.
  * @param {String} str a string value.
  * @returns return the reverse of the given string.
  * @example reverse('ABC') => 'CBA'
  */
export function reverse(str: string): string;


 /**
  * The capitalize method converts any string in capitalize form for also known as title case form.
  * @param {String} str
  * @returns return capitalize string.
  * @example capitalize('javascript') => 'Javascript'
  */
export function capitalize(str: string): string;


 /**
  * Return count of the substring in the string.
  * @param {String} str input string.
  * @param {String} seq input character or substring.
  * @returns substring count.
  */
export function count(str: string, seq: string): number;


 /**
  * Palindrome - A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward check string or numebr is palindrome or not.
  * @param {String} str string value for chacking.
  * @returns return correspond boolean value, if the string is palindrom return `true`, else return `false`.
  * @example isPalindrome('AABAA') => true
  */
export function isPalindrome(str: string): boolean;


 /**
  * permutation - get all the permutation of a given string.
  * @param {String} str a string value or a paragraph.
  * @returns {String[]} return all `permutation` of the string.
  */
export function permutation(str: string): string[];


 /**
  * alternative string arrangement.
  * @param {String} st1 first string value
  * @param {String} st2 second string value.
  * @returns return a `alternative arranged string`.
  * @example alternativeStringArrange('ABCD', 'XY') => 'AXBYCD'
  */
export function alternativeStringArrange(st1: string, st2: string): string;


 /**
  * indian phone number Validator.
  * @param {String} str a phone number in form of string
  * @returns check the number is true if `indian number`, else return flase.
  */
export function phoneValidator(str: string): boolean;


 /**
  * Indian phone number extractor.
  * @param {String} str a paragraph for extracting a indain number.
  * @returns return a indian number string if present.
  */
export function phoneExtractor(str: string): string;


 /**
  * Use for check the given string are alphanumeric or not.
  * @param {String} str string for checking.
  * @returns return boolean, true if alpahnumeric else return false.
  */
export function isAlNum(str: string): boolean;


 /**
  * Use for check the given stirn is alpha or not.
  * @param {String} str string for checking.
  * @returns return boolean, true if the string is alpha else return false.
  */
export function isAlpha(str: string): boolean;


 /**
  * Number To ASCII code.
  * @param {Number} num for find the character.
  * @returns return correspond string character of the number.
  * @example numToAscii(65) => 'A'
  */
export function numToAscii(num: number): string;


 /**
  * This function check the givent string is all decimal characters or not.
  * @param {String} str string for chacking.
  * @returns return true if the string is decimal else return false.
  */
export function isDecimal(str: string): boolean;


 /**
  * This method check the given string in lower case or not.
  * @param {String} str string value for checking.
  * @returns return true if the string in lower case, else return false.
  */
export function isLower(str: string): boolean;


 /**
  * This method check the given string in upper case or not.
  * @param {String} str string value for checking.
  * @returns return true if the string in upper case, else return false.
  */
export function isUpper(str: string): boolean;


 /**
  * This method is used for the given string is only contain spaces.
  * @param {String} str string for checking.
  * @returns return true if the string  is only space, else return false.
  */
export function isSpace(str: string): boolean;


 /**
  * This method is used for check the given string is in title form or not.
  * @param {String} str string value for checking.
  * @returns return true, if given string in title case, else return false.
  */
export function isTitle(str: string): boolean;


 /**
  * The token method generates and returns a unique token in string format, every time you run without any arguments.
  * @returns return a unique token every time to run.
  */
export function token(): string;


 /**
  *
  * @param {Number} min a minimum range
  * @param {Number} max a maximum range
  * @returns return `random` value between min to max.
  */
export function randomInt(min: number, max: number): number;


 /**
  * Use to find the remainder or modulo division.
  * @param {Number} divident
  * @param {Number} devisor
  * @returns `Number` return numeric value of the remainder.
  */
export function remainder(divident: number, devisor: number): number;


 /**
  * Check fibonacci number : Returns true if n is a Fibinacci Number, else false
  * @param {Number} num number for check the are fibonacci or not.
  * @returns `Boolean` true if the number is fibonacci, else return false.
  */
export function isFibonacci(num: number): boolean;


 /**
  * The max method returns the maximum value from the given array.
  * @param {Number[]} arr Array or list
  * @returns {Number} maximum value form array.
  */
export function max(arr: number[]): number;


 /**
  * The min method returns the minimum value from the given array.
  * @param {Number[]} arr Array or list
  * @returns {Number} minimum value form array.
  */
export function min(arr: number[]): number;


 /**
  * The getPowerset method calculates all subset of the given set and return it, also known as powerset.
  * @param {Array<number>} set A set array.
  * @returns {Array<Array<number>>} `Powerset` Returns the powerset of the given set.
  */
export function getPowerset(set: Array<number>): Array<Array<number>>;


 /**
  *
  * @param {number} originalCost Gross Price
  * @param {number} gst gst percentage
  * @returns {object} {netCost: Total_production_cost, tex: Tex}
  */
export function getGST(originalCost: number, gst: number): object;
