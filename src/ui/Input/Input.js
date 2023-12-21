import { forwardRef, useImperativeHandle, useRef } from "react"
import classes from "./Input.module.css"

const Input = forwardRef((props, ref) => {
    const inputRef = useRef()

    const activate = () => {								
        inputRef.current.focus();							
      };
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })

    return <div><label>{props.label} : </label><br /><input
        ref={inputRef}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type || "text"}
       
    />
        {props.errorFlag && <p className={classes.red}>{props.errorMsg}</p>}
    </div>
}
)
export default Input