import { useState } from "react"
import MerchantLoginAreaBanner from "../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner"
import MerchantLoginHeader from "../../common/merchantLoginHeader/MerchantLoginHeader"
import MerchantLoginEmail from "./merchantLoginEmail/MerchantLoginEmail"
import MerchantLoginForm from "./merchantLoginPhone/MerchantLoginPhone"
import TabMobileEmail from "./tabMobileEmail/TabMobileEmail"


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

    return (
        <>
            <MerchantLoginHeader />
            <MerchantLoginAreaBanner title="Merchant login" />
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="login-area-sec">
                                <h1 className="text-align-center">LOGIN</h1>
                                {/* <TabMobileEmail tabs={tabs} handleTabClick={handleTabClick} count={count} setState={setState} />
                                {activeTab === 1 && ( */}
                                <MerchantLoginForm />
                                {/* )} */}
                                {/* {activeTab === 2 && (
                                    <MerchantLoginEmail />
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MerchantLoginArea
