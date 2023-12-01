import { useContext, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addItemsToCart } from "../../ui/redux/actions"
import classes from "./MealItems.module.css"
const MealItems = props => {
    const countInputRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const cartCtx=useContext(CartContext)
    const addItemToCartHandler = () => {
        const item = {
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            quantity: +countInputRef.current.value
        }
        // cartCtx.addItemsToCart(item)
        dispatch(addItemsToCart(item))
    }

    const onClickMealNameHandler = () => {
        console.log(props)
        navigate(`${props.id}/${props.name}
        ?desc=${props.description}&price=${props.price}`)
    }

    return <div className={`${classes.mealItems} row`}>
        <div className="col-10">


            <div className={classes.title} onClick={onClickMealNameHandler}><strong>{props.name}</strong>
            </div>
            <div className="row">

                <div className="col-7"><strong>Description: </strong>{props.description}</div>
                <div className="col-2"><strong>Price: </strong>$ {props.price}</div>
            </div>
        </div>
        <div className={`${classes.input} col-2`} >
            <input type="number" min="0" max="5" step="1" ref={countInputRef} />
            <button className="btn btn-primary" onClick={addItemToCartHandler}>+</button>
        </div>
    </div>
}

export default MealItems