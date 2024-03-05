import MerchantLoginAreaBanner from "../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner"
import MerchantLoginHeader from "../../common/merchantLoginHeader/MerchantLoginHeader"
import MerchantLoginForm from "./merchantLoginPhone/MerchantLoginPhone"
import TabMobileEmail from "./tabMobileEmail/TabMobileEmail"


function MerchantLoginArea() {
    return (
        <>
            <MerchantLoginHeader />
            <MerchantLoginAreaBanner title="Merchant Login"/>
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="login-area-sec">
                                <TabMobileEmail />
                                <MerchantLoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MerchantLoginArea
