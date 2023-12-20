import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { setScreenName } from "../../ui/redux/actions"
import classes from "./contacts.module.css"

const Contacts = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setScreenName("Contacts"))

    },[])

    return <>
        <div className={classes.contacts}>
            <NavLink className={classes.navLink} to="phone">Phone</NavLink>
            <NavLink className={classes.navLink} to="email">Email</NavLink>
            <NavLink className={classes.navLink} to="fax">Fax</NavLink>
        </div>
        <div className={classes.outlet}>

        <Outlet/>
        </div>
    </>
}

export default Contacts