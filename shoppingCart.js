// // Exporting Module
// console.log('Exporting module');

// // // Blocking code
// // console.log('Start fetching users');
// // await fetch('https://jsonplaceholder.typicode.com/users');
// // console.log('Finish fetching users');

// const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} are added to cart`);
};

const totalPrice = 20;
const totalQuantity = 5;

// // Name export is used to export more than one name at a time
export { totalPrice, totalQuantity as qt };

// // Default exports exports only one className per module at a time (it exports the value itself)
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} are added to cart`);
  };

////