import { useEffect } from "react"
import { useDispatch } from "react-redux"
import img from "../../assets/meals.jpg"
import {  setScreenName } from "../../ui/redux/actions"
import classes from "./Home.module.css"

const Home = () => {
    // const cartCtx = useContext(CartContext)
    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(setScreenName("Home"))

    }, [])
    return <div className={classes.home}>
        <img src={img} />
    </div>
}

export default Home