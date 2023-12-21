import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./components/app-router/app-router";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Card from "./ui/Card/Card";
import { loadConfig } from "./ui/redux/actions";
import SnackBar from "./ui/SnackBar/SnackBar";
import LoginContext from "./ui/store/login-context.js/login-context";


function App() {
  const isCartShown = useSelector(state => state.cart.isCartShown)
  const dispatch = useDispatch()
  const loginCtx=useContext(LoginContext)
  useEffect(() => {
    dispatch(loadConfig())
    loginCtx.onLogOut()
  }, [])
  
  return <Card >
    {loginCtx.isLoggedIn && <>
    {isCartShown && <Cart
    />}
    <SnackBar/>
    <Header isCartBtnShown={true}
    />
    </>}
    <AppRouter />
  </Card>

}

export default App;
