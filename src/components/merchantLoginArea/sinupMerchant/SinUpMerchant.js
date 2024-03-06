import MerchantLoginAreaBanner from "../../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner"
import MerchantLoginHeader from "../../../common/merchantLoginHeader/MerchantLoginHeader"
import SignUpMerchantForm from "./signUpMerchantForm/SignUpMerchantForm"
import TabSignUp from "./tabSinUp/TabSignUp"


function SignUpMerchant() {
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
                                <TabSignUp />
                                <SignUpMerchantForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default SignUpMerchant