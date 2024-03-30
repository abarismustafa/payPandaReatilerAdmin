import { useState } from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { userLogin } from "../../../api/login/Login";
import { SaveUserDeatilsLocalStorage } from "../../../utils/localStorage";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
function MerchantLoginForm({ handleSubmitChange }) {
    const [initialValue, setInitialValue] = useState({
        entity: '',
        password: ''
    })

    const [errorValue, setErrorValue] = useState({})
    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };
    const validation = (values) => {
        const error = {}
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            error.name = "Name is Required!"

        }

        if (!values.email) {
            error.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            error.email = "Invalid Email";
        }
        if (!values.password) {
            error.password = "Password is Required!"

        }


        return error

    }

    const handleUser = (e) => {
        const clone = { ...initialValue }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setInitialValue(clone)
    }

    const navigate = useNavigate()

    const handleSubmit = async () => {
        // console.log(initialValue);
        // event.preventDefault()
        // setErrorValue(validation(initialValue))
        try {
            const res = await userLogin(initialValue)
            SaveUserDeatilsLocalStorage(res?.data?.user)
            // console.log(res);
            if (res.statusCode == 200) {
                toastSuccessMessage('Login Successfully')
                setTimeout(() => {
                    navigate('/registrationComplete')
                }, 1000);
            }
        } catch (error) {

        }
    }


    return (
        <>
            <ToastContainer />
            <div className="mobile-login-phone">
                <form action="" >
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span>
                        <input type="text" className="form-control" placeholder="Enter Mobile Number / Enter Email" name="entity" value={initialValue?.entity} onChange={handleUser} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                        <input type="password" className="form-control" placeholder="Enter password" name="password" value={initialValue?.password} onChange={handleUser} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-login" onClick={handleSubmit}>LOGIN</button>
                    </div>
                </form>
                <div className="text-align-center mt-1">
                    <a href="#" onClick={handleSubmitChange}>Forgot Password ?</a>
                </div>

            </div>
        </>
    )
}
export default MerchantLoginForm