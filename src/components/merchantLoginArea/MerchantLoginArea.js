import { useState } from "react"
import MerchantLoginAreaBanner from "../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner"
import MerchantLoginHeader from "../../common/merchantLoginHeader/MerchantLoginHeader"
import MerchantLoginEmail from "./merchantLoginEmail/MerchantLoginEmail"
import MerchantLoginForm from "./merchantLoginPhone/MerchantLoginPhone"
import TabMobileEmail from "./tabMobileEmail/TabMobileEmail"
import MerchantResetPassword from "./merchentResetPassword/MerchantResetPassword"
import { isMobileExits, mobileGenerateOtp } from "../../api/login/Login"
import { ToastContainer, toast } from "react-toastify"


function MerchantLoginArea() {
    const tabs = [
        { id: 1, label: 'Via Mobile' },
        { id: 2, label: 'Via email' },
    ];
    const [activeTab, setActiveTab] = useState(1);
    const [count, setState] = useState(0)
    const handleTabClick = (tabId, i) => {
        setActiveTab(tabId);
        setState(i)
    };

    const [loginForm, setLoginForm] = useState(true)
    // console.log(loginForm);

    const handleSubmitChange = () => {
        setLoginForm(false);
    }

    const handleSubmitBack = () => {
        setLoginForm(true);
    }

    const [resetOtp, setResetOtp] = useState(true)
    const [OtpUp, setOtpUp] = useState(false)
    const [openReset, setOpenReset] = useState(false)


    const [initalValue, setInitialValue] = useState({
        mobileNo: '',
    })

    const [userId, setUserID] = useState()

    const handleChange = (e) => {

        const clone = { ...initalValue }
        const vlaue = e.target.value
        const name = e.target.name

        clone[name] = vlaue
        if (clone.mobileNo?.length == 14) {
            return
        }
        setInitialValue(clone)
        if (clone.mobileNo?.length == 13) {
            isMobileExit(clone.mobileNo)
        }

        const verifyMobile = verifiedPhone(initalValue.mobileNo)
        // if (verifyMobile) {
        //     isMobileExit(initalValue.mobileNo)
        // }

    }

    // const handleCountryCode = (e) => {
    //     setCountryCode(e.target.value);
    //     const clone = { ...initalValue, mobileNo: e.target.value }
    //     setInitialValue(clone)

    // }

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
            if (res?.data?.isExist === false) {
                alert('Mobile Number Does Not Exit')
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
        const clone = { ...initalValue }
        try {
            const res = await mobileGenerateOtp(clone)
            setUserID(res?.data?.data?.user);
            window.localStorage.setItem("forgotUser", res?.data?.data?.user)
            // console.log(res.data.statusCode);
            if (res?.data?.statusCode == 200) {
                toastSuccessMessage();
                setTimeout(() => {
                    setResetOtp(false)
                    setOtpUp(true)
                }, 2000)

            }

        } catch (error) {

        }
    }

    const getOtp = () => {
        mobileGenerateOtpMobile()
    }



    return (
        <>
            <MerchantLoginHeader />
            <MerchantLoginAreaBanner title="Merchant login" />
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="login-area-sec">
                                <h1 className="text-align-center"> {loginForm == true ? 'LOGIN' : 'Forgot Password'}</h1>
                                {/* <TabMobileEmail tabs={tabs} handleTabClick={handleTabClick} count={count} setState={setState} />
                                {activeTab === 1 && ( */}
                                {loginForm ? <MerchantLoginForm handleSubmitChange={handleSubmitChange} /> : <>
                                    <MerchantResetPassword
                                        handleSubmitBack={handleSubmitBack}
                                        resetOtp={resetOtp}
                                        getOtp={getOtp}
                                        OtpUp={OtpUp}
                                        openReset={openReset}
                                        handleChange={handleChange}
                                        initalValue={initalValue}
                                        userId={userId}
                                        setOtpUp={setOtpUp}
                                        setOpenReset={setOpenReset}
                                        setLoginForm={setLoginForm}
                                    />
                                </>}

                                {/* )} */}
                                {/* {activeTab === 2 && (
                                    <MerchantLoginEmail />
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer /> */}
            </section>

        </>
    )
}
export default MerchantLoginArea
