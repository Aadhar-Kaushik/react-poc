import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import headerReducer from "./headerReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    header:headerReducer
})

export default rootReducer