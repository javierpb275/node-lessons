//Object property shorthand:

const name = 'Pepe';
const age = 30;
const user = {
    name,
    age
};

console.log(user);

//Object destructuring:

const product = {
    label: 'pencil',
    price: 0.15,
    stock: 50
}

const {label: productLabel, price: productPrice, stock: productStock} = product;

console.log(productLabel);

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock);
};

transaction('order', product);