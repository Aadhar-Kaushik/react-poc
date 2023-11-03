import Modal from "../Modal/Modal"
import classes from "./Cart.module.css"

const Cart = props => {


    const addRemoveItemHandler = (item,action) => {
        props.onAddRemoveViaCart(item,action)
    }

 

    const head = <div>Head</div>
    let body = <p>No items in your cart !!!</p>
    if (props.cartItems && props.cartItems.length > 0) {

        body = <ul>{props.cartItems.map(e => <div className={classes.list + " row"} key={e.id}>
            <span className={classes.name + " col-6"}>{e.name}</span>
            <span className={"col-1"}>x<strong>{e.quantity}</strong></span>
            <span className="col-4" style={{ marginTop: "-20px", marginLeft: "2em" }}>
                <span className={classes.minus} onClick={addRemoveItemHandler.bind(null, e,"-")}>-</span>
                <span className={classes.plus} onClick={addRemoveItemHandler.bind(null, e,"+")}>+</span>
            </span>
        </div>)}</ul>
    }
    const foot = <div className={classes.foot}><span>Total Amount</span>:<strong>{props.totalAmount}</strong></div>
    return <div>
        <Modal head={head} body={body} foot={foot} hideCart={props.hideCart} />
    </div>
}

export default Cart