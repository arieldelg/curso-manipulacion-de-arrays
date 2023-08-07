const letters = ['a', 'b', 'c'];

letters.forEach(element => console.log('forEach', element)) 

const div = document.getElementById('ap')

const products = [
    {title: 'Burro', price: '220 MX'},
    {title: 'Cangerburguer', price: '280 MX'},
];


products.forEach(element => {
    div.innerHTML += `<li>${element.title}: ${element.price}</li>`
})