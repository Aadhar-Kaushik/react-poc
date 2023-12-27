import React from "react"

const MealId=({handleCallback,id,show})=>{
    console.log("MealId")

    return <p>{show ? id : "****"}</p>
}

export default React.memo(MealId)