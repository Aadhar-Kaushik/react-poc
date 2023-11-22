import './App.css';
import React, { useContext, useState } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Card from './ui/Card/Card';
import Cart from './components/Cart/Cart';
import { useSelector } from 'react-redux';


function App() {

  // const cartCtx = useContext(CartContext)
  const isCartShown = useSelector(state => state.cart.isCartShown)

  return <Card >
    {isCartShown && <Cart
    />}
    <Header />
    <Meals />
  </Card>


}

export default App;
