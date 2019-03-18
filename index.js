var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var price = Math.floor((Math.random() * 100) + 1);
  var itemObject = {itemName: [item], itemPrice: price};
  cart.push(itemObject);

 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart.itemName)} at $${cart.itemPrice}.`;
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
