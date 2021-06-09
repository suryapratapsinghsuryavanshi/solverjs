// square kilometer to all 
let sqKmToSqMe = (sqkm) => sqkm * 1e+6;
let sqKmToSqYd = (sqkm) => sqkm * 1.196e+6;
let sqKmToSqFt = (sqkm) => sqkm * 1.076e+7;
let sqKmToSqIn = (sqkm) => sqkm * 1.55e+9;
let sqKmToHect = (sqkm) => sqkm * 100;
let sqKmToAcre = (sqkm) => sqkm * 247;

// square meter to all
let sqMeToSqKm = (sqme) => sqme / 1e+6;
let sqMeToSqYd = (sqme) => sqme * 1.196;
let sqMeToSqFt = (sqme) => sqme * 10.764;
let sqMeToSqIn = (sqme) => sqme * 1550;
let sqMeToHect = (sqme) => sqme / 10000;
let sqMeToAcre = (sqme) => sqme / 4047;

// square yard to all
let sqYdToSqKm = (sqyd) => sqyd / 1.196e+6;
let sqYdToSqMe = (sqyd) => sqyd / 1.196;
let sqYdToSqFt = (sqyd) => sqyd * 9;
let sqYdToSqIn = (sqyd) => sqyd * 1296;
let sqYdToHect = (sqyd) => sqyd / 11960;
let sqYdToAcre = (sqyd) => sqyd / 4840;

// square foot to all 
let sqFtToSqKm  = (sqft) => sqft / 1.076e+7; 
let sqFtToSqMe  = (sqft) => sqft / 10.764; 
let sqFtToSqYd  = (sqft) => sqft / 9; 
let sqFtToSqIn  = (sqft) => sqft * 144; 
let sqFtToHect  = (sqft) => sqft / 107639; 
let sqFtToAcre  = (sqft) => sqft / 43560; 

// square inch to all 
let sqInToSqKm  = (sqin) => sqin / 1.55e+9; 
let sqInToSqMe  = (sqin) => sqin / 1550; 
let sqInToSqYd  = (sqin) => sqin / 1296; 
let sqInToSqFt  = (sqin) => sqin / 144; 
let sqInToHect  = (sqin) => sqin / 1.55e+7; 
let sqInToAcre  = (sqin) => sqin / 6.273e+6; 

// hectare to all 
let hectToSqKm  = (hect) => hect / 100; 
let hectToSqMe  = (hect) => hect * 10000; 
let hectToSqYd  = (hect) => hect * 11960; 
let hectToSqFt  = (hect) => hect * 107639; 
let hectToSqIn  = (hect) => hect * 1.55e+7; 
let hectToAcre  = (hect) => hect * 2.471; 

// acre to all
let acreToSqKm  = (acre) => acre / 247;
let acreToSqMe  = (acre) => acre * 4047;
let acreToSqYd  = (acre) => acre * 4840;
let acreToSqFt  = (acre) => acre * 43560;
let acreToSqIn  = (acre) => acre * 6.273e+6;
let acreToHect  = (acre) => acre / 2.471;