import ShoppingCartItem from "./ShoppingCartItem"

function ShoppingCart({bnbCart, removeFromCart}) {
  let total = 0
  let resultShoppingCartItems = bnbCart.map(item => <ShoppingCartItem key={item.id} bnb={item} removeFromCart={removeFromCart} />)
  for(let i of bnbCart) {
    total = total + i.payment.cost
  }
  return (
    <div>
      {resultShoppingCartItems}
      <h3>Total: {total}</h3>
    </div>
  )
}

export default ShoppingCart