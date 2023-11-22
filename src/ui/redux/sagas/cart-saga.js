import { call, put, select, takeLatest } from "redux-saga/effects"
import { ADD_ITEMS_TO_CART, ADD_REMOVE_VIA_CART, setCartItems, setCount, setTotalAmount } from "../actions"

function* addRemoveViaCart(payload) {
    const CURRENT_STATE = yield select()
    console.log(CURRENT_STATE)
    const itemIndex = CURRENT_STATE.cart.cartItems.findIndex(e => e.id === payload.data.item.id)
    let tmpCart = [...CURRENT_STATE.cart.cartItems]
    if (payload.data.action === "+") {

        tmpCart[itemIndex].quantity += 1
        yield put(setCount(CURRENT_STATE.cart.count + 1))
    } else {
        tmpCart[itemIndex].quantity -= 1

        yield put(setCount(CURRENT_STATE.cart.count - 1))
    }

    if (tmpCart[itemIndex].quantity === 0) {
        tmpCart = [...tmpCart.filter(e => e.id !== payload.data.item.id)]
    }

    yield put(setCartItems(tmpCart))

    const totalAmt = tmpCart.reduce((a, c) => a + c.quantity * c.price, 0)
    yield put(setTotalAmount(totalAmt))
}

function* addItemsToCart(payload) {
    const CURRENT_STATE=yield select()

    const item = CURRENT_STATE.cart.cartItems.find(e => e.id === payload.data.id)
    const itemIndex = CURRENT_STATE.cart.cartItems.findIndex(e => e.id === payload.data.id)
    const tmpCart = [...CURRENT_STATE.cart.cartItems]
    if (item) {
        tmpCart[itemIndex].quantity += payload.data.quantity

    } else {
        tmpCart.push(payload.data)
    }
    yield put(setCartItems(tmpCart))
    const newCount = payload.data.quantity
    yield put(setCount(CURRENT_STATE.cart.count + newCount))
    const totalAmt = tmpCart.reduce((a, c) => a + c.quantity * c.price, 0)
    yield put(setTotalAmount(totalAmt))
}

export function* watchAddRemoveViaCart() {
    yield takeLatest(ADD_REMOVE_VIA_CART, addRemoveViaCart)
}

export function* watchAddItemsToCart(){
    yield takeLatest(ADD_ITEMS_TO_CART,addItemsToCart)

}