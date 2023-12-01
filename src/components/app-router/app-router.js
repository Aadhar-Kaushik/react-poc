import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Login from "../Login/Login"
import MealDetails from "../MealDetails/MealDetails"
import Meals from "../Meals/Meals"
import PageNotFound from "../PageNotFound/PageNotFound"

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} >
            <Route path="" element={<Navigate to="meals" />} />
            <Route path="meals" element={<Meals />} />
            <Route path="meals/:id/:name" element={<MealDetails />} />
            {/* <Route /> */}
        </Route>
        <Route path="/*" element={<PageNotFound />} />
    </Routes>
}

export default AppRouter