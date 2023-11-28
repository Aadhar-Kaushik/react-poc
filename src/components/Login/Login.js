import classes from "./Login.module.css"

const Login = () => {

    
    return <div className={classes.card}>
        <h3>Login</h3>
        <form>
        <div><label>Username : </label><br/><input/></div>
        <br/>
        <div><label>Password : </label><br/><input/></div>
        <button className={`btn btn-primary`}>Login</button>
        </form>

    </div>
}

export default Login