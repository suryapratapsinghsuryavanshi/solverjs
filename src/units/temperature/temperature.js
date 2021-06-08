// the celToFah function are convert the celsius value to fahrenheit.
let celToFah = (c) => (c * 9/5) + 32;

// the celToKel function are convert the calsius value to kelvin value.
let celToKel = (c) => (c + 273.15);

// the fahToCel function are convert the fahrenheit value to celsius.
let fahToCel = (f) => (f - 32) * 5/9;

// the fahToKel function are convert the fahrenheit value to kelvin.
let fahToKel = (f) => (f - 32) * 5/9 +  273.15;

// the kelToCel function are convert the kelvin vlaue to celsius.
let kelToCel = (k) => (k - 273.15);

// the kelToFah function are convert the kelvin value to fahrenheit.
let kelToFah = (k) => (k - 273.15) * 9/5 + 32;

module.exports = {
    celToFah,
    celToKel,
    fahToCel,
    fahToKel,
    kelToCel,
    kelToFah
}