import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../redux/actions';

const SnackBar = () => {
    const toastRef = useRef(null)
    const toast = useSelector(state => state.toast)
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const onHideHandler = () => {
        dispatch(resetCart())
        navigate("/home")
    }

    useEffect(() => {
        toastRef.current.show(toast)
    }, [toast])

    return <Toast ref={toastRef} position="center" onHide={onHideHandler} />
}

export default SnackBar