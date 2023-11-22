import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleCart } from "../../ui/redux/actions"
import CartContext from "../../ui/store/cart-context/cart-context"
import classes from "./Header.module.css"
const Header = () => {
    // const cartCtx=useContext(CartContext)
    const count=useSelector(state=>state.cart.count)

    const dispatch=useDispatch()
    
    return <div className={classes.header}>
        <div className={classes["cart-button"]}>
            <button className="btn btn-primary" onClick={()=>dispatch(toggleCart())}>Cart ({count}) </button>
        </div>
    </div>
}

export default Header