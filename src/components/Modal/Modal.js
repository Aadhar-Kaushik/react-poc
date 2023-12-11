import React, { useContext } from "react"
import ReactDOM from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toggleCart } from "../../ui/redux/actions"
import classes from "./Modal.module.css"

const Content = props => {

    // const cartCtx=useContext(CartContext)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClickOrderHandler = () => {
        navigate("/user-details")
    }

    return <div className={classes.content}>
        <div className={classes.head}>{props.head}</div>
        <div className={classes.body}>{props.body}</div>
        <div className={classes.foot}>
            <span>{props.foot}</span>
            <button className={`btn btn-primary ${classes["btn-1"]}`}
                disabled={cart.cartItems.length === 0}
                onClick={onClickOrderHandler}
            >Order</button>
            <button className={`btn btn-primary ${classes["btn-2"]}`} onClick={() => dispatch(toggleCart())}>Cancel</button>
        </div>

    </div>
}
const Backdrop = (props) => {
    return <div className={classes.back} onClick={props.onClick}>

    </div>
}
const Modal = props => {
    // const cartCtx=useContext(CartContext)
    const dispatch = useDispatch()
    return <React.Fragment>
        {ReactDOM.createPortal(<Content {...props}>{props.children}</Content>, document.getElementById("backdrop"))}
        {ReactDOM.createPortal(<Backdrop onClick={() => dispatch(toggleCart())} />, document.getElementById("backdrop"))}
    </React.Fragment>
}

export default Modal