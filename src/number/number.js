/**
 * The hacToDec methods return hexadecimal to decimal numbers.
 * @param {String} hex Hex value for conversion.
 * @returns {Number} It returnd hex equivalent decimal value.
 */
let hexToDec = (hex) => parseInt(hex, 16)


/**
 * The hacToOct methods return hexadecimal to Octal numbers.
 * @param {String} hex Hex value for conversion.
 * @returns {String} It returnd hex equivalent ocatal value.
 */
let hexToOct = (hex) => parseInt(hex, 16).toString(8).toUpperCase();


/**
 * The hacToBin methods return hexadecimal to binary numbers.
 * @param {String} hex Hex value for conversion.
 * @returns {String} It returnd hex equivalent binary value.
 */
let hexToBin = (hex) => parseInt(hex, 16).toString(2).toUpperCase();


/**
 * The decToHex methods return decimal to hexadecimal numbers.
 * @param {Number} dec Dec value for conversion.
 * @returns {String} It returnd dec equivalent hexadecimal value.
 */
let decToHex = (dec) => dec.toString(16);


/**
 * The decToOct methods return decimal to Octal numbers.
 * @param {Number} dec Dec value for conversion.
 * @returns {String} It returnd dec equivalent octal value.
 */
let decToOct = (dec) => dec.toString(8);


/**
 * The decToBin methods return decimal to binary numbers.
 * @param {Number} dec Dec value for conversion.
 * @returns {String} It returnd dec equivalent binary value.
 */
let decToBin = (dec) => dec.toString(2);



/**
 * The octToHex methods return octal to hexadecimal numbers.
 * @param {String} oct Oct value for conversion.
 * @returns {String} It returnd oct equivalent hexadecimal value.
 */
let octToHex = (oct) => parseInt(oct, 8).toString(16).toUpperCase();


/**
 * The octToBin methods return octal to decimal numbers.
 * @param {String} oct Oct value for conversion.
 * @returns {Number} It returnd oct equivalent decimal value.
 */
let octToDec = (oct) => parseInt(oct, 8);


/**
 * The octToBin methods return octal to binary numbers.
 * @param {String} oct Oct value for conversion.
 * @returns {String} It returnd oct equivalent binary value.
 */
let octToBin = (oct) => parseInt(oct, 8).toString(2).toUpperCase();


/**
 * The binToHex methods return binary to hexadecimal numbers.
 * @param {String} bin Binary value for conversion.
 * @returns {String} It returnd binary equivalent hexadecimal value.
 */
let binToHex = (bin) => parseInt(bin, 2).toString(16).toUpperCase();


/**
 * The binToDec methods return binary to decimal numbers.
 * @param {String} bin Binary value for conversion.
 * @returns {Number} It returnd binary equivalent decimal value.
 */
let binToDec = (bin) => parseInt(bin, 2);


/**
 * The binToOct methods return binary to octal numbers.
 * @param {String} bin Binary value for conversion.
 * @returns {String} It returnd binary equivalent octal value.
 */
let binToOct = (bin) => parseInt(bin, 2).toString(8).toUpperCase();


// exports number system.
module.exports = {
    hexToDec,
    hexToOct,
    hexToBin,
    decToHex,
    decToOct,
    decToBin,
    octToHex,
    octToDec,
    octToBin,
    binToHex,
    binToDec,
    binToOct
}