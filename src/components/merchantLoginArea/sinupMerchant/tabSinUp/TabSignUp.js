
import { useEffect, useState } from "react";
import { userType } from "../../../../api/login/Login";
function TabSignUp({ data, count, tabChange }) {


    // onClick={() => { setCount(i) }}

    return (
        <>
            <div className="email-mobile-tab mb-2">
                {data && data?.map((item, i) => {
                    return <div className="mobileitab me-3" onClick={() => tabChange(i)}>
                        <div className="form-check" >
                            <input className="form-check-input" type="radio" name="retailer" id={item?._id} checked={i == count} />
                            <label className="form-check-label" htmlFor={item?._id}>
                                {item?.user_type}
                            </label>
                        </div>
                    </div>
                })}
                {/* <div className="mobileitab me-3">
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
                </div> */}

            </div>
        </>
    )
}
export default TabSignUp