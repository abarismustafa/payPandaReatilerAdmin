
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
function SignUpMerchantForm() {

    const [mobileVeridedInput, setMobileVerified] = useState(true)
    const [mobileOtp, setMobileOtp] = useState(false)
    const [emailVeridedInput, setEmailVeridedInput] = useState(false)
    const [emailOtp, setEmailOtp] = useState(false)
    const [formResiter, setFormResiter] = useState(false)

    const getOtp = () => {
        setMobileVerified(false)
        setMobileOtp(true)
    }

    const submitOtp = () => {
        setEmailVeridedInput(true)
        setMobileOtp(false)
        setMobileVerified(false)
    }

    const emailgetOtp = () => {
        // setEmailVeridedInput(false)
        setEmailOtp(true)
        setEmailVeridedInput(false)
    }

    const submitOtpEmail = () => {
        setFormResiter(true)
        setEmailVeridedInput(false)
        setEmailOtp(false)
    }

    const nextForm = () => {
        setFormResiter(true)
        setEmailVeridedInput(false)
    }


    return (
        <>

            <div className="mt-3">
                {/* {mobileVeridedInput && } */}

                <>
                    {mobileVeridedInput ? <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                                <input type="number" className="form-control" placeholder="Enter Mobile Number" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                                <button type="button" className="form-control btn btn-login" onClick={getOtp}>Get OTP</button>
                            </div>
                        </div>
                    </div> : <></>
                    }
                </>

                <>

                    {mobileOtp ? <> <div className="col-lg-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                            <input type="number" className="form-control" placeholder="Enter OTP" />
                        </div>
                    </div>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                                <button type="button" className="form-control btn btn-login" onClick={submitOtp}>Submit OTP</button>
                            </div>
                        </div> </> : <></>}
                </>



                {emailVeridedInput ? <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                            <input type="number" className="form-control" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                            <button type="button" className="form-control btn btn-login me-1" onClick={emailgetOtp}>Get OTP</button>
                            <button type="button" className="form-control btn btn-login" onClick={nextForm}>Next</button>
                        </div>
                    </div>
                </div> : <>
                </>}



                {emailOtp ? <> <div className="col-lg-12">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                        <input type="number" className="form-control" placeholder="Email Enter OTP" />
                    </div>
                </div>
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                            <button type="button" className="form-control btn btn-login" onClick={submitOtpEmail}>Submit OTP</button>
                        </div>
                    </div> </> : <></>}





                {formResiter ? <form action="">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaRegUser /></span>
                                <input type="text" className="form-control" placeholder="Enter Your Name" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><MdOutlineEmail /></span>
                                <input type="text" className="form-control" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                                <input type="password" className="form-control" placeholder="Enter Your Password" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaRegUser /></span>
                                <input type="text" className="form-control" placeholder="Refer Code" />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-login">REGISTER</button>
                        </div>
                    </div>
                </form> : <></>}


            </div>
        </>
    )
}
export default SignUpMerchantForm