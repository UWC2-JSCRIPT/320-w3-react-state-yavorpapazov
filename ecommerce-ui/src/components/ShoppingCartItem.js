function ShoppingCartItem({bnb, removeFromCart}) {
  return (
    <div>
      <h3>{bnb.title}</h3>
      <div>
        <img src={bnb.image} alt={bnb.title} />
      </div>
      <h3>{bnb.location.city}, {bnb.location.country}</h3>
      <h3>Cost: {bnb.payment.cost}</h3>
      <button onClick={() => removeFromCart(bnb.id)}>Remove From Cart</button>
    </div>
  )
}

export default ShoppingCartItem