const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=5287c1ed8a65a3139af80d11998a60ca&query=New%20York';

const request = http.request(url, (response) => {

    let data = '';

    response.on('data', chunk => {
        data = data + chunk.toString()
    });

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    });

});

request.on('error', error => {
    console.log('ERROR', error)
})

request.end();