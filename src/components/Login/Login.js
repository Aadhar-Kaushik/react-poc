import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useInput from "../../ui/custom-hooks/use-input"
import Input from "../../ui/Input/Input"
import LoginContext from "../../ui/store/login-context.js/login-context"
import classes from "./Login.module.css"

const Login = () => {
    const navigate = useNavigate()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const {
        value: username,
        isTouched: usernameIsTouched,
        isValid: usernameIsValid,
        hasError: usernameHasError,
        onChangeHandler: onChangeUsername,
        onBlurHandler: onBlurUsername,
        onResetHandler: onResetUsername
    } = useInput((val) => val.trim() !== "")

    const {
        value: password,
        isTouched: passwordIsTouched,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        onChangeHandler: onChangePassword,
        onBlurHandler: onBlurPassword,
        onResetHandler: onResetPassword
    } = useInput((val) => val.includes("@"))

    const isFormDisabled = !usernameIsValid || !passwordIsValid
    const loginCtx = useContext(LoginContext)

    const onClickLoginHandler = (event) => {
        event.preventDefault()
        if (isFormDisabled) {
            if (!usernameIsValid) {
                usernameRef.current.focus()
            } else if (passwordRef) {
                passwordRef.current.focus()
            }

            return
        }
        loginCtx.onLogIn("100")
        navigate("/home")
    }

    return <div className={classes.card} style={{height:usernameHasError && passwordHasError ?"58vh":""}}>
        <h3>Login</h3>
        <form>
            <Input
                label={"Username"}
                value={username}
                onChange={onChangeUsername}
                onBlur={onBlurUsername}
                errorMsg={"Invalid Username !"}
                errorFlag={usernameHasError}
                ref={usernameRef}
            />

            <Input
                label={"Password"}
                value={password}
                type="password"
                onChange={onChangePassword}
                onBlur={onBlurPassword}
                errorMsg={"Invalid Password !"}
                errorFlag={passwordHasError}
                ref={passwordRef}
            />

            <button className={`btn btn-primary`}
                onClick={onClickLoginHandler}
            >Login</button>
        </form>

    </div>
}

export default Login