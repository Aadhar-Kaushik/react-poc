import { useState } from "react"
import LoginContext from "./login-context"

const LoginContextProvider = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onLogIn = (token) => {
        setIsLoggedIn(true)
        sessionStorage.setItem("token",token)
    }
    
    const onLogOut = () => {
        setIsLoggedIn(false)
        sessionStorage.removeItem("token")
    }
    
    const value = {
        isLoggedIn,
        onLogIn,
        onLogOut
    }
    return <LoginContext.Provider value={value}>
        {props.children}
    </LoginContext.Provider>
}

export default LoginContextProvider