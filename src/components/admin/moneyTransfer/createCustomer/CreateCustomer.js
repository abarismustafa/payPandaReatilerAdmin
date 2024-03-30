import { Button, Modal } from "react-bootstrap"

import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react";
import * as yup from 'yup'
import { createCustomer } from "../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import OtpCustomer from "./otpCustomer/OtpCustomer";
function CreateCustomer(props) {



    const [defalutValue, setDefalutValue] = useState({
        user_id: '',
        customer_mobile: '',
        name: '',
        dob: '',
        country: '',
        city: '',
        state: '',
        pincode: '',
        district: '',
        area: ''
    })

    const handleChange = (e) => {
        const clone = { ...defalutValue }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setDefalutValue(clone)
    }

    const toastSuccessMessage = (data) => {
        toast.success(`${data}`, {
            position: "top-center",
        });
    };


    const handleSubmit = async () => {
        const clone = { ...defalutValue, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await createCustomer(clone)
            if (res?.data?.statusCode == 200) {
                props.toastSuccessMessage(res?.data?.message)
                props.setModalShow2(false)
                props.handleShow(true)
            }
            if (res?.data?.statusCode == 500) {
                props.toastSuccessMessage(res?.data?.message)
            }
        } catch (error) {

        }
    }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className="tab-pane fade active show in" id="Mobile" role="tabpanel" aria-labelledby="MobileTab">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <h2 className="SecTitle-2">Create Customer</h2>
                                <div className="row form-group">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="Name" className="fl-label">Name</label>
                                                <input type="text" className="form-control fl-input" id="Name" name="name" value={defalutValue.name} placeholder="Enter Name" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="customer_mobile" className="fl-label">Customer Mobile</label>
                                                <input type="number" className="form-control fl-input" id="customer_mobile" name="customer_mobile" value={defalutValue.customer_mobile} placeholder="Enter Mobile Number" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="Date-Of-Birth" className="fl-label">Date Of Birth</label>
                                                <input type="date" className="form-control fl-input" id="Date-Of-Birth" name="dob" value={defalutValue.dob} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="Country" className="fl-label">Country</label>
                                                <input type="text" className="form-control fl-input" id="Country" name="country" value={defalutValue.country} placeholder="Enter Country Name" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="state" className="fl-label">State</label>
                                                <input type="text" className="form-control fl-input" id="state" name="state" value={defalutValue.state} placeholder="Enter State Name" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="Country" className="fl-label">City</label>
                                                <input type="text" className="form-control fl-input" id="Country" name="city" value={defalutValue.city} placeholder="Enter City Name" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="district" className="fl-label">District</label>
                                                <input type="text" className="form-control fl-input" id="district" name="district" value={defalutValue.district} placeholder="Enter District Name" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="area" className="fl-label">Area</label>
                                                <input type="text" className="form-control fl-input" id="area" name="area" value={defalutValue.area} placeholder="Enter Area Name" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="pincode" className="fl-label">Pin Code</label>
                                                <input type="number" className="form-control fl-input" id="pincode" name="pincode" value={defalutValue.pincode} placeholder="Enter Pin Code" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>






                                    <div className="FormButtons">

                                        <button type="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>
                                        {/* <button
                                                type="button"
                                                onClick={resetForm}
                                                className="btn btn-warning float-right"
                                            >
                                                rest
                                            </button> */}
                                    </div>
                                </div>

                            </div>
                            {/* <ResentTransition /> */}
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button
                        onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
            {/* <ToastContainer /> */}


        </>
    )
}
export default CreateCustomer