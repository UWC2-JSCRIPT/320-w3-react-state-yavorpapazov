import classes from "./VacationRental.module.css"
import { AiFillStar } from "react-icons/ai"

function VacationRental({bnb, manageCart, action}) {
  return (
    <div className={classes.container}>
      <div className={classes["image-div"]}>
        <img src={bnb.image} alt={bnb.title} />
      </div>
      <div className={classes.location}>
        <h3>{bnb.location.city}, {bnb.location.country}</h3>
        <h3><AiFillStar /> {bnb.rating.stars}</h3>
      </div>
      <h3>{bnb.title}</h3>
      <div className={classes.cost}>
        <h3>Cost: ${bnb.payment.cost}</h3>
        <div>
          <button onClick={() => manageCart(bnb.id)}>{action}</button>
        </div>
      </div>
    </div>
  )
}

export default VacationRental