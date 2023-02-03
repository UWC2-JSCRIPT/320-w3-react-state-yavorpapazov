import { useState } from "react"

function Form({userInput}) {
  let [title, setTitle] = useState('')
  let [city, setCity] = useState('')
  let [country, setCountry] = useState('')
  let [cost, setCost] = useState(0)
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
      id: Date.now(),
      title,
      location: {
        city,
        country
      },
      payment: {
        cost
      },
      image
    }
    userInput(userInputObj)
    setTitle('')
    setCity('')
    setCountry('')
    setCost('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input id="title" type="text" value={title} onChange={handleTitle}></input>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input id="city" type="text" value={city} onChange={handleCity}></input>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input id="country" type="text" value={country} onChange={handleCountry}></input>
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input id="cost" type="number" value={cost} onChange={handleCost}></input>
        </div>
        <div>
          <label htmlFor="picture">Select image:</label>
          <input id="picture" type="file" onChange={handleImage}></input>
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

export default Form