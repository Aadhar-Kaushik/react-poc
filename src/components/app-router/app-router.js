import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Login from "../Login/Login"
import PageNotFound from "../PageNotFound/PageNotFound"

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageNotFound />} />
    </Routes>
}

export default AppRouter