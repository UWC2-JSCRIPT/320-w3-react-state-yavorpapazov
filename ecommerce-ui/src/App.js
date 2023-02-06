import classes from "./App.module.css"
import { useState } from "react"
import bnbData from "./data/bnbs.json"
import VacationRental from "./components/VacationRental"
import ShoppingCart from "./components/ShoppingCart"
import Form from "./components/Form"

function App() {
  let [cart, setCart] = useState([])
  let [bnbs, setBnbs] = useState(bnbData)
  function handleUserInput(userData) {
    setBnbs(prevState => [...prevState, userData])
  }
  function handleAddToCart(bnbId) {
    let itemToAdd = bnbs.find(item => item.id === bnbId)
    setCart(prevState => [...prevState, itemToAdd])
  }
  function handleRemoveFromCart(bnbId) {
    let newArr = cart.filter(item => item.id !== bnbId)
    setCart(newArr)
  }
  let resultVacationRental = bnbs.map(item => <VacationRental key={item.id} bnb={item} manageCart={handleAddToCart} action="Add to Cart" />)
  return (
    <div>
      <Form userInput={handleUserInput} />
      <div className={classes["grid-container"]}>
        {resultVacationRental}
      </div>
      <ShoppingCart bnbCart={cart} manageCart={handleRemoveFromCart} />
    </div>
  );
}

export default App