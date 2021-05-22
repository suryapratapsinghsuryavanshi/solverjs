// kilometer to meter, centimeter, millimeter, micrometer, nanameter, yard, foot, inch.
let kmToMe = (km) => { return km*1000; }
let kmToCm = (km) => { return km*100000; }
let kmToMm = (km) => { return km*1000000; }
let kmToUm = (km) => { return km*1000000000; }
let kmToNm = (km) => { return km*1000000000000; }
let kmToYd = (km) => { return km*1094; }
let kmToFt = (km) => { return km*3281; }
let kmToIn = (km) => { return km*39370; }

//all length methods exports.
module.exports = {
    kmToMe,
    kmToCm,
    kmToMm,
    kmToUm,
    kmToNm,
    kmToYd,
    kmToFt,
    kmToIn
}