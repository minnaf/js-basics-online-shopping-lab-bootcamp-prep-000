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
  var newCart = [];
  var cart = getCart();
  
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  
  
  else {
    
    for (let i = 0; i < cart.length - 1; i++) {
      newCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `);
    }
  }
    
    return `In your cart, you have ${newCart}and ${cart[cart.length].itemName} at $${cart[cart.length.itemPrice]}.`;
  
  
}

function total() {
  // write your code here
  var cartPrices = [];
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++){
    cartPrices.push(getCart()[i].itemPrice); 
  }
  for (var j = 0; j < cartPrices.length; j++){
    totalPrice = totalPrice += cartPrices[j];
  }
  
  return totalPrice;
}


function removeFromCart(item) {
  // write your code here
 
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    while (cart.length > 0) {
      cart.pop();
    }
    return `Your total cost is $${total()} which will be charged to the card ${cardNumber}.`;
    
  }
}
