function VacationRental({bnb, addToCart}) {
  return (
    <div>
      <div>
        <img src={bnb.image} alt={bnb.title} />
      </div>
      <h3>{bnb.location.city}, {bnb.location.country}</h3>
      <h3>{bnb.rating.stars}</h3>
      <h3>{bnb.title}</h3>
      <h3>Cost: ${bnb.payment.cost}</h3>
      <button onClick={() => addToCart(bnb.id)}>Add to Cart</button>
    </div>
  )
}

export default VacationRental