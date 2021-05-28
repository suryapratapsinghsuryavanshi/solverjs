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
    meToIn
}