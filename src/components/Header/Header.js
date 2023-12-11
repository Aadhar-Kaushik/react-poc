import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { toggleCart } from "../../ui/redux/actions"
import CartContext from "../../ui/store/cart-context/cart-context"
import classes from "./Header.module.css"
const Header = (props) => {
    // const cartCtx=useContext(CartContext)
    const count=useSelector(state=>state.cart.count)

    const dispatch=useDispatch()
    const params=useParams()

    
    
    return <div className={classes.header +" row"}>
        <div className="col-md-10">

        <h3 className={classes.heading}>{params["name"] || props.heading}</h3>
        </div>
        <div className={classes["cart-button"]+" col-md-2"}>
           {props.isCartBtnShown &&  <button className="btn btn-primary" onClick={()=>dispatch(toggleCart())}>Cart ({count}) </button>}
        </div>
    </div>
}

export default Header