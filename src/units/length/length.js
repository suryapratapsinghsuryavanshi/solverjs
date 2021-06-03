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

// micormeter to kilometer, meter, centimeter, millimeter, nanometer, yard, foot, inch.
let umToKm = (um) => um/1000000000;
let umToMe = (um) => um/1000000;
let umToCm = (um) => um/10000;
let umToMm = (um) => um/1000;
let umToNm = (um) => um*1000;
let umToYd = (um) => um/914400;
let umToFt = (um) => um/304800;
let umToIn = (um) => um/25400;

// nanometer to kilometer, meter, centimeter, millimeter, micormeter, yard, foot, inch.
let nmToKm = (nm) => nm/1000000000000;
let nmToMe = (nm) => nm/1000000000;
let nmToCm = (nm) => nm/10000000;
let nmToMm = (nm) => nm/1000000;
let nmToUm = (nm) => nm/1000;
let nmToYd = (nm) => nm/9.144e+8;
let nmToFt = (nm) => nm/3.048e+8;
let nmToIn = (nm) => nm/2.54e+7;

// yard to kilometer, meter, centimeter, millimeter, micormeter, nanometer, foot, inch.
let ydToKm = (yd) => yd/1094;
let ydToMe = (yd) => yd/1.094;
let ydToCm = (yd) => yd*91.44;
let ydToMm = (yd) => yd*914;
let ydToUm = (yd) => yd*914400;
let ydToNm = (yd) => yd*9.144e+8;
let ydToFt = (yd) => yd*3;
let ydToIn = (yd) => yd*36;

// foot to kilometer, meter, centimeter, millimeter, micormeter, nanometer, yard, inch.
let ftToKm = (ft) => ft/3281;
let ftToMe = (ft) => ft/3.281;
let ftToCm = (ft) => ft*30.48;
let ftToMm = (ft) => ft*305;
let ftToUm = (ft) => ft*304800;
let ftToNm = (ft) => ft*3.048e+8;
let ftToYd = (ft) => ft/3;
let ftToIn = (ft) => ft*12;

// inch to kilometer, meter, centimeter, millimeter, micormeter, nanometer, yard, foot.
let inToKm = (inc) => inc/39370;
let inToMe = (inc) => inc/39.37;
let inToCm = (inc) => inc*2.54;
let inToMm = (inc) => inc*25.4;
let inToUm = (inc) => inc*25400;
let inToNm = (inc) => inc*2.54e+7;
let inToYd = (inc) => inc/36;
let inToFt = (inc) => inc/12;

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
    mmToIn,
    //um to all
    umToKm,
    umToMe,
    umToCm,
    umToMm,
    umToNm,
    umToYd,
    umToFt,
    umToIn,
    // nm to all
    nmToKm,
    nmToMe,
    nmToCm,
    nmToMm,
    nmToUm,
    nmToYd,
    nmToFt,
    nmToIn,
    // yard
    ydToKm,
    ydToMe,
    ydToCm,
    ydToMm,
    ydToUm,
    ydToNm,
    ydToFt,
    ydToIn,
    // foot
    ftToKm,
    ftToMe,
    ftToCm,
    ftToMm,
    ftToUm,
    ftToNm,
    ftToYd,
    ftToIn,
    // inch
    inToKm,
    inToMe,
    inToCm,
    inToMm,
    inToUm,
    inToNm,
    inToYd,
    inToFt
}