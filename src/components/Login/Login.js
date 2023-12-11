import { useNavigate } from "react-router-dom"
import useInput from "../../ui/custom-hooks/use-input"
import classes from "./Login.module.css"

const Login = () => {
    const navigate = useNavigate()
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

    const onClickLoginHandler = (event) => {
        event.preventDefault()
        navigate("/home")
    }

    return <div className={classes.card}>
        <h3>Login</h3>
        <form>
            <div><label>Username : </label><br /><input
                value={username}
                onChange={onChangeUsername}
                onBlur={onBlurUsername}
            />
                {usernameHasError && <p className={classes.red}>Invalid Username !</p>}
            </div>
            <div><label>Password : </label><br /><input
                value={password}
                type="password"
                onChange={onChangePassword}
                onBlur={onBlurPassword}
            /></div>
            {passwordHasError && <p className={classes.red}>Invalid Password !</p>}
            <button className={`btn btn-primary`}
                disabled={isFormDisabled}
                onClick={onClickLoginHandler}
            >Login</button>
        </form>

    </div>
}

export default Login