import { useReducer } from "react"

const inputReducer = (state, action) => {

    if (action.type === "INPUT") {

        return {
            value: action.value,
            isTouched: true
        }
    } else if (action.type === "BLUR") {

        return {
            value: state.value,
            isTouched: true
        }
    } else if (action.type === "RESET") {

        return {
            value: "",
            isTouched: false
        }
    }

    return {
        value: "",
        isTouched: false
    }
}

const useInput = (validationLogic = (input) => { }) => {
    const [input, dispatch] = useReducer(inputReducer, {
        value: "",
        isTouched: false
    })

    const onChangeHandler = event => {
        dispatch({ type: "INPUT", value: event.target.value })
    }

    const onBlurHandler = () => {
        dispatch({ type: "BLUR" })
    }
    const onResetHandler = () => {
        dispatch({ type: "RESET" })
    }

    const isValid=validationLogic(input.value)
    const hasError=!isValid && input.isTouched
    return {
        value:input.value,
        isTouched:input.isTouched,
        isValid,
        hasError,
        onChangeHandler,
        onBlurHandler,
        onResetHandler
    }
}

export default useInput