import { useSelector } from "react-redux";
import AppRouter from "./components/app-router/app-router";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Card from "./ui/Card/Card";


function App() {
  const isCartShown = useSelector(state => state.cart.isCartShown)

  return <Card >
    {isCartShown && <Cart
    />}
    <Header isCartBtnShown={true}
      
    />
    <AppRouter />
  </Card>

}

export default App;
