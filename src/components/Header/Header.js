import classes from "./Header.module.css"
const Header = props => {

    
    return <div className={classes.header}>
        <div className={classes["cart-button"]}>
            <button className="btn btn-primary" onClick={props.showCart}>Cart ({props.count}) </button>
        </div>
    </div>
}

export default Header