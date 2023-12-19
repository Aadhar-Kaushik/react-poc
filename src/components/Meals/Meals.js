import classes from "./Meals.module.css"
import img from "../../assets/meals.jpg"
import React, { useEffect } from "react"
import MealItems from "../MealItems/MealItems";
import { useDispatch, useSelector } from "react-redux";
import { getMeals, setScreenName } from "../../ui/redux/actions";

const Meals = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
    setTimeout(() => {
      
      dispatch(getMeals())
    }, 1000);
    dispatch(setScreenName("MEALS"))
  },[])

 const meals=useSelector(state=>state.cart.meals)

  const mealMap = meals.map(meal => <MealItems
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}

  />)

  return <div className={classes.meals}>
    <img src={img} />
    <ul>
      {mealMap}
    </ul>
  </div>
}
export default Meals