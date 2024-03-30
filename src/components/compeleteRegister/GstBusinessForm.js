
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import { GstBusiness, GstBusinessAfterVerifide } from "../../api/login/Login";
export const GstBusinessForm = ({ setState }) => {
    const [submitVerified, setSubmitVerified] = useState(false)
    const [data, setData] = useState({
        isGstAvailable: true,
        GSTIN: '',
        businessName: '',
        shop_name: '',
        business_pincode: '',
        business_city: '',
        business_Address: '',
        gst_register_type: ''
    })


    const [loader3, setloader3] = useState(false)
    const [loader4, setloader4] = useState(false)
    const onChangeHandle = (e) => {
        const clone = { ...data }
        clone[e.target.name] = e.target.value
        setData(clone)
    }

    const onChangeHandle2 = (val) => {
        const clone = { ...data, isGstAvailable: val }
        setData(clone)
    }

    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };

    const OtpSubmit = async () => {
        setloader3(true)
        try {
            const res = await GstBusiness({ ...data, user_id: window.localStorage.getItem('userToken') })
            setloader3(false)
            // console.log(res.data.data);
            if (res.data.statusCode == '200') {
                toastSuccessMessage('Gst & Business Verification Successfully')
                const clone = { ...data, businessName: res?.data?.data?.legal_name_of_business, business_Address: res?.data?.data?.principal_place_address, gst_register_type: res?.data?.data?.taxpayer_type }
                // console.log(clone);
                setData(clone)
                setSubmitVerified(true)
            }


        } catch (error) {
            setloader3(false)
        }
    }

    const onSubmitAfterVerified = async () => {
        setloader4(true)
        try {
            const res = await GstBusinessAfterVerifide({ ...data, user_id: window.localStorage.getItem('userToken') })
            setloader4(false)
            if (res?.data?.statusCode == '200') {
                toastSuccessMessage(res?.data?.message)
                setTimeout(() => {
                    setState(3)
                }, 1000);
            }
        } catch (error) {

        }

    }

    return <div className="container">
        <ToastContainer />
        <div className="row">
            <h6 style={{ textAlign: "center", margin: "14px 0" }}>Are you Register for Gst</h6>
            <div className="d-flex" style={{ justifyContent: "center", margin: "10px 0 " }}>
                <div className="form-check" style={{ margin: "0 20px" }}>
                    <input onChange={() => { onChangeHandle2(true) }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input onChange={() => { onChangeHandle2(false) }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                </div>
            </div>
        </div>
        <form className="row">
            <div className="col-6 mb-3 clrelative">
                <input type="text" className="form-control" onChange={onChangeHandle} name='shop_name' id="exampleInputEmail1" placeholder="Enter Shop Name" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="text" className="form-control" onChange={onChangeHandle} name='GSTIN' id="exampleInputEmail1" placeholder="Enter GST provisional GST number" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>

            <button type="button" onClick={OtpSubmit} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary mb-3">Verified {loader3 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}</button>

            {submitVerified ? <>
                <div className="col-6 mb-3 clrelative">
                    <input type="text" className="form-control" onChange={onChangeHandle} name='businessName' id="exampleInputEmail1" value={data?.businessName} placeholder="Enter business GST Name" aria-describedby="emailHelp" />
                    <IoLocationOutline className="clApsulute" />
                </div>
                <div className="col-6 mb-3 clrelative">
                    <input type="text" className="form-control" onChange={onChangeHandle} name='business_city' id="exampleInputEmail1" value={data?.business_city} placeholder="Enter Business City" aria-describedby="emailHelp" />
                    <IoLocationOutline className="clApsulute" />
                </div>
                <div className="col-6 mb-3 clrelative">
                    <input type="text" className="form-control" onChange={onChangeHandle} name='business_Address' id="exampleInputEmail1" value={data?.business_Address} placeholder="Business Address" aria-describedby="emailHelp" />
                    <IoLocationOutline className="clApsulute" />
                </div>
                <div className="col-6 mb-3 clrelative">
                    <input type="text" className="form-control" onChange={onChangeHandle} name='gst_register_type' id="exampleInputEmail1" value={data?.gst_register_type} placeholder="Enter Gst Register Type" aria-describedby="emailHelp" />
                    <IoLocationOutline className="clApsulute" />
                </div>
                <div className="col-6 mb-3 clrelative">
                    <input type="text" className="form-control" onChange={onChangeHandle} name='business_pincode' id="exampleInputEmail1" value={data?.business_pincodex} placeholder="Enter business_pincode" aria-describedby="emailHelp" />
                    <IoLocationOutline className="clApsulute" />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {/* <button type="submit" onClick={() => { setState(1) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
                <button type="submit" onClick={() => { setState(3) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button> */}
                    <button type="button" onClick={onSubmitAfterVerified} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Submit {loader4 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>}</button>
                </div>
            </>
                : ''}


        </form >
    </div>
}