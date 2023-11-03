import './App.css';
import React, { useContext, useState } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Card from './ui/Card/Card';
import Cart from './components/Cart/Cart';
import CartContext from './ui/store/cart-context';


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    quantity: 23,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    quantity: 16,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    quantity: 13,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    quantity: 13,
  },

];
function App() {

  const cartCtx = useContext(CartContext)

  return <Card >
    {cartCtx.isCartShown && <Cart 
    />}
    <Header />
    <Meals />
  </Card>


}

export default App;
