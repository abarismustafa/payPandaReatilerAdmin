
import { PiDeviceMobileSpeakerLight } from "react-icons/pi"
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { getCountry, getState, personalDetails } from "../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
export const SecForm = ({ setState }) => {
    const [country, setCountry] = useState()
    const [state, setstate] = useState()
    const [data, setData] = useState({
        state: '',
        country: '',
        presentAddr: '',
        alternate_mobileNo: '',
    })
    const [loader, setloader] = useState(false)
    const getData = async () => {
        try {
            const res = await getCountry()
            const res2 = await getState()
            setCountry(res.data?.data)
            setstate(res2.data?.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    const onchangeHandle = (e) => {
        const clone = { ...data }
        clone[e.target.name] = e.target.value
        setData(clone)
    }
    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };
    const submitData = async () => {
        setloader(true)
        try {
            await personalDetails({ ...data, user_id: window.localStorage.getItem('userToken') })
            setloader(false)
            toastSuccessMessage('Personal Details Varify Successfully')
            setTimeout(() => {
                setState(2)
            }, 1000);
        } catch (error) {
            setloader(false)

        }
        // setState(2)
    }
    return <div className="container">
          <ToastContainer />
        <form className="row">
            <div className="col-6 mb-3 clrelative">
                <select className="form-select" name="country" onChange={onchangeHandle} value={data.country} aria-label="Default select example">
                    <option selected>Select Country</option>
                    {country && country.map((item) => {
                        return <option value={item?._id}>{item?.name}</option>
                    })}

                </select>
            </div>
            <div className="col-6 mb-3 clrelative">
                <select className="form-select" name="state" value={data.state} onChange={onchangeHandle} aria-label="Default select example">
                    <option selected>Select State</option>
                    {state && state.map((item) => {
                        return <option value={item?._id}>{item?.name}</option>
                    })}
                </select>
            </div>

            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" onChange={onchangeHandle} name="alternate_mobileNo" value={data.alternate_mobileNo} placeholder="Enter Alernate mobile number" aria-describedby="emailHelp" />
                <PiDeviceMobileSpeakerLight className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={onchangeHandle} name="presentAddr" value={data.presentAddr} placeholder="Enter Present Address" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>



            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {/* <button type="submit" onClick={()=>{setState(0)}} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
                <button type="submit" onClick={()=>{setState(2)}} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button> */}
                <button type="button" onClick={submitData} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Submit</button>
            </div>
        </form >
    </div>
}