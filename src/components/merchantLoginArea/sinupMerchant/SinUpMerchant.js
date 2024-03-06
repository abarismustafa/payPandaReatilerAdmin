import { useEffect, useState } from "react"
import MerchantLoginAreaBanner from "../../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner"
import MerchantLoginHeader from "../../../common/merchantLoginHeader/MerchantLoginHeader"
import SignUpMerchantForm from "./signUpMerchantForm/SignUpMerchantForm"
import TabSignUp from "./tabSinUp/TabSignUp"
import { isMobileExits, mobileGenerateOtp, userType } from "../../../api/login/Login"


function SignUpMerchant() {

    const [userID, setUserID] = useState()

    const [initalValue, setInitialValue] = useState({
        mobileNo: '',
    })

    console.log(initalValue);

    const handleChange = (e) => {
        const clone = { ...initalValue }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setInitialValue(clone)

        const verifyMobile = verifiedPhone(initalValue.mobileNo)
        if (verifyMobile) {
            isMobileExit(initalValue.mobileNo)
        }

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

    const mobileGenerateOtpMobile = async () => {
        try {
            const res = await mobileGenerateOtp(initalValue)
            setUserID(res?.data?.user);
            console.log(res);
        } catch (error) {

        }
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

                                <SignUpMerchantForm initalValue={initalValue} handleChange={handleChange} mobileGenerateOtpMobile={mobileGenerateOtpMobile} userID={userID} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default SignUpMerchant