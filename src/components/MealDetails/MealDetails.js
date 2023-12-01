import classes from "./MealDetails.module.css"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const MealDetails = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const pathVar = useParams()
    const location = useLocation()
    const search = new URLSearchParams(location.search)

    useEffect(() => {
        console.log("UseEffect")
        return () => {
            console.log("Clean-up")

        }
    }, [toggle])

    return <div className={classes.table}>
        <button className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
        <button className="btn btn-primary" onClick={() => setToggle(prev=>!prev)}>Toggle</button>

        <table>
            <tr>
                <th>Parameter</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>ID</td>
                <td>{pathVar.id}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{pathVar.name}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>{search.get("desc")}</td>
            </tr>
            <tr>
                <td>Price</td>
                <td>{search.get("price")}</td>
            </tr>
        </table>

    </div>
}

export default MealDetails