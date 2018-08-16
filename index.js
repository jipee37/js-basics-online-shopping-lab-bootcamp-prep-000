var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName: item, itemPrice: Math.floor(Math.random()*100)+1 })
  return `${item} has been added to your cart.`
 }

 //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49
 function viewCart(){
 	let report = 'In your cart, you have '
 	for(let i=0; i< cart.length; ++i){
 		const currentObj = cart[i]
 		if(i === cart.length-1){
 			report += `and ${currentObj.itemName} at $${currentObj.itemPrice}`
 			break;
    }
 		report += `${currentObj.itemName} at $${currentObj.itemPrice}, `
  }
 	  return report
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
