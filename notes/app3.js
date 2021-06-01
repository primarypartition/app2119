const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes3.js');

const msg = getNotes();
console.log(msg);

// console.log(validator.isURL('http://ITsAli.com'));
// console.log(validator.isURL('http/ITsAli.com'));
// console.log(validator.isEmail('info@ITsAli.com'));
// console.log(validator.isEmail('info@ITsAli'));

// let msgChalk = chalk.blue('Success!');
// console.log(msgChalk);

// msgChalk = chalk.red.bold('Success!');
// console.log(msgChalk);

// msgChalk = chalk.green.inverse.bold('Success!');
// console.log(msgChalk);

msgChalk = chalk.green.bold('Success!');
console.log(msgChalk);