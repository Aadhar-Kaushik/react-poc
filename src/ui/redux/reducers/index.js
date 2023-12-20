import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import headerReducer from "./headerReducer";
import toastReducer from "./toastReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    header:headerReducer,
    toast:toastReducer
})

export default rootReducer