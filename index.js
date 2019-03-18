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
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }
  
  else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  
  else {
    var newCart = [];
    for (var i = 0; i < cart.length - 1; i++) {
      newCart.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `);
    }
    
    return `In your cart, you have ${newCart}and ${getCart()[cart.length].itemName} at $${getCart()[cart.length.itemPrice]}.`;
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
