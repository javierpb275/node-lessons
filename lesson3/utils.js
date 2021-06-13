console.log('utils.js');

const name = 'Pepe';

const add = (a, b) => a + b;

//whatever we assign here is what other files can get access to:
module.exports = add;