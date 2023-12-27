import React from "react"

const MealDesc=({handleCallback,show,desc})=>{
    console.log("MealDesc")

    return <p>{show ? desc : "****"}</p>
}

export default React.memo(MealDesc)