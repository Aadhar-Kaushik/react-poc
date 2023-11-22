import React from "react"

const CartContext = React.createContext({
    isCartShown: false,
    showCart: () => { },
    hideCart: () => { },
    addItemsToCart: (item) => { },
    addRemoveViaCart: (item,action) => { },
    cartItems:[],
    totalAmount:0,
    count:0

})

export default CartContext