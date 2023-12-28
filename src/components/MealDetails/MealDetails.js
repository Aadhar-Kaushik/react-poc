import classes from "./MealDetails.module.css"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setScreenName } from "../../ui/redux/actions"
import MealPrice from "./MealPrice"
import MealId from "./MealId"
import MealDesc from "./MealDesc"
import styled from "styled-components"

const StyledButton=styled.button`
font: inherit;								
padding: 0.5rem 1.5rem;
border: 1px solid #8b005d;
color: white;
background: #4e4eff;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
cursor: pointer;

&:hover{
    background:salmon
}
`

const MealDetails = () => {
    const navigate = useNavigate()
    const [showFlag, setShowFlag] = useState(false)
    const [allowFlag, setAllowFlag] = useState(false)
    const pathVar = useParams()
    const location = useLocation()
    const search = new URLSearchParams(location.search)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setScreenName(pathVar.name))
    }, [])

    useEffect(() => {
        console.log("UseEffect::::::::::")
        return () => {
            console.log("Clean-up:::::::::::")

        }
    },[])


    const handleCallback = useCallback(() => {
        // if we remove useCallback, ItemDesc will get rerendered even if it is not using 
        // showFlag as when MealDetails rerenders handleCallback will get created
        // and thus MealDetails using handleCallback will point to new function location
        // by using useCallback, new handleCallback function will not get created
        // When allowFlag changed MealDetails will get rerendered
        //  handleCallback will get recreated and since MealId, MealPrice and MealDesc
        // are using handleCallback, all these 3 components will get rerendered

    }, [allowFlag])

    return <>
        <div className={classes.table}>
            <button className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
            <StyledButton onClick={() => setAllowFlag(prev => !prev)}>
                Re-render callback
            </StyledButton>
            <StyledButton onClick={() => setShowFlag(prev => !prev)}>
                <div>Show Values</div>
                <div>(For UseEffect)</div>
                <div>(For React.memo)</div>
                {/* MealPrice, MealId show values changing but MealDesc show values
                 not changing hence not getting rerendered using React.memo() */}
            </StyledButton>
            <table>
                <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>ID</td>
                    <td><MealId show={showFlag} id={pathVar.id} handleCallback={handleCallback} /></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{pathVar.name}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td><MealDesc show={true} desc={search.get("desc")} handleCallback={handleCallback} /></td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td><MealPrice show={showFlag} price={search.get("price")} handleCallback={handleCallback} /></td>
                </tr>
            </table>

        </div>

    </>
}

export default MealDetails