import classes from "./VacationRental.module.css"

function VacationRental({bnb, addToCart}) {
  return (
    <div className={classes.container}>
      <div className={classes["image-div"]}>
        <img src={bnb.image} alt={bnb.title} />
      </div>
      <div className={classes.location}>
        <h3>{bnb.location.city}, {bnb.location.country}</h3>
        <h3 className={classes.stars}>{bnb.rating.stars}</h3>
      </div>
      <h3>{bnb.title}</h3>
      <div className={classes.cost}>
        <h3>Cost: ${bnb.payment.cost}</h3>
        <div>
          <button onClick={() => addToCart(bnb.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default VacationRental