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

function viewCart(){
  if (!cart.length) return 'Your shopping cart is empty.'
	let report = 'In your cart, you have'
	for(let i=0; i< cart.length; ++i){
		const currentObj = cart[i]
		if(i === 0) {
			report = `${report} ${currentObj.itemName} at $${currentObj.itemPrice}.`;
    }
		if(i === cart.length-1 && i !==0){
			report = `${report.slice(0, report.length-1)}, and ${currentObj.itemName} at $${currentObj.itemPrice}.`
			break;
    }
		if( i > 0) report = `${report.slice(0, report.length-1)}, ${currentObj.itemName} at $${currentObj.itemPrice},`
    }
	return report
}

function total() {
  for(var i=0; i< cart.length; ++i){
    const currentObj = cart[i]
    }
  return i
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
