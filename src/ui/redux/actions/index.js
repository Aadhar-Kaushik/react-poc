export const LOAD_CONFIG = "LOAD_CONFIG"
export const TOGGLE_CART = "TOGGLE_CART"
export const SET_CART_ITEMS = "SET_CART_ITEMS"
export const SET_TOTAL_AMOUNT = "SET_TOTAL_AMOUNT"
export const SET_COUNT = "SET_COUNT"
export const ADD_REMOVE_VIA_CART = "ADD_REMOVE_VIA_CART"
export const ADD_ITEMS_TO_CART = "ADD_ITEMS_TO_CART"
export const GET_MEALS = "GET_MEALS"
export const SET_MEALS = "SET_MEALS"
export const RESET_CART = "RESET_CART"
export const SET_NAME = "SET_NAME"
export const SUCCESS = "SUCCESS"

export const loadConfig = () => {

    return {
        type: LOAD_CONFIG
    }
}

export const toggleCart = () => {

    return {
        type: TOGGLE_CART
    }
}
export const setCartItems = (data) => {

    return {
        type: SET_CART_ITEMS,
        data
    }
}
export const setTotalAmount = (data) => {

    return {
        type: SET_TOTAL_AMOUNT,
        data
    }
}
export const setCount = (data) => {

    return {
        type: SET_COUNT,
        data
    }
}
export const addRemoveViaCart = (data) => {

    return {
        type: ADD_REMOVE_VIA_CART,
        data
    }
}
export const addItemsToCart = (data) => {

    return {
        type: ADD_ITEMS_TO_CART,
        data
    }
}
export const getMeals = () => {

    return {
        type: GET_MEALS
    }
}
export const setMeals = (data) => {

    return {
        type: SET_MEALS,
        data
    }
}
export const resetCart = () => {

    return {
        type: RESET_CART
    }
}

export const setScreenName = (name) => {
    return {
        type: SET_NAME,
        data: name
    }
}

export const success = (message) => {
    return {
        type: SUCCESS,
        message
    }
}