import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "../../ui/Card/Card"
import { loadConfig } from "../../ui/redux/actions"
import Cart from "../Cart/Cart"
import Header from "../Header/Header"
import Meals from "../Meals/Meals"

const Home = () => {
    // const cartCtx = useContext(CartContext)
    const isCartShown = useSelector(state => state.cart.isCartShown)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadConfig())

    }, [])
    return <>
        {isCartShown && <Cart
        />}
        <Header />
        <Meals />
    </>

}

export default Home