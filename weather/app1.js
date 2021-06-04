// console.log('Starting')

// setTimeout(() => {
//     console.log('2 Second Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 Second Timer')
// }, 0)

// console.log('Stopping')

// const request = require('request');
const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=<xxxx>&query=37.8267,-122.4233&units=f';

// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.current);
// });

// request(url, function(error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

// request({ url: url, json: true }, (error, response, body) => {
//     console.log('It is current ' + response.body.current.temperature + ' degress out.');
//     console.log('It is feels like ' + response.body.current.feelslike + ' degress out.');
// });

// request({ url: url, json: true }, (error, response, body) => {

// if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//     console.log('It is current ' + response.body.current.temperature + ' degress out.');
//     console.log('It is feels like ' + response.body.current.feelslike + ' degress out.');
// }

// });