// kilometer to meter, centimeter, millimeter, micrometer, nanameter, yard, foot, inch.
let kmToMe = (km) => { return km*1000; }
let kmToCm = (km) => { return km*100000; }
let kmToMm = (km) => { return km*1000000; }
let kmToUm = (km) => { return km*1000000000; }
let kmToNm = (km) => { return km*1000000000000; }
let kmToYd = (km) => { return km*1094; }
let kmToFt = (km) => { return km*3281; }
let kmToIn = (km) => { return km*39370; }

// meter to kilometer, centimeter, millimeter, micrometer, nanometer, yard, foot, inch.
let meToKm = (me) => me/1000;
let meToCm = (me) => me*100;
let meToMm = (me) => me*1000;
let meToUm = (me) => me*1000000;
let meToNm = (me) => me*1000000000;
let meToYd = (me) => me*1.094;
let meToFt = (me) => me*3.281;
let meToIn = (me) => me*39.37;

// centimeter to kilometer, meter, millimetre, micrometre, nanometre, yard, foot, inch.
let cmToKm = (cm) => cm/100000;
let cmToMe = (cm) => cm/100;
let cmToMm = (cm) => cm*10;
let cmToUm = (cm) => cm*10000;
let cmToNm = (cm) => cm*10000000;
let cmToYd = (cm) => cm/91.44;
let cmToFt = (cm) => cm/30.48;
let cmToIn = (cm) => cm/2.54;

// millimeter to kilometer, meter, centimeter, micrometre, nanometre, yard, foot, inch.
let mmToKm = (mm) => mm/1000000;
let mmToMe = (mm) => mm/1000;
let mmToCm = (mm) => mm/10;
let mmToUm = (mm) => mm*1000;
let mmToNm = (mm) => mm*1000000;
let mmToYd = (mm) => mm/914;
let mmToFt = (mm) => mm/305;
let mmToIn = (mm) => mm/25.4;

//all length methods exports.
module.exports = {
    // km To all.
    kmToMe,
    kmToCm,
    kmToMm,
    kmToUm,
    kmToNm,
    kmToYd,
    kmToFt,
    kmToIn,
    // me to All
    meToKm,
    meToCm,
    meToMm,
    meToUm,
    meToNm,
    meToYd,
    meToFt,
    meToIn,
    // cm to all
    cmToKm,
    cmToMe,
    cmToMm,
    cmToUm,
    cmToNm,
    cmToYd,
    cmToFt,
    cmToIn,
    // mm to all
    mmToKm,
    mmToMe,
    mmToCm,
    mmToUm,
    mmToNm,
    mmToYd,
    mmToFt,
    mmToIn
}