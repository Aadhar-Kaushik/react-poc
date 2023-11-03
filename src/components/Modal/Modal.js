import React, { useContext } from "react"
import ReactDOM from "react-dom"
import CartContext from "../../ui/store/cart-context"
import classes from "./Modal.module.css"

const Content=props=>{

    const cartCtx=useContext(CartContext)
    return <div className={classes.content}>
        <div className={classes.head}>{props.head}</div>
        <div className={classes.body}>{props.body}</div>
        <div className={classes.foot}>
            <span>{props.foot}</span>
            <button className={`btn btn-primary ${classes["btn-1"]}`}>Order</button>
            <button className={`btn btn-primary ${classes["btn-2"]}`} onClick={cartCtx.hideCart}>Cancel</button>
        </div>

    </div>
}
const Backdrop=(props)=>{
    return <div className={classes.back} onClick={props.onClick}>
        
    </div>
}
const Modal=props=>{
    const cartCtx=useContext(CartContext)
return <React.Fragment>
    {ReactDOM.createPortal(<Content {...props}>{props.children}</Content>,document.getElementById("backdrop"))}
    {ReactDOM.createPortal(<Backdrop onClick={cartCtx.hideCart}/>,document.getElementById("backdrop"))}
</React.Fragment>
}

export default Modal