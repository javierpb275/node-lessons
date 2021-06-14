const chalk = require('chalk');
//Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface:
const yargs = require('yargs');
const getNotes = require('./lesson6/notes.js');

//process is a big object with many methods and properties. argv: array that contains all of the arguments provided
const command = process.argv[2]

if (command === 'add') {
    console.log('adding notes')
} else if (command === 'remove') {
    console.log('removing notes')
}

console.log(yargs.argv);