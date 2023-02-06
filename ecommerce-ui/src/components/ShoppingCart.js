import VacationRental from "./VacationRental"

function ShoppingCart({bnbCart, manageCart}) {
  let total = 0
  let resultShoppingCartItems = bnbCart.map(item => <VacationRental key={item.id} bnb={item} manageCart={manageCart} action="Remove" />)
  for(let i of bnbCart) {
    total = total + i.payment.cost
  }
  return (
    <div>
      {resultShoppingCartItems}
      <h3>Total: ${total}</h3>
    </div>
  )
}

export default ShoppingCart