const validator = require('validator');

//isEmail(): checks if a string is an email:
console.log(validator.isEmail('javier@example.com'));
console.log(validator.isEmail('example.com'));

//isURL(): checks if a string is a URL:
console.log(validator.isURL('https://mead.io'));
console.log(validator.isURL('https/mead.io'));