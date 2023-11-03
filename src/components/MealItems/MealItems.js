import { useContext, useRef } from "react"
import CartContext from "../../ui/store/cart-context"
import classes from "./MealItems.module.css"
const MealItems = props => {
    const countInputRef= useRef()
    const cartCtx=useContext(CartContext)
    const addItemToCartHandler = () => {
        const item = {
            id:props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            quantity:+countInputRef.current.value
        }
        cartCtx.addItemsToCart(item)

    }
    return <div className={`${classes.mealItems} row`}>
        <div className="col-10">


            <div className={classes.title}><strong>{props.name}</strong></div>
            <div className="row">

                <div className="col-7"><strong>Description: </strong>{props.description}</div>
                <div className="col-2"><strong>Price: </strong>$ {props.price}</div>
            </div>
        </div>
        <div className={`${classes.input} col-2`} >
            <input type="number" min="0" max="5" step="1" ref={countInputRef}/>
            <button className="btn btn-primary" onClick={addItemToCartHandler}>+</button>
        </div>
    </div>
}

export default MealItems