// some globle value are required.
let months = { // create a months dictonary for easy to use.
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

// show the week day in a number : Sunday - Saturday => 0 - 6
let days = { // weeks-day
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}

// date to week-day calculator.
// date formate => dd/mm/yyyy
/**
 * Take a date string and return a week day name of the given date.
 * @param {String} date input date string
 * @returns {String} `weekday` String day name
 */
let dateToDay = (date) => {
    // extarct the date
    let newDate = date.split('/').map((x) => Number(x));
    let day = newDate[0]; // extarct the day 
    let month = newDate[1]; // extarct the month
    let year = newDate[2]; // extarct the year.
    // check the data are valid or not.
    // day valid if value of day is (day <= 31)
    // month valid if value of month is (month <= 12)
    // year valid if value of year is (1900 <= year <= 2030)
    // if date not valid return the msg.
    if (day > 31 || month > 12 || year < 1900 || year > 2030) return 'Please Check The Date.';
    // create a base data for finding the actuale date.
    let baseDate = `${months[month]} ${day}, ${year} 23:15:30`;
    // use the Date class and make a object use of the base date.
    let finalDate = new Date(baseDate);
    // call a getDay() method of Date() class.
    let finalDay = finalDate.getDay();
    // return the output.
    return days[finalDay];
}

// debug.
// console.log("Day of this Date is :", dataToDay('27/09/20211'));

// Age calculator calculat the age to DOB to current date.
// date formate : dd/mm/yyyy
// dobToAge() : 1/1/2015 -> calculat the age is on current : 6 years 5 months 24 days
/**
 * Take a date string and return a string withe year, month day vlaues.
 * @param {String} date date string
 * @returns {String} a string with formte.
 */
let dobToAge = (date) => {
    // extarct the date
    let newDate = date.split('/').map((x) => Number(x));
    let day = newDate[0]; // extarct the day 
    let month = newDate[1]; // extarct the month
    let year = newDate[2]; // extarct the year.
    // check the data are valid or not.
    // day valid if value of day is (day <= 31)
    // month valid if value of month is (month <= 12)
    // year valid if value of year is lesser to current year.
    // if date not valid return the msg.
    if (day > 31 || month > 12 || year > new Date().getFullYear()) return 'Please Check The DOB.';
    // create a base data for finding the actuale date.
    let baseDobDate = `${months[month]} ${day}, ${year} 00:00:00`;
    // create a newDob object (date)
    let newDob = new Date(baseDobDate);
    // create a new current data object
    let newCurr = new Date();
    // make some celculation for retrive the result.
    let diffTime = Math.abs(newCurr - newDob);
    // convert tiks to day.
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // letruct our required answers.
    let letructYear = Math.floor(diffDays / 365);
    let letructMonth = Math.floor((diffDays / 30.417) % 12);
    let letructDay = Math.floor(diffDays % 30.417)
    // return the String output.
    return `${letructYear} years ${letructMonth} months and ${letructDay} days`
}

// "Dec 21, 2021 20:00:00"
/**
 * The timeDelta method is used for finding the difference between the two 
 * dates, if the difference is not valid the return false.
 * @param {String} data1 data1 are previous data in "Mmm dd, yyyy Hh:Mm:Ss" format
 * @param {String} data2 data2 are previous data in "Mmm dd, yyyy Hh:Mm:Ss" format
 * @returns They return an object who contained days, hours, minutes, seconds delta values.
 * @example dateDelta("Dec 20, 2021 12:00:00", "Dec 25, 2021 12:00:00") => 
 * { days: 5, hours: 0, minutes: 0, seconds: 0 }
 */
const dateDelta = (data1, data2) => {
    let countDownDate = new Date(data2).getTime();
    let nowData = new Date(data1).getTime();

    // date delta
    let delta = countDownDate - nowData;

    // change into day, hours, minutes, seconds
    let days = Math.floor(delta / (1000 * 60 * 60 * 24));
    let hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((delta % (1000 * 60)) / 1000);

    if(delta < 0) {
        return false;
    }

    return { days, hours, minutes, seconds };
}

// find the word are contain numaric charector or not.
/**
 * If the word are contain number return true, else return false.
 * @param {String} word a input string
 * @returns {Boolean} return true false.
 */
let containNumber = (word) => {
    let pat = /(\d+)/;
    return pat.test(word);
}

// find the word are contain Special charector.
/**
 * If the word are contain special charector return true, else return false.
 * @param {String} word a input string
 * @returns {Boolean} return true false.
 */
let contatinSpecial = (word) => {
    let pat = /([!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+)/;
    return pat.test(word);
}

// keyword extractor.
/**
 * Extract the key word from given string and return it.
 * @param {String} str input string.
 * @returns {String[]} return a string array of keywords.
 */
let keywordExtractor = (str) => {
    // firstly extract all the word from the string.
    // using split methdo and ' ' as a separator.
    let words = str.split(' ');
    // if the word contatin some spacil charectors so reduce it.
    // if the length of the word is less then 4 is not valid keyword.
    let reduceWords = words.filter((word) => {
        // if the word length aee less then 5 or 
        // the word contain any numaric charector the return flase. 
        // and the property of reduce if the return false the not
        // consider as a valid word.
        // last check the containe special charector or not.
        return ((word.length >= 5) && (!containNumber(word)) && (!contatinSpecial(word)));
    });
    // all the number and special char contain word are eluminate so return it.
    return reduceWords;
}

// keyword finder.
/**
 * If the string contain keyword return true, else return false.
 * @param {String} str input string as a test string.
 * @param {String} keyword keyword for testing.
 * @returns return true false.
 */
let isKeywordExists = (str, keyword) => RegExp(`${keyword}`).test(str);

/**
 * CheckCamelCase method returns true if the string in camelCase, else return the false.
 * @param {String} varName the name of the variable to check.
 * @returns `Boolean` return true if the string is in camelCase, else return false.
 */
let checkCamelCase = (varName) => {
    // firstly, check that input is a string or not.
    if (typeof varName !== 'string') {
        return new TypeError('Argument is not a string.')
    }

    let pat = /^[a-z][A-Za-z]*$/
    return pat.test(varName)
}

/**
 * CheckFlatCase method returns true if the string in flatcase, else return the false.
 * @param {String} varname the name of the variable to check.
 * @returns `Boolean` return true if the string is in flatcase, else return false.
 */
let checkFlatCase = (varname) => {
    // firstly, check that input is a string or not.
    if (typeof varname !== 'string') {
        return new TypeError('Argument is not a string.')
    }

    let pat = /^[a-z]*$/
    return pat.test(varname)
}

/**
 * CheckKebabCase method returns true if the string in kebab-case, else return the false.
 * @param {String} varName the name of the variable to check.
 * @returns `Boolean` return true if the string is in kebab-case, else return false.
 */
let checkKebabCase = (varName) => {
    // firstly, check that input is a string or not.
    if (typeof varName !== 'string') {
        return new TypeError('Argument is not a string.')
    }

    let pat = /(\w+)-(\w)([\w-]*)/
    return pat.test(varName) && !varName.includes('_')
}

/**
 * CheckPascalCase method returns true if the string in PascalCase, else return the false.
 * @param {String} VarName the name of the variable to check.
 * @returns `Boolean` return true if the string is in PascalCase, else return false.
 */
let checkPascalCase = (VarName) => {
    // firstly, check that input is a string or not.
    if (typeof VarName !== 'string') {
        return new TypeError('Argument is not a string.')
    }

    let pat = /^[A-Z][A-Za-z]*$/
    return pat.test(VarName)
}

/**
 * CheckSnakeCase method returns true if the string in snake_case, else return the false.
 * @param {String} varName the name of the variable to check.
 * @returns `Boolean` return true if the string is in snake_case, else return false.
 */
let checkSnakeCase = (varName) => {
    // firstly, check that input is a string or not.
    if (typeof varName !== 'string') {
        return new TypeError('Argument is not a string.')
    }

    let pat = /(.*?)_([a-zA-Z])*/
    return pat.test(varName)
}


/**
 * URLShortener method converts any numeric id to a unique string
 * @param {Number} id input id.
 * @returns `String` Shorter or tiny id(url).
 */
let URLShortener = (id) => {
    // firstly, check that input is a number or not.
    if (typeof id !== 'number') {
        return new TypeError('Argument is not a number.')
    }
    // create a base62 char-set.
    let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let urlList = []
    // convert the number to the alphabet using the above explanation.
    while (id > 0) {
        urlList.push(charSet[id % 62])
        id = Math.floor(id / 62)
    }
    // reverse and join all characters and return to the user.
    return urlList.reverse().join('')
}

/*
    The time conversion of normalized time to the railway is a simple algorithm 
    because we know that if the time is in 'AM' value it means they only want 
    some changes on hours and minutes and if the time in 'PM' it means the only 
    want some changes in hour value.
    Input Formate -> 07:05:45PM
    Output Fromate -> 19:05:45
*/

/**
 * railwayTimeConversion method converts normalized time string to Railway time string.
 * @param {String} timeString Normalized time string Input Formate -> 07:05:45PM.
 * @returns {String} Railway time string Output Fromate -> 19:05:45.
 */
let railwayTimeConversion = (timeString) => {
    // firstly, check that input is a string or not.
    if (typeof timeString !== 'string') {
        return new TypeError('Argument is not a string.')
    }
    // split the string by ':' character.
    let [hour, minute, scondWithShift] = timeString.split(':')
    // split second and shift value.
    let [second, shift] = [scondWithShift.substr(0, 2), scondWithShift.substr(2)]
    // convert shifted time to not-shift time(Railway time) by using the above explanation.
    if (shift === 'PM') {
        if (parseInt(hour) === 12) { return `${hour}:${minute}:${second}` } else { return `${parseInt(hour) + 12}:${minute}:${second}` }
    } else {
        if (parseInt(hour) === 12) { return `00:${minute}:${second}` } else { return `${hour}:${minute}:${second}` }
    }
}

/**
 * Sort the list of values, partition in place method O(nlogn).
 * @param {Number[]} arr list of values.
 * @param {Boolean = true} reverse if the reverse value is true the sort in ascending order else descending, default is true.
 * @returns {Number[]} sorted list of values.
 */
let sort = (arr, reverse = true) => {
    if(reverse) {
        quickSort(arr, 0, arr.length - 1);
    }
    else {
        quickSort(arr, 0, arr.length - 1);
        arr.reverse()
    }
    return arr;
}

let quickSort = (arr, low, high) => {
    if(low < high) {
        let pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}

let partition = (arr, low, high) => {
    let pivot = arr[high];
    let pIndex = low;
    for(let i=low; i<high; i++) {
        if(arr[i] < pivot) {
            [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]];
            pIndex++;
        }
    }
    [arr[pIndex], arr[high]] = [arr[high], arr[pIndex]];
    return pIndex;
}

/**
 * ext method return the file extention.
 * @param {String} filename full filename with extention.
 * @returns return only the extention value.
 * @example mypicture.jpg => .jpg
 */
let ext = (filename) => {
    let extList = filename.split('.');
    return '.' + extList[extList.length - 1];
}

/**
 * Convert the lower or upper case string to the title case string.
 * @param {String} lower lower or upper case string
 * @returns return title string
 * @example title('name') => 'Name'
 */
let title = (lower) => {
    return lower.substr(0, 1).toUpperCase() + lower.substr(1, lower.length).toLowerCase()
}

module.exports = {
    dateToDay,
    dobToAge,
    keywordExtractor,
    contatinSpecial,
    isKeywordExists,
    checkCamelCase,
    checkFlatCase,
    checkKebabCase,
    checkPascalCase,
    checkSnakeCase,
    URLShortener,
    railwayTimeConversion,
    sort,
    ext,
    title,
    dateDelta
}