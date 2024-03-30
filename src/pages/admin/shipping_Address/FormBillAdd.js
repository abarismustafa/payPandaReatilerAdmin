import { useState } from "react";
import { useEffect } from "react"
import { getShippingAddressById, sendShipping, sendShippingUpdate } from "../../../api/login/Login";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const toastSuccessMessage = (str) => {
    toast.success(`${str}`, {
        position: "top-center"
    })
};
function FormBillAdd({ ship, type }) {
    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        type: type,
        country: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        zip: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        province: "",
        company: "",
        userid: window.localStorage.getItem('user_id')
    })
    const onchengeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const token = window.localStorage.getItem('token')
    const onsubmitData = async () => {
        setShow(true)
        const clone = {
            type: type,
            country: state.country,
            state: state.state,
            city: state.city,
            zip: state.zip,
            addressLine1: state.addressLine1,
            addressLine2: state.addressLine2,
            landmark: state.landmark,
            province: state.province,
            company: state.company,
            email: state.email,
            phone: state.phone,
            firstname: state.firstname,
            lastname: state.lastname,
            user_id: window.localStorage.getItem('userToken')
        }
        try {
            await sendShipping(clone)
            setShow(false)
            toastSuccessMessage(`${type} Address Add Successfully`)
        } catch (error) {
            setShow(false)
        }
    }

    const onsubmitDataUpdate = async () => {
        setShow(true)
        const clone = {
            type: type,
            country: state.country,
            state: state.state,
            city: state.city,
            zip: state.zip,
            addressLine1: state.addressLine1,
            addressLine2: state.addressLine2,
            landmark: state.landmark,
            province: state.province,
            company: state.company,
            email: state.email,
            phone: state.phone,
            firstname: state.firstname,
            lastname: state.lastname,
            user_id: window.localStorage.getItem('userToken')
        }
        try {
            await sendShippingUpdate({ value: clone, id: params.id })
            setShow(false)
            toastSuccessMessage(`${type} Address Update Successfully`)
        } catch (error) {
            setShow(false)
        }
    }


    const params = useParams()
    const setAddress = (val) => {
        const clone = { ...state, type: val }
        setState(clone)
    }

    useEffect(() => {
        if (params?.id) {
            const getDataId = async () => {
                try {
                    const datas = await getShippingAddressById(params?.id)
                    setState({ ...state, ...datas.data.data })
                } catch (error) {

                }
            }
            getDataId()
        }
    }, [params?.id])

    // useEffect(() => {
    //     if (isError) {
    //         alert('Address Not Add')
    //     }
    // }, [isError])



    return <div className="container" style={{ margin: "20px auto" }}>
        <ToastContainer />
        <form className="row ">

            {ship === 'Shipping' && <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Address Type</label>
                <input type="text" className="form-control" name="firstname" disabled value=" Shipping Address" aria-describedby="emailHelp" />
            </div>}

            {ship === 'billing' && <div className="mb-3 col-6">

                <label htmlFor="exampleInputEmail1" className="form-label">Address Type</label>
                <input type="text" className="form-control" name="firstname" disabled value=" Billing Address" aria-describedby="emailHelp" />
            </div>}


            {ship === 'Shipping' && <>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                    <input type="text" className="form-control" value={state.firstname} name="firstname" onChange={onchengeHandle} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastname" value={state.lastname} onChange={onchengeHandle} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={state.email} onChange={onchengeHandle} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="number" className="form-control" name="phone" value={state.phone} onChange={onchengeHandle} aria-describedby="emailHelp" />
                </div>
            </>}


            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                <input type="text" className="form-control" value={state.country} name="country" onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>

            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                <input type="text" className="form-control" name="state" value={state.state} onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                <input type="text" className="form-control" name="city" value={state.city} onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
                <input type="text" className="form-control" name="zip" value={state.zip} onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
                <input type="text" className="form-control" name="province" value={state.province} onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
                <input type="text" className="form-control" name="addressLine1" value={state.addressLine1} onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
                <input type="text" className="form-control" name="addressLine2" value={state.addressLine2} onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
                <input type="text" className="form-control" name="landmark" value={state.landmark} onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                <input type="text" className="form-control" name="company" onChange={onchengeHandle} value={state.company} aria-describedby="emailHelp" />
            </div>
            {/* {isSuccess && (<div className="alert alert-success" role="alert">
            Address Add Successfully!
        </div>)}
        {isAddsuss && (<div className="alert alert-success" role="alert">
            Address Add Successfully!
        </div>)} */}

            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary" onClick={params?.id ? onsubmitDataUpdate : onsubmitData}>Submit  {show && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}</button>
        </form>
    </div>
}
export default FormBillAdd