const phones = [
    { name: 'iphone', camera: 20, storage: '32gb', price: 830000, color: 'silver' },
    { name: 'samsung', camera: 10, storage: '32gb', price: 430000, color: 'silver' },
    { name: 'walton', camera: 40, storage: '32gb', price: 130000, color: 'silver' },
    { name: 'Oppo', camera: 20, storage: '32gb', price: 120000, color: 'silver' },
    { name: 'Nokia', camera: 20, storage: '32gb', price: 98000, color: 'silver' },
    { name: 'Xaomi', camera: 20, storage: '32gb', price: 53000, color: 'silver' },
    { name: 'HTC', camera: 20, storage: '32gb', price: 9000, color: 'silver' },
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }

    }
    return cheapest;

}
const myCheapestPhone = cheapestPhone(phones);
console.log(myCheapestPhone);