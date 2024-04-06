import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation, useParams } from "react-router-dom"
import { toggleCart } from "../../ui/redux/actions"
import CartContext from "../../ui/store/cart-context/cart-context"
import classes from "./Header.module.css"
const Header = (props) => {
    // const cartCtx=useContext(CartContext)
    const count = useSelector(state => state.cart.count)
    const screenName = useSelector(state => state.header)
    const dispatch = useDispatch()
    const params = useParams()


    return <div className={classes.header} >
        <ul >
            <li>
                <NavLink className={classes.navlink} to="/home"
                    style={({ isActive }) => { return { color: isActive ? "skyblue" : "" } }}
                >Home</NavLink></li>
            <li>
                <NavLink className={classes.navlink} to="/about"
                    style={({ isActive }) => { return { color: isActive ? "skyblue" : "" } }}
                >About</NavLink></li>
            <li>
                <NavLink className={classes.navlink} to="/meals"
                    style={({ isActive }) => { return { color: isActive ? "skyblue" : "" } }}
                >Menu</NavLink></li>
            <li>
                <NavLink className={classes.navlink} to="/contact"
                    style={({ isActive }) => { return { color: isActive ? "skyblue" : "" } }}
                >Contact</NavLink></li>
            <li>
                <NavLink className={classes.navlink} to="/test-with-jest"
                    style={({ isActive }) => { return { color: isActive ? "skyblue" : "" } }}
                >Test</NavLink></li>
        </ul>
        <div>

            <h3 className={classes.heading}>{params["name"] || screenName}</h3>
        </div>
        <div className={classes["cart-button"] }>
            {props.isCartBtnShown && <button className="btn btn-primary" onClick={() => dispatch(toggleCart())}>Cart ({count}) </button>}
        </div>
    </div>
}

export default Header