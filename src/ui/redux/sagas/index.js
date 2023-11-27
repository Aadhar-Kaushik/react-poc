import {all} from "redux-saga/effects"
import {watchAddItemsToCart, watchAddRemoveViaCart, watchGetMeals} from "./cart-saga"
import { watchLoadExternalConfig } from "./login-saga"
export default function* rootSaga(){
    yield all([
        watchAddRemoveViaCart(),
        watchAddItemsToCart(),
        watchGetMeals(),
        watchLoadExternalConfig()
    ])
}