import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./components/app-router/app-router";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Card from "./ui/Card/Card";
import { loadConfig } from "./ui/redux/actions";
import SnackBar from "./ui/SnackBar/SnackBar";


function App() {
  const isCartShown = useSelector(state => state.cart.isCartShown)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadConfig())
  }, [])
  return <Card >
    {isCartShown && <Cart
    />}
    <SnackBar/>
    <Header isCartBtnShown={true}

    />
    <AppRouter />
  </Card>

}

export default App;
