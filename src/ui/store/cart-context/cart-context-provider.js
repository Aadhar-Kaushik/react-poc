import { useState } from "react"
import CartContext from "./cart-context"

const CartContextProvider = props => {
    const [isCartShown, setIsCartShown] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)


    const showCart = () => {
        setIsCartShown(true)
    }
    const hideCart = () => {
        setIsCartShown(false)

    }

    const addRemoveViaCart = (newItem, action) => {


        const itemIndex = cartItems.findIndex(e => e.id === newItem.id)
        let tmpCart = [...cartItems]
        if (action === "+") {

            tmpCart[itemIndex].quantity += 1
            setCount(prev => prev + 1)
        } else {
            tmpCart[itemIndex].quantity -= 1

            setCount(prev => prev - 1)
        }
        if (tmpCart[itemIndex].quantity === 0) {
            tmpCart = [...tmpCart.filter(e => e.id !== newItem.id)]
        }

        setCartItems(tmpCart)

        const totalAmt = tmpCart.reduce((a, c) => a + c.quantity * c.price, 0)
        setTotalAmount(totalAmt)
    }

    const addItemsToCart = (newItem) => {
        const item = cartItems.find(e => e.id === newItem.id)
        const itemIndex = cartItems.findIndex(e => e.id === newItem.id)
        const tmpCart = [...cartItems]
        if (item) {
            tmpCart[itemIndex].quantity += newItem.quantity

        } else {
            tmpCart.push(newItem)
        }
        setCartItems(tmpCart)
        const newCount = newItem.quantity
        setCount(prev => prev + newCount)
        const totalAmt = tmpCart.reduce((a, c) => a + c.quantity * c.price, 0)
        setTotalAmount(totalAmt)
    }

    const value = {
        isCartShown,
        showCart,
        hideCart,
        addItemsToCart,
        addRemoveViaCart,
        cartItems,
        totalAmount,
        count
    }
    return < CartContext.Provider value={value} >
        {props.children}
    </CartContext.Provider >
}

export default CartContextProvider