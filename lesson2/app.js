const fs = require('fs');//file system module: create, read, update and delete files...

//creates and writes text in the file. If you write new text, the previous text will be overwritten by the new one:
fs.writeFileSync('notes.txt', 'My name is Javier.');
//adds new text to a file:
fs.appendFileSync('notes.txt', ' I am practicing with the file system module.')