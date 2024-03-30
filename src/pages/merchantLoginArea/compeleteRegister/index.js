import { Steps } from "antd"
import MerchantLoginAreaBanner from "../../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner"
import MerchantLoginHeader from "../../../common/merchantLoginHeader/MerchantLoginHeader"
import { TopSection } from "../../../components/compeleteRegister/TopSection"
import { useEffect, useState } from "react"
import { UploadDoc } from "../../../components/compeleteRegister/UploadDoc"
import { VedioKyc } from "../../../components/compeleteRegister/VedioKyc"
import { FirstForm } from "../../../components/compeleteRegister/FirstForm"
import { SecForm } from "../../../components/compeleteRegister/SecForm"
import { GstBusinessForm } from "../../../components/compeleteRegister/GstBusinessForm"
import { BankDetail } from "../../../components/compeleteRegister/BankDetail"
import { userValidate } from "../../../api/login/Login"
import { useNavigate } from "react-router-dom"



function CompeleteRegister() {
    const items = [
        {
            title: 'Identity Verification',

        },
        {
            title: 'Personal Details',

        },
        {
            title: 'Gst & Business ',

        },
        {
            title: 'Bank Details',

        },
        {
            title: 'Upload Dcuments',

        },
        {
            title: 'Completed Video Kyc'
        }
    ]
    const [state, setState] = useState(0)
    const [datas, setDatas] = useState()
    const navigate = useNavigate()
    const getVarifyall = async () => {
        try {
            const res = await userValidate()
            setDatas(res.data);
            if (res.data?.is_personalDetails) {
                setState(2)
            }
            if (res.data?.is_gst) {
                setState(3)
            }
            if (res.data?.is_bank) {
                setState(4)
            }
            if (res.data?.is_document) {
                setState(5)
            }
            if (res.data?.is_approved) {
                navigate('/admin')
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getVarifyall()
    }, [])
    return (
        <>
            <MerchantLoginHeader />
            <MerchantLoginAreaBanner title="Merchant Create account" />
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <TopSection />
                            <Steps current={state} labelPlacement="vertical" items={items} />
                            <div className="firstFor">
                                {state == 0 && <FirstForm datas={datas} setState={setState} />}
                                {state == 1 && <SecForm setState={setState} />}
                                {state == 2 && <GstBusinessForm setState={setState} />}
                                {state == 3 && <BankDetail setState={setState} />}
                                {state == 4 && <UploadDoc setState={setState} />}
                                {state == 5 && <VedioKyc setState={setState} />}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CompeleteRegister
