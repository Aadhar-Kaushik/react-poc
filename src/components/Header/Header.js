import { useContext } from "react"
import CartContext from "../../ui/store/cart-context"
import classes from "./Header.module.css"
const Header = () => {
    const cartCtx=useContext(CartContext)
    
    return <div className={classes.header}>
        <div className={classes["cart-button"]}>
            <button className="btn btn-primary" onClick={cartCtx.showCart}>Cart ({cartCtx.count}) </button>
        </div>
    </div>
}

export default Header