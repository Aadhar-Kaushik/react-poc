import React from "react"

const MealPrice = ({handleCallback,price,show}) => {

    console.log("MealPrice")
    return <p>{show ? "$"+price : "$****"}</p>
}
export default React.memo(MealPrice)