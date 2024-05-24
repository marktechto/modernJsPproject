// Importing Module
// import { addToCart, totalPrice as tp, totalQuantity } from "./shoppingCart.js";
// addToCart("bread", 10);
// console.log(totalQuantity, totalPrice);
console.log("importing module");
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 140);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.totalQuantity);
// ||||||||||||||||||||||||||||||||||||||||||||||||
// import add from "./shoppingCart.js";
// add("PIZZA", 2);
// add("Chips", 6);
// add("Cookie", 23);
// console.log("Start Fetching the process");
// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// // const lasPost = getLastPost();
// // lasPost.then((lp) => console.log(lp));
// const lasPost = await getLastPost();
// console.log(lasPost);
const ShoppingCart2 = (function () {
  const cart = [];
  const totalQuantity = 24;
  const totalPrice = 5000;
  const shippingCost = 10;
  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} ordered 
    from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart("Apple", 4);
ShoppingCart2.addToCart("Banana", 3);
