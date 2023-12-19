import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const Home = React.lazy(() => import("../Home/Home"))
const Login = React.lazy(() => import("../Login/Login"))
const MealDetails = React.lazy(() => import("../MealDetails/MealDetails"))
const Meals = React.lazy(() => import("../Meals/Meals"))
const PageNotFound = React.lazy(() => import("../PageNotFound/PageNotFound"))
const UserDetails = React.lazy(() => import("../UserDetails/UserDetails"))
const About = React.lazy(() => import("../about/About"))

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="meals" element={<Meals />} />
        <Route path="meals/:id/:name" element={<MealDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/*" element={<PageNotFound />} />
    </Routes>
}

export default AppRouter