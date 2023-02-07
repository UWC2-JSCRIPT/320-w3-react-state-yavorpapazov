import classes from "./ShoppingCart.module.css"
import VacationRental from "./VacationRental"

function ShoppingCart({bnbCart, manageCart, closeCart}) {
  let total = 0
  let resultShoppingCartItems = bnbCart.map(item => <VacationRental key={item.id} bnb={item} manageCart={manageCart} action="Remove" />)
  for(let i of bnbCart) {
    total = total + i.payment.cost
  }
  return (
    <div className={classes["grid-container"]}>
      {resultShoppingCartItems}
      <h3>Total: ${total}</h3>
      <div>
        <button onClick={closeCart}>Close</button>
      </div>
    </div>
  )
}

export default ShoppingCart