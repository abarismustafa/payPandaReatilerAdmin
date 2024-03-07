
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import { GstBusiness } from "../../api/login/Login";
export const GstBusinessForm = ({ setState }) => {
    const [data, setData] = useState({
        isGstAvailable: true,
        GSTIN: '',
        businessName: ''
    })
    const [loader3, setloader3] = useState(false)
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
            await GstBusiness({ ...data, user_id: window.localStorage.getItem('userToken') })
            setloader3(false)
            toastSuccessMessage('Gst & Business Verification Successfully')
            setTimeout(() => {
                setState(3)
            }, 1000);
        } catch (error) {
            setloader3(false)
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
                <input type="text" className="form-control" onChange={onChangeHandle} name='GSTIN' id="exampleInputEmail1" placeholder="Enter GST provisional GST number" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="text" className="form-control" onChange={onChangeHandle} name='businessName' id="exampleInputEmail1" placeholder="Enter business GST Name" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>



            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {/* <button type="submit" onClick={() => { setState(1) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
                <button type="submit" onClick={() => { setState(3) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button> */}
                <button type="button" onClick={OtpSubmit} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Submit {loader3 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}</button>
            </div>
        </form >
    </div>
}