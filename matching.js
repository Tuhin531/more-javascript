const products = [
    { name: 'shirt old model t-shirt', price: 1200, quantity: 3 },
    { name: 'pant', price: 1000, quantity: 4 },
    { name: 'watch old Model ', price: 9000, quantity: 8 },
    { name: 'air pod new model  ', price: 823000, quantity: 2 },
    { name: 'mobile new phone ', price: 82000, quantity: 2 },
    { name: 'laptop ', price: 822000, quantity: 2 },
    { name: 'clock old model ', price: 82000, quantity: 2 },
]
function matchedProducts(products, search) {

    const matched = [];
    for (const product of products) {
        // console.log(product.name);
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }

    return matched;
}
const result = matchedProducts(products, 'model')
console.log(result);