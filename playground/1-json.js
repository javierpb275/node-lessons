const fs = require('fs');

const book = {
    title: 'Hello Paco',
    author: 'Pepe Rodrigo'
}

//stringify: turn js object into json:
const bookJSON = JSON.stringify(book);

console.log(bookJSON);

//parse: turn json into js object:
const bookObject = JSON.parse(bookJSON);

console.log(bookObject);

//creates a json file with the bookJSON object written in it.
fs.writeFileSync('1-json.json', bookJSON)