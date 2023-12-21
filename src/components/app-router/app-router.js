import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import AuthGuard from "../../ui/AuthGuard/AuthGuard"


const Home = React.lazy(() => import("../Home/Home"))
const Login = React.lazy(() => import("../Login/Login"))
const MealDetails = React.lazy(() => import("../MealDetails/MealDetails"))
const Meals = React.lazy(() => import("../Meals/Meals"))
const PageNotFound = React.lazy(() => import("../PageNotFound/PageNotFound"))
const UserDetails = React.lazy(() => import("../UserDetails/UserDetails"))
const About = React.lazy(() => import("../about/About"))
const Contacts = React.lazy(() => import("../contacts/contacts"))
const Phone = React.lazy(() => import("../contacts/Phone"))
const Fax = React.lazy(() => import("../contacts/Fax"))
const Email = React.lazy(() => import("../contacts/Email"))


const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<AuthGuard component={Contacts} />}>
            <Route path="phone" element={<AuthGuard component={Phone}/> } />
            <Route path="email" element={<AuthGuard component={Email}/> } />
            <Route path="fax" element={<AuthGuard component={Fax}/> } />
        </Route>
        <Route path="/about" element={<AuthGuard component={About} />} />
        <Route path="meals" element={<AuthGuard component={Meals} />} />
        <Route path="meals/:id/:name" element={<AuthGuard component={MealDetails} />} />
        <Route path="/home" element={<AuthGuard component={Home} />} />
        <Route path="/user-details" element={<AuthGuard component={UserDetails} />} />
        <Route path="/*" element={<PageNotFound />} />
    </Routes>
}

export default AppRouter