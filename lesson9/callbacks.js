setTimeout(() => {
    console.log('Two seconds are up');
}, 2000)

const names = ['Pepe', 'Paco', 'Jorge'];
const shortNames = names.filter(name => name.length <= 4);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };
        callback(data);
    }, 2000)
}

geocode('Los Angeles', data => console.log(data));

const add = (num1, num2, sum) => {
    setTimeout(() => {
        sum(num1 + num2);
    }, 2000)
}

add(1, 2, sum => console.log(sum));