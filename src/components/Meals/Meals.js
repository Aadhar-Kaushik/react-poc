import classes from "./Meals.module.css"
import img from "../../assets/meals.jpg"
import React from "react"
import MealItems from "../MealItems/MealItems";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 23,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 13,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 19,
  },
];

const Meals = props => {
  const meals = DUMMY_MEALS.map(meal => <MealItems
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    onAdd={props.onAdd}
  />)

  return <div className={classes.meals}>
    <img src={img} />
    <ul>
      {meals}
    </ul>
  </div>
}
export default Meals