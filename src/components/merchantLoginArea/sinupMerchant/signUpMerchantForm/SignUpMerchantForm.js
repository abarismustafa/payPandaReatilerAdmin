
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { useEffect, useState } from "react";
import TabSignUp from "../tabSinUp/TabSignUp";
import { CountryList, isVerifiedMobileOtp, registerUser, userType } from "../../../../api/login/Login";
import { getUserDetails } from "../../../../utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function SignUpMerchantForm({ initalValue, handleChange, mobileGenerateOtpMobile, userID, mobileVeridedInput, getOtp, mobileOtp, emailVeridedInput, emailgetOtp, nextForm, emailOtp, submitOtpEmail, formResiter, setEmailVeridedInput, setMobileOtp, setMobileVerified, handleCountryCode, countryCode }) {
    // console.log(countryCode);
    // console.log(initalValue.mobileNo.length);
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [country, setCountry] = useState(null)
    // console.log(country);

    const [userId, setUserId] = useState()
    const [mobileId, setMobile] = useState()
    // console.log(userId);


    const [errorValue, setErrorValue] = useState({})


    const [count, setCount] = useState(0)

    const [otp, setOtp] = useState({
        user_id: userID,
        otp: ''
    })

    const [resiter, setResister] = useState({
        email: '',
        mobile: mobileId,
        user_type_id: "65e2f15785bfd78f9866c090",
        name: '',
        password: ''
    })

    const countryget = async () => {
        try {
            const res = await CountryList()
            setCountry(res?.data)
        } catch (error) {

        }

    }
    useEffect(() => {
        countryget()
    }, [])



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

    const otpChandleChange = (e) => {
        const clone = { ...otp }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setOtp(clone)
    }

    const handleResiter = (e) => {
        const clone = { ...resiter }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setResister(clone)
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-center",
        });
    };

    const userTypeget = async () => {
        try {
            const res = await userType()
            setData(res?.data)
        } catch (error) {
        }
    }

    const tabChange = (i, id) => {
        setUserId(id)
        const clone = { ...resiter, user_type_id: id }
        setResister(clone)
        setCount(i)
    }
    // useEffect(() => {
    //     setUserId(data?.[0]?._id)
    // }, [data])
    useEffect(() => {
        userTypeget()
    }, [])

    // const getOtp = () => {
    //     mobileGenerateOtpMobile()
    //     setMobileVerified(false)
    //     setMobileOtp(true)
    // }
    const submitOtp = async () => {
        // debugger
        try {
            const res = await isVerifiedMobileOtp({ ...otp, user_id: userID })
            console.log(res?.data);
            setMobile(res?.data?.data?.user);
            if (res?.status == '200') {
                getUserDetails(res?.data?.user)
                toastSuccessMessage(res.data.data.message)
                // debugger
                setTimeout(() => {
                    setEmailVeridedInput(true)
                    setMobileOtp(false)
                    setMobileVerified(false)
                }, 2000)
            }
            // console.log(res);
        } catch (error) {

        }
    }

    const handleSubmit = async (event) => {
        const cloen = { ...resiter, mobile: mobileId }
        event.preventDefault()
        setErrorValue(validation(cloen))

        try {
            const res = await registerUser(cloen)
            if (res?.statusCode == '200') {
                toastSuccessMessage(res?.data?.message)
                // debugger
                setTimeout(() => {
                    navigate('/login-area')
                }, 2000)
            }
        } catch (error) {
            console.log(error);
            // toastSuccessMessage(res?.data?.message)
        }

    }

    // const emailgetOtp = () => {
    //     // setEmailVeridedInput(false)
    //     setEmailOtp(true)
    //     setEmailVeridedInput(false)
    // }

    // const submitOtpEmail = () => {
    //     setFormResiter(true)
    //     setEmailVeridedInput(false)
    //     setEmailOtp(false)
    // }

    // const nextForm = () => {
    //     setFormResiter(true)
    //     setEmailVeridedInput(false)
    // }

    return (
        <>

            <div className="mt-3">
                {/* {mobileVeridedInput && } */}
                <>
                    {mobileVeridedInput ? <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                                <span className="input-group-text input-group-text-2" id="basic-addon1" >
                                    <select class="form-select" aria-label="Default select example" value={countryCode} onChange={handleCountryCode}>
                                        <option selected>select Country</option>
                                        {country && country?.map((item) => {
                                            return <option >{item?.code}</option>
                                        })}
                                    </select>
                                </span>
                                <input type="text" className="form-control" placeholder="Enter Mobile Number" name="mobileNo" value={initalValue.mobileNo} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                                <button type="button" disabled={initalValue.mobileNo.length == 13 ? false : true} className="form-control btn btn-login" onClick={getOtp}>Get OTP</button>
                            </div>
                        </div>
                    </div> : <></>
                    }
                </>

                <>

                    {mobileOtp ? <> <div className="col-lg-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                            <input type="number" className="form-control" placeholder="Enter OTP" name="otp" value={otp.otp} onChange={otpChandleChange} />
                        </div>
                    </div>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                                <button type="button" className="form-control btn btn-login" disabled={otp.otp.length == 6 ? false : true} onClick={submitOtp}>Submit OTP</button>
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
                            <button type="button" className="form-control btn btn-login me-1" onClick={nextForm}>Get OTP</button>
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




                {formResiter ? <TabSignUp data={data} count={count} tabChange={tabChange} /> : <></>}
                {formResiter ? <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><FaRegUser /></span>
                                <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={resiter.name} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.name}
                            </p>
                        </div>
                        <div className="col-lg-6  mb-3">
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><MdOutlineEmail /></span>
                                <input type="text" className="form-control" placeholder="Enter Your Email" name="email" value={resiter.email} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.email}
                            </p>
                        </div>
                        <div className="col-lg-6   mb-3">
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                                <input type="password" className="form-control" placeholder="Enter Your Password" name="password" value={resiter.password} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.name}
                            </p>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaRegUser /></span>
                                <input type="text" className="form-control" placeholder="Refer Code" />
                            </div>
                        </div> */}
                        <div>
                            <button type="button" disabled={!resiter.name || !resiter.email || !resiter.password} className="btn btn-login" onClick={handleSubmit}>REGISTER</button>
                        </div>
                    </div>
                </form> : <></>}


            </div>
        </>
    )
}
export default SignUpMerchantForm