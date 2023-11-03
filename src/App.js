import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Card from './ui/Card';
import Cart from './components/Cart/Cart';


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
  const [cartItems, setCartItems] = useState([])
  const [isCartShown, setIsCartShown] = useState(false)
  const [count, setCount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const onAdd = (newItem) => {
    const item = cartItems.find(e => e.id === newItem.id)
    const itemIndex = cartItems.findIndex(e => e.id === newItem.id)
    const tmpCart = [...cartItems]
    if (item) {
      tmpCart[itemIndex].quantity += newItem.quantity

    } else {
      tmpCart.push(newItem)
    }
    setCartItems(tmpCart)
    const newCount = newItem.quantity
    setCount(prev => prev + newCount)
    const totalAmt = tmpCart.reduce((a, c) => a + c.quantity * c.price, 0)
    setTotalAmount(totalAmt)
  }


  const onAddRemoveViaCart = (newItem, action) => {

    
    const itemIndex = cartItems.findIndex(e => e.id === newItem.id)
    let tmpCart = [...cartItems]
    if(action==="+"){

      tmpCart[itemIndex].quantity+= 1
      setCount(prev => prev + 1)
    }else{
      tmpCart[itemIndex].quantity-= 1
      
      setCount(prev => prev -1)
    }
    if(tmpCart[itemIndex].quantity===0){
     tmpCart= [...tmpCart.filter(e=>e.id!==newItem.id)]
    }

    setCartItems(tmpCart)
    
    const totalAmt = tmpCart.reduce((a, c) => a + c.quantity * c.price, 0)
    setTotalAmount(totalAmt)
  }

  const showCartHandler = () => {
    setIsCartShown(true)
  }
  const hideCartHandler = () => {
    setIsCartShown(false)
  }
  return <Card >
    {isCartShown && <Cart cartItems={cartItems} hideCart={hideCartHandler} totalAmount={totalAmount}
      onAddRemoveViaCart={onAddRemoveViaCart}
    />}
    <Header count={count} showCart={showCartHandler} />
    <Meals onAdd={onAdd} />
  </Card>


}

export default App;
