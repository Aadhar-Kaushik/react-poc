import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setScreenName } from "../../ui/redux/actions"
import classes from "./Test.module.css"

const TestWithJest = (props) => {

    // const dispatch = useDispatch()
    const [count, setCount] = useState(props.initialCount || 0)
    // useEffect(() => {
    //     dispatch(setScreenName("ABOUT"))
    // }, [])

    const onClickIncrementHandler=()=>{
        setCount(prev=>prev+1)
    }
    const onClickDecrementHandler=()=>{
        setCount(prev=>prev-1)
    }
    const onClickResetHandler=()=>{
        setCount(0)
    }
    const onClickSwitchSignHandler=()=>{
        setCount(prev=>prev*(-1))
    }

    return <div>
        <h1 className={classes.count}>Count <h3 data-testid="id-counter">{count}</h3></h1>
        <div className={classes.action}>
            <button onClick={onClickIncrementHandler}>Increment</button>
            <button onClick={onClickDecrementHandler}>Decrement</button>
            <button onClick={onClickResetHandler}>Reset</button>
            <button onClick={onClickSwitchSignHandler}>Switch Sign</button>
        </div>
    </div>
}
export default TestWithJest