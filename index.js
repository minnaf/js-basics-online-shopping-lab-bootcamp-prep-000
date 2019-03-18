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
  var itemObject = {itemName: [item], itemPrice: (Math.floor(Math.random() * 100) + 1)};
  cart.push(itemObject);

 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0]} at $${getCart()[1]}.`;
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
