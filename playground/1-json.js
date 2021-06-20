const fs = require('fs');

/*
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


//buffer: because what comes back is a buffer which is a way for node.js to represent binary data:
//readFileSync: reads what is inside the file:
const dataBuffer = fs.readFileSync('1-json.json');

//toString(): turns the buffer data into string
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

console.log(data.title);
*/

//challenge
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

const changeJsonObjectProps = (name, planet, age) => {
    user.name = name;
    user.planet = planet;
    user.age = age;
}

changeJsonObjectProps("Pepe", "Earth2", 40);

const userJSON = JSON.stringify(user);

fs.writeFileSync('1-json.json', userJSON)




