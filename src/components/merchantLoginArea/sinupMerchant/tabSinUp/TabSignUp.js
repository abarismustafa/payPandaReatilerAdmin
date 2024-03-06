
import { useEffect, useState } from "react";
import { userType } from "../../../../api/login/Login";
function TabSignUp() {
    const [data, setData] = useState(null)

    const userTypeget = async () => {
        try {
            const res = await userType()
            setData(res?.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        userTypeget()
    }, [])
    return (
        <>
            <div className="email-mobile-tab">
                <div className="mobileitab me-3">
                    <div className="form-check" >
                        <input className="form-check-input" type="radio" name="retailer" id="retailer" defaultChecked />
                        <label className="form-check-label" htmlFor="retailer">
                            Retailer
                        </label>
                    </div>
                </div>
                <div className="emailtab me-3">
                    <div className="form-check" >
                        <input className="form-check-input" type="radio" name="retailer" id="distribuer" />
                        <label className="form-check-label" htmlFor="distribuer">
                            Distributer
                        </label>
                    </div>
                </div>

            </div>
        </>
    )
}
export default TabSignUp