import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthGuard=(props)=>{

    const navigate=useNavigate()
    useEffect(()=>{
        if(!sessionStorage.getItem("token")){
            navigate("/")
        }
    })
    return <props.component/>
}

export default AuthGuard