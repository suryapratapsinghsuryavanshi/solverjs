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
    isCoPrime
}