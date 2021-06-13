const fs = require('fs');//file system module: create, read, update and delete files...
//fs.writeFileSync('notes.js', '');
const add = require('./utils.js');//if we require a file and put it inside a variable, there we have all the code from module.exports
const writeNotes = require('./notes.js');

const sum = add(4, -2)
const myNotes = writeNotes("Helloooo!!!")
 
console.log(sum);
console.log(myNotes);

