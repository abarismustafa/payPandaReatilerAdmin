import { useState } from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { isVerifiedMobileOtp, resetApi } from "../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
function MerchantResetPassword({ handleSubmitBack, getOtp, resetOtp, OtpUp, openReset, handleChange, initalValue, userId, setOtpUp, setOpenReset, setLoginForm }) {

    const [resetInitialValue, setResetInitialValue] = useState({
        user_id: '',
        password: '',
        repassword: ''
    })

    const [otp, setOtp] = useState({
        user_id: userId,
        otp: ''
    })

    const toastSuccessMessage = (data) => {
        toast.success(`${data}`, {
            position: "top-center",
        });
    };

    const otpChandleChange = (e) => {
        const clone = { ...otp }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setOtp(clone)
    }

    const submitOtp = async () => {
        try {
            const res = await isVerifiedMobileOtp({ ...otp, user_id: userId })
            // setMobile(res?.data?.data?.user);
            if (res?.data?.statusCode == '200') {
                // getUserDetails(res?.data?.user)
                toastSuccessMessage(res?.data?.data?.message)
                // debugger
                setTimeout(() => {
                    setOtpUp(false)
                    setOpenReset(true)
                }, 2000)
            }
            // console.log(res);
        } catch (error) {

        }
        // setOtpUp(false)
        // setOpenReset(true)
    }

    const resendHandler = (e) => {
        const clone = { ...resetInitialValue }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setResetInitialValue(clone)

    }
    const handleSubmit = async () => {
        const cloen = { ...resetInitialValue, user_id: window.localStorage.getItem("forgotUser") }
        try {
            const res = await resetApi(cloen)
            console.log(res?.data.data.message);
            if (res?.data?.statusCode == "200") {
                toastSuccessMessage(res?.data?.data?.message)
                setTimeout(() => {
                    window.location.reload()
                }, 400)
            }
        } catch (error) {

        }

    }
    return (
        <>
            <>
                {resetOtp ? <div className="mobile-login-phone">
                    <form action="" >
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span>
                            <input type="text" className="form-control" placeholder="Enter Mobile Number" name="mobileNo" value={initalValue.mobileNo} onChange={handleChange} />
                        </div>
                        <div>
                            <button type="button" className="btn btn-login" disabled={initalValue.mobileNo.length == 13 ? false : true} onClick={getOtp}>Send OTP</button>
                        </div>
                    </form>
                    <div className="text-align-center mt-1">
                        <a href="#" onClick={handleSubmitBack}>Back To Sign In</a>
                    </div>
                </div> : <></>}
            </>


            {OtpUp ? <div className="mobile-login-phone">
                <form action="" >
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span>
                        <input type="number" className="form-control" placeholder="Enter OTP" name="otp" value={otp.otp} onChange={otpChandleChange} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-login" disabled={otp.otp.length == 6 ? false : true} onClick={submitOtp}>Submit Otp</button>
                    </div>
                </form>
                <div className="text-align-center mt-1">
                    <a href="#" onClick={handleSubmitBack}>Back To Sign In</a>
                </div>

            </div> : <></>}


            {openReset ? <div className="mobile-login-phone">
                <form action="" >
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span>
                        <input type="text" className="form-control" placeholder="Enter password" name="password" value={resetInitialValue?.password} onChange={resendHandler} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                        <input type="password" className="form-control" placeholder="Enter Re password" name="repassword" value={resetInitialValue?.repassword} onChange={resendHandler} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-login" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                <div className="text-align-center mt-1">
                    <a href="#" onClick={handleSubmitBack}>Back To Sign In</a>
                </div>

            </div> : <></>}
            <ToastContainer />
        </>
    )
}
export default MerchantResetPassword