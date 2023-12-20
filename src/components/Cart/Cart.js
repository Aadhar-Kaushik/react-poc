import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRemoveViaCart } from "../../ui/redux/actions"
import Modal from "../Modal/Modal"
import classes from "./Cart.module.css"

const Cart = () => {

    // const cartCtx=useContext(CartContext)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const addRemoveItemHandler = (item, action) => {
        // cartCtx.addRemoveViaCart(item,action)
        dispatch(addRemoveViaCart({ item, action }))
    }



    const head = <div>Head</div>
    let body = <p>No items in your cart !!!</p>
    if (cart.cartItems && cart.cartItems.length > 0) {

        body = <ul>{cart.cartItems.map(e => <div className={classes.list + " row"} key={e.id}>
            <span className={classes.name + " col-6"}>{e.name}</span>
            <span className={"col-1"}>x<strong>{e.quantity}</strong></span>
            <span className="col-4" style={{ marginTop: "-20px", marginLeft: "2em" }}>
                <span className={classes.minus} onClick={addRemoveItemHandler.bind(null, e, "-")}>-</span>
                <span className={classes.plus} onClick={addRemoveItemHandler.bind(null, e, "+")}>+</span>
            </span>
        </div>)}</ul>
    }
    const foot = <div className={classes.foot}><span>Total Amount</span>:<strong>$ {cart.totalAmount}</strong></div>
    return <div>
        <Modal head={head} body={body} foot={foot} />
    </div>
}

export default Cart