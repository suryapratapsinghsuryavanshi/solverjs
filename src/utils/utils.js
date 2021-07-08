// some globle value are required.
const months = { // create a months dictonary for easy to use.
    1:'January',
    2:'February',
    3:'March',
    4:'April',
    5:'May',
    6:'June',
    7:'July',
    8:'August',
    9:'September',
    10:'October',
    11:'November',
    12:'December'
};

// show the week day in a number : Sunday - Saturday => 0 - 6
const days = { // weeks-day
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
const dateToDay = (date) => {
    // extarct the date
    const newDate = date.split('/').map((x) => Number(x));
    const day = newDate[0]; // extarct the day 
    const month = newDate[1]; // extarct the month
    const year = newDate[2]; // extarct the year.
    // check the data are valid or not.
    // day valid if value of day is (day <= 31)
    // month valid if value of month is (month <= 12)
    // year valid if value of year is (1900 <= year <= 2030)
    // if date not valid return the msg.
    if(day > 31 || month > 12 || year < 1900 || year > 2030) return 'Please Check The Date.';
    // create a base data for finding the actuale date.
    const baseDate = `${months[month]} ${day}, ${year} 23:15:30`;
    // use the Date class and make a object use of the base date.
    const finalDate = new Date(baseDate);
    // call a getDay() method of Date() class.
    const finalDay = finalDate.getDay();
    // return the output.
    return days[finalDay];
}

// debug.
// console.log("Day of this Date is :", dataToDay('27/09/20211'));

// Age calculator calculat the age to DOB to current date.
// date formate : dd/mm/yyyy
// dobToAge() : 1/1/2015 -> calculat the age is on current : 6 years 5 months 24 days
const dobToAge = (date) => {
    // extarct the date
    const newDate = date.split('/').map((x) => Number(x));
    const day = newDate[0]; // extarct the day 
    const month = newDate[1]; // extarct the month
    const year = newDate[2]; // extarct the year.
    // check the data are valid or not.
    // day valid if value of day is (day <= 31)
    // month valid if value of month is (month <= 12)
    // year valid if value of year is lesser to current year.
    // if date not valid return the msg.
    if(day > 31 || month > 12 || year > new Date().getFullYear()) return 'Please Check The DOB.';
    // create a base data for finding the actuale date.
    const baseDobDate = `${months[month]} ${day}, ${year} 00:00:00`;
    // create a newDob object (date)
    const newDob = new Date(baseDobDate);
    // create a new current data object
    const newCurr = new Date();
    // make some celculation for retrive the result.
    const diffTime = Math.abs(newCurr - newDob);
    // convert tiks to day.
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // construct our required answers.
    const constructYear = Math.floor(diffDays / 365);
    const constructMonth = Math.floor((diffDays / 30.417) % 12);
    const constructDay = Math.floor(diffDays % 30.417)
    // return the String output.
    return `${constructYear} years ${constructMonth} months and ${constructDay} days`
}

// find the word are contain numaric charector or not.
const containNumber = (word) => {
    let pat = /(\d+)/;
    return pat.test(word);
}

// find the word are contain Special charector.
const contatinSpecial = (word) => {
    let pat = /([!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+)/;
    return pat.test(word);
}

// keyword extractor.
const keywordExtractor = (str) => {
    // firstly extract all the word from the string.
    // using split methdo and ' ' as a separator.
    let words = str.split(' ');
    // if the word contatin some spacil charectors so reduce it.
    // if the length of the word is less then 4 is not valid keyword.
    let reduceWords = words.filter((word) =>  {
        // if the word length aee less then 5 or 
        // the word contain any numaric charector the return flase. 
        // and the property of reduce if the return false the not
        // consider as a valid word.
        // last check the containe special charector or not.
        return((word.length >= 5) && (!containNumber(word)) && (!contatinSpecial(word)));
    });
    // all the number and special char contain word are eluminate so return it.
    return reduceWords;
}

// keyword finder.
const isKeywordExists = (str, keyword) => RegExp(`${keyword}`).test(str);

module.exports = {
    dateToDay,
    dobToAge,
    keywordExtractor,
    contatinSpecial,
    isKeywordExists
}