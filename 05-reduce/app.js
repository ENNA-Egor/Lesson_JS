const order = [
   {
       id: 1,
       name: 'Лопата',
       price: 1000,
       quantity: 1,
   },
   {
       id: 2,
       name: 'Удочка',
       price: 1200,
       quantity: 2,
   },
   {
       id: 3,
       name: 'Ведро',
       price: 500,
       quantity: 3,
   },
   {
       id: 4,
       name: 'Мороженое',
       price: 100,
       quantity: 8,
   },
];

// const totalPrice = order.reduce((sum, ord)=> {   //Это аналог
//    return sum + ord.price*ord.quantity;
// },0);
const totalPrice = order.reduce((sum, ord)=> sum + ord.price*ord.quantity,0);

console.log (totalPrice);