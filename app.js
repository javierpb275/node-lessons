const chalk = require('chalk');
//Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface:
const yargs = require('yargs');
const getNotes = require('./lesson6/notes.js');

//process is a big object with many methods and properties. argv: array that contains all of the arguments provided
const command = process.argv[2]

/*
if (command === 'add') {
    console.log('adding notes')
} else if (command === 'remove') {
    console.log('removing notes')
}
*/ 

//Customize yargs version:
yargs.version('1.1.0')

//add, remove, read, list 

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => console.log('Adding a new note')
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => console.log('Removing a note')
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading a note')
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => console.log('Listing out all notes')
})


//console.log(process.argv);
console.log(yargs.argv);
