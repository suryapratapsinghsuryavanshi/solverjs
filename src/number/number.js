// the hacToXxx methods return hexadecimal to decimal, Octal, binary numbers.
let hexToDec = (hax) => parseInt(hax, 16)
let hexToOct = (hex) => parseInt(hex, 16).toString(8).toUpperCase();
let hexToBin = (hex) => parseInt(hex, 16).toString(2).toUpperCase();

// the decToXxx methods return decimal to hexadecimal, Octal, binary numbers.
let decToHex = (dec) => dec.toString(16);
let decToOct = (dec) => dec.toString(8);
let decToBin = (dec) => dec.toString(2);

// the octToXxx methods return octal to hexadecimal, decimal, binary numbers.
let octToHex = (oct) => parseInt(oct, 8).toString(16).toUpperCase();
let octToDec = (oct) => parseInt(oct, 8);
let octToBin = (oct) => parseInt(oct, 8).toString(2).toUpperCase();

// the binToXxx methods return binary to hexadecimal, decimal, ocatal numbers.
let binToHex = (bin) => parseInt(bin, 2).toString(16).toUpperCase();
let binToDec = (bin) => parseInt(bin, 2);
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