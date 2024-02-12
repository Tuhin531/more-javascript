/* const  products = [
    {name:'shirt', price: 1200},
    {name:'pant', price: 1000},
    {name:'watch', price: 9000},
    {name:'mobile', price: 82000},
];

function totalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum
}

const myCost = totalCost(products);
console.log(myCost);  */


const  products = [
    {name:'shirt', price: 1200, quantity:3 },
    {name:'pant', price: 1000, quantity:4},
    {name:'watch', price: 9000, quantity:8},
    {name:'mobile', price: 82000, quantity:2},
];

function totalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum
}

const myCost = totalCost(products);
console.log(myCost);
    
    