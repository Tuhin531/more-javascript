function totalPrice(ticket){

    const first100Rate = 100;
    const second200Rate = 90;
    const restTicketRate = 70;
    if(ticket <= 100 ){
      const price =  ticket * first100Rate;
      return price;
    }
    else if(ticket <= 200){
        const first100Price = 100 * first100Rate;
        const  restTicketQuantity = ticket -100;
        const  restTicketPrice =  restTicketQuantity * second200Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    

}
const myPrice = totalPrice(300);
console.log('Total price:', myPrice);
