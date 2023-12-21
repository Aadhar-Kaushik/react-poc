import React from "react"

const LoginContext = React.createContext({
    isLoggedIn: false,
    onLogIn: (token) => { },
    onLogOut: () => { }
})

export default LoginContext