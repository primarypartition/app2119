const request = require('postman-request');

// Geocoding
// Address -> Lat/Long -> Weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=<xxxxx>&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {

//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);

// })


// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.');
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(latitude, longitude);
//     }
// })