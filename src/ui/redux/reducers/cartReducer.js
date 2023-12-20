import { RESET_CART, SET_CART_ITEMS, SET_COUNT, SET_MEALS, SET_TOTAL_AMOUNT, TOGGLE_CART } from "../actions"
const INITIAL_STATE = {
    isCartShown: false,
    cartItems: [],
    totalAmount: 0,
    count: 0,
    meals: []
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                isCartShown: !state.isCartShown
            }

        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.data
            }

        case SET_TOTAL_AMOUNT:
            return {
                ...state,
                totalAmount: action.data
            }

        case SET_COUNT:
            return {
                ...state,
                count: action.data
            }
        case SET_MEALS:
            return {
                ...state,
                meals: action.data

            }
        case RESET_CART:
            return {
                ...state,
                isCartShown: false,
                cartItems: [],
                totalAmount: 0,
                count: 0,
            }
        default:
            return state
    }
}
export default cartReducer