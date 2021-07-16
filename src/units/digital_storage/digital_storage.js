// the digital storage conversion is a most 
//roll play work with andy intrenal services.

// bit to all importent digital storage units.
let bitToByte = (bit) => bit / 8;
let bitToKb = (bit) => bit / 8000;
let bitToMb = (bit) => bit / 8e+6;
let bitToGb = (bit) => bit / 8e+9;
let bitToTb = (bit) => bit / 8e+12;
let bitToPb = (bit) => bit / 8e+15;

// byte to all importent digital storage units.
let byteToBit = (byte) => byte * 8;
let byteToKb = (byte) => byte / 1000;
let byteToMb = (byte) => byte / 1e+6;
let byteToGb = (byte) => byte / 1e+9;
let byteToTb = (byte) => byte / 1e+12;
let byteToPb = (byte) => byte / 1e+15;

// kilobyte to all importent digital storage units.
let kbToBit = (kilobyte) => kilobyte * 8000;
let kbToByte = (kilobyte) => kilobyte * 1000;
let kbToMb = (kilobyte) => kilobyte / 1000;
let kbToGb = (kilobyte) => kilobyte / 1e+6;
let kbToTb = (kilobyte) => kilobyte / 1e+9;
let kbToPb = (kilobyte) => kilobyte / 1e+12;

// megabyte to all importent digital stroage units.
let mbToBit = (mb) => mb * 8e+6;
let mbToByte = (mb) => mb * 1e+6;
let mbToKb = (mb) => mb * 1000;
let mbToGb = (mb) => mb / 1000;
let mbToTb = (mb) => mb / 1e+6;
let mbToPb = (mb) => mb / 1e+9;

// gigabyte to all importent digital storage units.
let gbToBit = (gb) => gb * 8e+9;
let gbToByte = (gb) => gb * 1e+9;
let gbToKb = (gb) => gb * 1e+6;
let gbToMb = (gb) => gb * 1000;
let gbToTb = (gb) => gb / 1000;
let gbToPb = (gb) => gb / 1e+6;

// terabyte to all importent digital storage units.
let tbToBit = (tb) => tb * 8e+12;
let tbToByte = (tb) => tb * 1e+12;
let tbToKb = (tb) => tb * 1e+9;
let tbToMb = (tb) => tb * 1e+6;
let tbToGb = (tb) => tb * 1000;
let tbToPb = (tb) => tb / 1000;

// petabyte to all importent digital storage units.
let pbToBit = (pb) => pb * 8e+15;
let pbToByte = (pb) => pb * 1e+15;
let pbToKb = (pb) => pb * 1e+12;
let pbToMb = (pb) => pb * 1e+9;
let pbToGb = (pb) => pb * 1e+6;
let pbToTb = (pb) => pb * 1000;


module.exports = {
    // bit to all
    bitToByte,
    bitToKb,
    bitToMb,
    bitToGb,
    bitToTb,
    bitToPb,
    // byte to all
    byteToBit,
    byteToKb,
    byteToMb,
    byteToGb,
    byteToTb,
    byteToPb,
    // kilobyte to all
    kbToBit,
    kbToByte,
    kbToMb,
    kbToGb,
    kbToTb,
    kbToPb,
    // megabyte to all
    mbToBit,
    mbToByte,
    mbToKb,
    mbToGb,
    mbToTb,
    mbToPb,
    // gigabyte to all
    gbToBit,
    gbToByte,
    gbToKb,
    gbToMb,
    gbToTb,
    gbToPb,
    // terabyte to all
    tbToBit,
    tbToByte,
    tbToKb,
    tbToMb,
    tbToGb,
    tbToPb,
    // petabyte to all
    pbToBit,
    pbToByte,
    pbToKb,
    pbToMb,
    pbToGb,
    pbToTb,
}