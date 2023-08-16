// Importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qt);

// console.log('Importing mo dule');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread',5)
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js'; //It is doable and usable, but don't do this. BAD PRACTICE
// console.log(price);

import add, { cart } from './shoppingCart.js'; // This is how to import default exports...
//... you assign any name(add) to it yourself;
add('pizza', 6);
add('bread', 2);
add('apples', 10);

console.log(cart); // this implies that import is not a copy of the className in exports...
// ...it is a live result of whatever is done in exports.

//////////////////////////////////////
////// Top Level Await (Only used in Modules) ///////

// TLA means using 'await' outside of 'async' function
//////// Example 1////
// console.log('First fetch');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data);
// console.log("End of fetch");
// The downside of using TLA('await) is that it blocks the execution of all the subsequent functions after it, until its finished executing

///////// Example 2 /////////
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return {title: data.at(-1).title, text: data.at(-1).body}
// };
// const lastPost = getLastPost();
// console.log(lastPost); // Returns a promise, we can't get the returned object from it

// Not very clean (using 'then' to get the returned object)
// lastPost.then(last => console.log(last))

// Using TLA to get the returned object
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

/////////////////////////////////////////


// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state ={
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5}
    ],
    user: {loggedIn: true},
}

const stateClone = Object.assign({}, state); // Using method to duplicate an object
const stateDeepClone = cloneDeep(state); // Using a piece of open source software to duplicate an object

state.user.loggedIn = false
console.log(stateClone);
console.log(stateDeepClone);

//////////////////////////
//// Hot Module Replacement ////
// It allows a module to be changed without affecting the browser as a whole...
// ... the module will be make its change seperately, this is majorly used during maintenance
if(module.hot){
    module.hot.accept()
}
