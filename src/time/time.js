// time conversion methods.

// nanosecond to micorsecond.
let nsToUs = (ns) => ns / 1000;
// nanosecond to milisecond.
let nsToMs = (ns) => ns / 1e+6;
// nanosecond to second.
let nsToSc = (ns) => ns / 1e+9;
// nanosecond to minute.
let nsToMi = (ns) => ns / 6e+10;
// nanosecond to hour.
let nsToHr = (ns) => ns / 3.6e+12;
// nanosecond to day.
let nsToDd = (ns) => ns / 8.64e+13;
// nanosecond to week.
let nsToWk = (ns) => ns / 6.048e+14;
// nanosecond to month.
let nsToMm = (ns) => ns / 2.628e+15;
// nanosecond to year.
let nsToYy = (ns) => ns / 3.154e+16;

// microsecond to nanosecond.
let usToNs = (us) => us * 1000;
// microsecond to milisecond.
let usToMs = (us) => us / 1000;
// microsecond to second.
let usToSc = (us) => us / 1e+6;
// microsecond to minute.
let usToMi = (us) => us / 6e+7;
// microsecond to hour.
let usToHr = (us) => us / 3.6e+8;
// microsecond to day.
let usToDd = (us) => us / 8.64e+9;
// microsecond to week.
let usToWk = (us) => us / 6.048e+10;
// microsecond to month.
let usToMm = (us) => us / 2.628e+11;
// microsecond to year.
let usToYy = (us) => us / 3.154e+12;

// milisecond to nanosecond.
let msToNs = (ms) => ms * 1e+6;
// milisecond to microsecond.
let msToUs = (ms) => ms * 1000;
// milisecond to second.
let msToSc = (ms) => ms / 1000;
// milisecond to minute.
let msToMi = (ms) => ms / 6e+4;
// milisecond to hour.
let msToHr = (ms) => ms / 3.6e+5;
// milisecond to day.
let msToDd = (ms) => ms / 8.64e+6;
// milisecond to week.
let msToWk = (ms) => ms / 6.048e+7;
// milisecond to month.
let msToMm = (ms) => ms / 2.628e+8;
// milisecond to year.
let msToYy = (ms) => ms / 3.154e+9;

// second to nanosecond.
let scToNs = (sc) => sc * 1e+9;
// second to microsecond.
let scToUs = (sc) => sc * 1e+6;
// second to milisecond.
let scToMs = (sc) => sc * 1000;
// second to minute.
let scToMi = (sc) => sc / 60;
// second to hour.
let scToHr = (sc) => sc / 3600;
// second to day.
let scToDd = (sc) => sc / 86400;
// second to week.
let scToWk = (sc) => sc / 604800;
// second to month.
let scToMm = (sc) => sc / 2.628e+6;
// second to year.
let scToYy = (sc) => sc / 3.154e+7;

// minute to nanosecond.
let miToNs = (mi) => mi * 6e+10;
// minute to microsecond.
let miToUs = (mi) => mi * 6e+7;
// minute to milisecond.
let miToMs = (mi) => mi * 6e+4;
// minute to second.
let miToSc = (mi) => mi * 60;
// minute to hour.
let miToHr = (mi) => mi / 60;
// minute to day.
let miToDd = (mi) => mi / 1440;
// minute to week.
let miToWk = (mi) => mi / 10080;
// minute to month.
let miToMm = (mi) => mi / 43800;
// minute to year.
let miToYy = (mi) => mi / 525960;

// hour to nanosecond.
let hrToNs = (hr) => hr * 3.6e+12;
// hour to microsecond.
let hrToUs = (hr) => hr * 3.6e+9;
// hour to milisecond.
let hrToMs = (hr) => hr * 3.6e+6;
// hour to second.
let hrToSc = (hr) => hr * 3600;
// hour to minute.
let hrToMi = (hr) => hr * 60;
// hour to day.
let hrToDd = (hr) => hr / 24;
// hour to week.
let hrToWk = (hr) => hr / 168;
// hour to month.
let hrToMm = (hr) => hr / 730.001;
// hour to year.
let hrToYy = (hr) => hr / 8766;

// day to nanosecond.
let ddToNs = (dd) => dd * 8.64e+13;
// day to microsecond.
let ddToUs = (dd) => dd * 8.64e+10;
// day to milisecond.
let ddToMs = (dd) => dd * 8.64e+7;
// day to second.
let ddToSc = (dd) => dd * 86400;
// day to minute.
let ddToMi = (dd) => dd * 1440;
// day to hour.
let ddToHr = (dd) => dd * 24;
// day to week.
let ddToWk = (dd) => dd / 7;
// day to month.
let ddToMm = (dd) => dd / 30.436875;
// day to year.
let ddToYy = (dd) => dd / 365.2425;

// week to nanosecond.
let wkToNs = (wk) => wk * 6.048e+14;
// week to microsecond.
let wkToUs = (wk) => wk * 6.048e+11;
// week to milisecond.
let wkToMs = (wk) => wk * 6.048e+8;
// week to second.
let wkToSc = (wk) => wk * 604800;
// week to minute.
let wkToMi = (wk) => wk * 10080;
// week to hour.
let wkToHr = (wk) => wk * 168;
// week to day.
let wkToDd = (wk) => wk * 7;
// week to month.
let wkToMm = (wk) => wk / 4.348125;
// week to year.
let wkToYy = (wk) => wk / 52.177457;

// month to nanosecond.
let mmToNs = (mm) => mm * 2.628e+15;
// month to microsecond.
let mmToUs = (mm) => mm * 2.628e+12;
// month to milisecond.
let mmToMs = (mm) => mm * 2.628e+9;
// month to second.
let mmToSc = (mm) => mm * 2.628e+6;
// month to minute.
let mmToMi = (mm) => mm * 43800;
// month to hour.
let mmToHr = (mm) => mm * 730.001;
// month to day.
let mmToDd = (mm) => mm * 30.436875;
// month to week.
let mmToWk = (mm) => mm * 4.348125;
// month to year.
let mmToYy = (mm) => mm / 12;

// year to nanosecond.
let yyToNs = (yy) => yy * 3.154e+16;
// year to microsecond.
let yyToUs = (yy) => yy * 3.154e+13;
// year to milisecond.
let yyToMs = (yy) => yy * 3.154e+10;
// year to second.
let yyToSc = (yy) => yy * 3.154e+7;
// year to minute.
let yyToMi = (yy) => yy * 525960;
// year to hour.
let yyToHr = (yy) => yy * 8766;
// year to day.
let yyToDd = (yy) => yy * 365.2425;
// year to week.
let yyToWk = (yy) => yy * 52.177457;
// year to month.
let yyToMm = (yy) => yy * 12;


module.exports = {
    nsToUs,
    nsToMs,
    nsToSc,
    nsToMi,
    nsToHr,
    nsToDd,
    nsToWk,
    nsToMm,
    nsToYy,
    usToNs,
    usToMs,
    usToSc,
    usToMi,
    usToHr,
    usToDd,
    usToWk,
    usToMm,
    usToYy,
    msToNs,
    msToUs,
    msToSc,
    msToMi,
    msToHr,
    msToDd,
    msToWk,
    msToMm,
    msToYy,
    scToNs,
    scToUs,
    scToMs,
    scToMi,
    scToHr,
    scToDd,
    scToWk,
    scToMm,
    scToYy,
    miToNs,
    miToUs,
    miToMs,
    miToSc,
    miToHr,
    miToDd,
    miToWk,
    miToMm,
    miToYy,
    hrToNs,
    hrToUs,
    hrToMs,
    hrToSc,
    hrToMi,
    hrToDd,
    hrToWk,
    hrToMm,
    hrToYy,
    ddToNs,
    ddToUs,
    ddToMs,
    ddToSc,
    ddToMi,
    ddToHr,
    ddToWk,
    ddToMm,
    ddToYy,
    wkToNs,
    wkToUs,
    wkToMs,
    wkToSc,
    wkToMi,
    wkToHr,
    wkToDd,
    wkToMm,
    wkToYy,
    mmToNs,
    mmToUs,
    mmToMs,
    mmToSc,
    mmToMi,
    mmToHr,
    mmToDd,
    mmToWk,
    mmToYy,
    yyToNs,
    yyToUs,
    yyToMs,
    yyToSc,
    yyToMi,
    yyToHr,
    yyToDd,
    yyToWk,
    yyToMm
}