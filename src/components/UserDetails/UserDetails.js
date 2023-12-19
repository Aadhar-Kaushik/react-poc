import { useNavigate } from "react-router-dom"
import useInput from "../../ui/custom-hooks/use-input"
import Header from "../Header/Header"
import classes from "./UserDetails.module.css"
const UserDetails = () => {

    const {
        value: name,
        isTouched: nameIsTouched,
        isValid: nameIsValid,
        hasError: nameHasError,
        onChangeHandler: onChangeNameHandler,
        onBlurHandler: onBlurNameHandler,
        onResetHandler: onResetNameHandler
    } = useInput(name => name.trim().length > 0)

    const {
        value: contact,
        isTouched: contactIsTouched,
        isValid: contactIsValid,
        hasError: contactHasError,
        onChangeHandler: onChangeContactHandler,
        onBlurHandler: onBlurContactHandler,
        onResetHandler: onResetContactHandler
    } = useInput(contact => !isNaN(contact))

    const {
        value: address,
        isTouched: addressIsTouched,
        isValid: addressIsValid,
        hasError: addressHasError,
        onChangeHandler: onChangeAddressHandler,
        onBlurHandler: onBlurAddressHandler,
        onResetHandler: onResetAddressHandler
    } = useInput(address => address.trim().length > 0)

    const navigate = useNavigate()

    const onClickPaymentHandler = event => {
        event.preventDefault()
    }

    const onClickCancelHandler = () => {
        navigate("/home")
    }

    const isPaymentDisabled = !nameIsValid || !contactIsValid || !addressIsValid

    return <>
        <div className={classes.cover}>

            <form className={classes.form}>
                <table>
                    <tr>
                        <td>
                            <label htmlFor="name">Name :</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                value={name}
                                onChange={onChangeNameHandler}
                                onBlur={onBlurNameHandler}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>

                            {nameHasError && <span className={classes.error}>Please enter name</span>}
                        </td>

                    </tr>
                    <br />

                    <tr>
                        <td>
                            <label htmlFor="contact">Contact :</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                value={contact}
                                onChange={onChangeContactHandler}
                                onBlur={onBlurContactHandler}
                            />

                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>

                            {contactHasError && <span className={classes.error}>Please enter valid number</span>}
                        </td>

                    </tr>
                    <br />
                    <tr>
                        <td>
                            <label htmlFor="name">Address :</label>
                        </td>
                        <td>
                            <textarea
                                cols="40"
                                rows="5"
                                type="text"
                                value={address}
                                onChange={onChangeAddressHandler}
                                onBlur={onBlurAddressHandler}
                            />

                        </td>
                    </tr>
                </table>
                <div className={classes.actions}>
                    <button className="btn btn-light" type="button"
                        onClick={onClickCancelHandler}

                    >Cancel</button>
                    <button className="btn btn-primary"
                        type="submit"
                        onClick={onClickPaymentHandler}
                        disabled={isPaymentDisabled}>Payment</button>
                </div>
            </form>
        </div>
    </>
}

export default UserDetails