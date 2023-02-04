import classes from "./Form.module.css"
import { useState } from "react"

function Form({userInput}) {
  let [title, setTitle] = useState('')
  let [city, setCity] = useState('')
  let [country, setCountry] = useState('')
  let [cost, setCost] = useState('')
  let [image, setImage] = useState('')
  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handleCity(e) {
    setCity(e.target.value)
  }
  function handleCountry(e) {
    setCountry(e.target.value)
  }
  function handleCost(e) {
    setCost(e.target.value)
  }
  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  function handleSubmit(e) {
    e.preventDefault()
    let userInputObj = {
      id: Date.now().toString(),
      title,
      location: {
        city,
        country
      },
      payment: {
        cost: parseInt(cost)
      },
      image,
      rating: {
        stars: 4.5
      }
    }
    userInput(userInputObj)
    setTitle('')
    setCity('')
    setCountry('')
    setCost('')
  }
  return (
    <form className={classes["user-input-form"]} onSubmit={handleSubmit}>
      <div className={classes["form-item"]}>
        <label htmlFor="title">Title:</label>
        <br />
        <input id="title" type="text" value={title} onChange={handleTitle} required></input>
      </div>
      <div className={classes["form-item"]}>
        <label htmlFor="city">Location:</label>
        <br />
        <input id="city" type="text" value={city} onChange={handleCity} required></input>
      </div>
      <div className={classes["form-item"]}>
        <label htmlFor="country">Country:</label>
        <br />
        <input id="country" type="text" value={country} onChange={handleCountry} required></input>
      </div>
      <div className={classes["form-item"]}>
        <label htmlFor="cost">Cost:</label>
        <br />
        <input id="cost" type="number" value={cost} onChange={handleCost} required></input>
      </div>
      <div className={classes["form-item"]}>
        <label htmlFor="picture">Select image:</label>
        <br />
        <input id="picture" type="file" onChange={handleImage} required></input>
      </div>
      <div className={classes["form-item"]}>
        <button>Save</button>
      </div>
    </form>
  )
}

export default Form