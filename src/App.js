import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Card from './ui/Card/Card';
import Cart from './components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getMeals, loadConfig } from './ui/redux/actions';


function App() {

  // const cartCtx = useContext(CartContext)
  const isCartShown = useSelector(state => state.cart.isCartShown)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadConfig())
    
  },[])
  return <Card >
    {isCartShown && <Cart
    />}
    <Header />
    <Meals />
  </Card>


}

export default App;
