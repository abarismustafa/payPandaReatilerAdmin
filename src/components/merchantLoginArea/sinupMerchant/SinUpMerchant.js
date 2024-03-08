import { useEffect, useState } from "react"
import MerchantLoginAreaBanner from "../../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner"
import MerchantLoginHeader from "../../../common/merchantLoginHeader/MerchantLoginHeader"
import SignUpMerchantForm from "./signUpMerchantForm/SignUpMerchantForm"
import TabSignUp from "./tabSinUp/TabSignUp"
import { isMobileExits, mobileGenerateOtp, userType } from "../../../api/login/Login"
import { ToastContainer, toast } from "react-toastify"


function SignUpMerchant() {
    const [mobileVeridedInput, setMobileVerified] = useState(true)
    const [mobileOtp, setMobileOtp] = useState(false)
    const [emailVeridedInput, setEmailVeridedInput] = useState(false)
    const [emailOtp, setEmailOtp] = useState(false)
    const [formResiter, setFormResiter] = useState(false)

    const [userID, setUserID] = useState()

    const [initalValue, setInitialValue] = useState({
        mobileNo: '91',
    })

    const handleChange = (e) => {
        
        const clone = { ...initalValue }
        const vlaue = e.target.value
        const name = e.target.name
      
        clone[name] = vlaue
        if (clone.mobileNo?.length == 13) {
            return
         }
        setInitialValue(clone)
        if (clone.mobileNo?.length == 12) {
            isMobileExit(initalValue.mobileNo)
        }
       
        const verifyMobile = verifiedPhone(initalValue.mobileNo)
        // if (verifyMobile) {
        //     isMobileExit(initalValue.mobileNo)
        // }

    }

    const verifiedPhone = (input) => {
        const regexMobileNumber = /^[0-9]{10}$/;
        if (input.match(regexMobileNumber)) {
            return true;
        } else {
            return false;
        }
    }

    const isMobileExit = async (value) => {
        try {
            const res = await isMobileExits(value)
            if (res?.data?.isisExist == true) {
                alert('Mobile Exit')
            } else {
            }
        } catch (error) {

        }
    }


    const toastSuccessMessage = () => {
        toast.success(`OTP Send Successfully.`, {
            position: "top-center",
        });
    };

    const mobileGenerateOtpMobile = async () => {

        try {
            const res = await mobileGenerateOtp(initalValue)
            console.log(res?.data);
            setUserID(res?.data?.data?.user);
            if (res?.data?.statusCode == '200') {
                toastSuccessMessage();
                setMobileVerified(false)
                setMobileOtp(true)
            }

        } catch (error) {

        }
    }

    const getOtp = () => {
        mobileGenerateOtpMobile()
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
            <MerchantLoginHeader />
            <MerchantLoginAreaBanner title='merchant Create account' />
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="login-area-sec">
                                <h1 className="text-align-center">Signup</h1>

                                <SignUpMerchantForm
                                    mobileVeridedInput={mobileVeridedInput}
                                    getOtp={getOtp}
                                    mobileOtp={mobileOtp}
                                    emailVeridedInput={emailVeridedInput}
                                    emailgetOtp={emailgetOtp}
                                    nextForm={nextForm}
                                    emailOtp={emailOtp}
                                    submitOtpEmail={submitOtpEmail}
                                    formResiter={formResiter}
                                    setEmailVeridedInput={setEmailVeridedInput}

                                    setMobileOtp={setMobileOtp}
                                    setMobileVerified={setMobileVerified}

                                    initalValue={initalValue}
                                    handleChange={handleChange}
                                    mobileGenerateOtpMobile={mobileGenerateOtpMobile}
                                    userID={userID}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </section>

        </>
    )
}
export default SignUpMerchant