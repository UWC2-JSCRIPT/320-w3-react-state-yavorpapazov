import classes from "./App.module.css"
import { useState } from "react"
import bnbData from "./data/bnbs.json"
import VacationRental from "./components/VacationRental"
import ShoppingCart from "./components/ShoppingCart"
import Form from "./components/Form"
import Button from "./ui/Button"

function App() {
  let [cart, setCart] = useState([])
  let [bnbs, setBnbs] = useState(bnbData)
  let [isShoppingCartDisplayed, setIsShoppingCartDisplayed] = useState(false)
  function handleUserInput(userData) {
    setBnbs(prevState => [...prevState, userData])
  }
  function handleAddToCart(bnbId) {
    let itemToAdd = bnbs.find(item => item.id === bnbId)
    let alreadyExist = cart.some(item => item.id === itemToAdd.id)
    if(alreadyExist) {
      alert('The item is already in the cart.')
      return
    }
    setCart(prevState => [...prevState, itemToAdd])
  }
  function handleRemoveFromCart(bnbId) {
    let newArr = cart.filter(item => item.id !== bnbId)
    setCart(newArr)
  }
  function handleCloseCart() {
    setIsShoppingCartDisplayed(false)
  }
  let resultVacationRental = bnbs.map(item => <VacationRental key={item.id} bnb={item} manageCart={handleAddToCart} action="Add to Cart" />)
  return (
    <div className={classes.container}>
      {isShoppingCartDisplayed && <div className={classes.backdrop} />}
      <Form userInput={handleUserInput} />
      <div>
        <h3 className={classes["shopping-cart-h3"]}>Shopping cart items: {cart.length}</h3>
        <Button onClick={() => setIsShoppingCartDisplayed(true)}>Shopping Cart</Button>
      </div>
      <div className={classes["grid-container"]}>
        {resultVacationRental}
      </div>
      {isShoppingCartDisplayed && 
      <div className={classes.modal}>
        <ShoppingCart bnbCart={cart} manageCart={handleRemoveFromCart} closeCart={handleCloseCart} />
      </div>}
    </div>
  );
}

export default App