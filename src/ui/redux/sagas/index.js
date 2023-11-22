import {all} from "redux-saga/effects"
import {watchAddItemsToCart, watchAddRemoveViaCart} from "./cart-saga"
export default function* rootSaga(){
    yield all([
        watchAddRemoveViaCart(),
        watchAddItemsToCart()
    ])
}