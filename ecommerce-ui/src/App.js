import {useState} from "react"
import bnbs from "./data/bnbs.json"
import VacationRental from "./components/VacationRental"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  let [cart, setCart] = useState([])
  function handleAddToCart(bnbId) {
    let itemToAdd = bnbs.find(item => item.id === bnbId)
    setCart(prevState => [...prevState, itemToAdd])
  }
  function handleRemoveFromCart(bnbId) {
    let newArr = cart.filter(item => item.id !== bnbId)
    setCart(newArr)
  }
  let resultVacationRental = bnbs.map(item => <VacationRental key={item.id} bnb={item} addToCart={handleAddToCart} />)
  return (
    <div>
      <h3>Hello, Friends!</h3>
      {resultVacationRental}
      <ShoppingCart bnbCart={cart} removeFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App