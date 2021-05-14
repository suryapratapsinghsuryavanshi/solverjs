let info = () => {
    console.log("This package is a combination of many useful functions.");
    console.log({
        "Find GCD": 'getGcd(arg1, arg2)',
        // "Find LCM": 'getLcm(arg1, arg2)',
        "Find Fibonnaci": 'getFib(arg_n)',
        "Print Fibonacci": 'printFib(n)',
        "Sum Of All Digit": 'sumAllDigit(n)',
        "Reverse Number": 'reverseNumber',
        "Check Armstrong number": 'isArmstrong(n)'
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

module.exports = {
    info,
    getFib,
    getGcd,
    printFib,
    sumAllDigit,
    reverseNumber,
    isArmstrong
}