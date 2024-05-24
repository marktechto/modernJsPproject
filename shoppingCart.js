// exporting module
console.log("exporting module");
const shippingCost = 10;
console.log(shippingCost);
const cart = [];
export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added`);
}
// const totalQuantity = 24;
// const totalPrice = 5000;
// export { totalPrice, totalQuantity };
