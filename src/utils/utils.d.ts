/**
 * Take a date string and return a week day name of the given date.
 * @param {String} date input date string
 * @returns {String} `weekday` String day name
 */
export function dateToDay(date: string): string;


 /**
  * Take a date string and return a string withe year, month day values.
  * @param {String} date date string
  * @returns {String} a string with formte.
  */
export function dobToAge(date: string): string;


 /**
  * Extract the key word from given string and return it.
  * @param {String} str input string.
  * @returns {String[]} return a string array of keywords.
  */
export function keywordExtractor(str: string): string[];


 /**
  * If the word are contain special charector return true, else return false.
  * @param {String} word a input string
  * @returns {Boolean} return true false.
  */
export function contatinSpecial(word: string): boolean;


 /**
  * If the string contain keyword return true, else return false.
  * @param {String} str input string as a test string.
  * @param {String} keyword keyword for testing.
  * @returns return true false.
  */
export function isKeywordExists(str: string, keyword: string): boolean;


 /**
  * CheckCamelCase method returns true if the string in camelCase, else return the false.
  * @param {String} varName the name of the variable to check.
  * @returns `Boolean` return true if the string is in camelCase, else return false.
  */
export function checkCamelCase(varName: string): boolean | TypeError;


 /**
  * CheckFlatCase method returns true if the string in flatcase, else return the false.
  * @param {String} varname the name of the variable to check.
  * @returns `Boolean` return true if the string is in flatcase, else return false.
  */
export function checkFlatCase(varname: string): boolean | TypeError;


 /**
  * CheckKebabCase method returns true if the string in kebab-case, else return the false.
  * @param {String} varName the name of the variable to check.
  * @returns `Boolean` return true if the string is in kebab-case, else return false.
  */
export function checkKebabCase(varName: string): boolean | TypeError;


 /**
  * CheckPascalCase method returns true if the string in PascalCase, else return the false.
  * @param {String} VarName the name of the variable to check.
  * @returns `Boolean` return true if the string is in PascalCase, else return false.
  */
export function checkPascalCase(VarName: string): boolean | TypeError;


 /**
  * CheckSnakeCase method returns true if the string in snake_case, else return the false.
  * @param {String} varName the name of the variable to check.
  * @returns `Boolean` return true if the string is in snake_case, else return false.
  */
export function checkSnakeCase(varName: string): boolean | TypeError;


 /**
  * URLShortener method converts any numeric id to a unique string
  * @param {Number} id input id.
  * @returns `String` Shorter or tiny id(url).
  */
export function URLShortener(id: number): string | TypeError;


 /**
  * railwayTimeConversion method converts normalized time string to Railway time string.
  * @param {String} timeString Normalized time string Input Formate -> 07:05:45PM.
  * @returns {String} Railway time string Output Fromate -> 19:05:45.
  */
export function railwayTimeConversion(timeString: string): string;


 /**
  * Sort the list of values, partition in place method O(nlogn).
  * @param {Number[]} arr list of values.
  * @param {Boolean} reverse if the reverse value is true the sort in ascending order else descending, default is true.
  * @returns {Number[]} sorted list of values.
  */
export function sort(arr: number[], reverse?: boolean): number[];


 /**
  * ext method return the file extention.
  * @param {String} filename full filename with extention.
  * @returns return only the extention value.
  * @example mypicture.jpg => .jpg
  */
export function ext(filename: string): string;


 /**
  * Convert the lower or upper case string to the title case string.
  * @param {String} lower lower or upper case string
  * @returns return title string
  * @example title('name') => 'Name'
  */
export function title(lower: string): string;


 /**
  * The timeDelta method is used for finding the difference between the two
  * dates, if the difference is not valid the return false.
  * @param {String} data1 data1 are previous data in "Mmm dd, yyyy Hh:Mm:Ss" format
  * @param {String} data2 data2 are previous data in "Mmm dd, yyyy Hh:Mm:Ss" format
  * @returns They return an object who contained days, hours, minutes, seconds delta values.
  * @example dateDelta("Dec 20, 2021 12:00:00", "Dec 25, 2021 12:00:00") =>
  * { days: 5, hours: 0, minutes: 0, seconds: 0 }
  */
export function dateDelta(data1: string, data2: string): false | {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

 /**
  * email validator.
  * @param {String} email lower or upper case string
  * @returns return true if the email is a correct email else return false
  * @example emailValidator('xyz@abc.com') => true
  */
  export function emailValidator(email: string): boolean;

  /**
  * strong password generator.
  * @param {Number} length 
  * @returns returns the strong password based on the length given
  * @example strongPasswordGenerator(12) => 2!$ytv6UJxZ7
  */
   export function strongPasswordGenerator(length: number): string;