import { useEffect, useState } from "react"
import { adharGenerateOtp, panNumberVarify, subOtp } from "../../api/login/Login"
import { toast, ToastContainer } from 'react-toastify';
import { FaCheck } from "react-icons/fa";

export const FirstForm = ({ setState, datas }) => {
    const [pannum, setpannum] = useState()
    const [aharnum, setaharnum] = useState()
    useEffect(() => {
        setpannum(datas?.pan_number)
    }, [datas])

    const [OtpAdhar, setOtpAdhar] = useState()
    const [adharOtpGet, setadharOtpGet] = useState(false)
    const [loader, setloader] = useState(false)
    const [loader1, setloader2] = useState(false)
    const [loader3, setloader3] = useState(false)
    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };

    const submitPanNumber = async () => {
        setloader(true)
        try {
            await panNumberVarify({ pan: pannum, user_id: window.localStorage.getItem('userToken') })
            setloader(false)
            toastSuccessMessage('Pan Verified Successfully')
        } catch (error) {
            setloader(false)
        }
    }
    const adharGenerateOtpSub = async () => {
        setloader2(true)
        try {
            const res = await adharGenerateOtp({ adhaarNumber: aharnum, user_id: window.localStorage.getItem('userToken') })
            setloader2(false)
            console.log(res.data.data.ref_id);
            window.localStorage.setItem('ref_id',res.data.data.ref_id)
            toastSuccessMessage('Adhar Otp Send Successfully')
            window.localStorage.setItem('ref_id', res.data)
            setTimeout(() => {
                setadharOtpGet(true)
            }, 1000);
        } catch (error) {
            setloader2(false)
        }
    }

    const OtpSubmit = async () => {
        setloader3(true)
        try {
            const res = await subOtp({ otp: OtpAdhar, user_id: window.localStorage.getItem('userIdToken'), ref_id: window.localStorage.getItem('ref_id') })
            setloader3(false)
            if (res?.data?.statusCode == 200) {
                toastSuccessMessage('Identity Verification Successfully')
                setTimeout(() => {
                    setState(1)
                }, 1000);
            }

        } catch (error) {
            setloader3(false)
        }
    }


    return <form>
        <div className="mb-3 pancars">
            <label for="exampleInputEmail1" className="form-label">Enter Pan Number {datas?.pan_number && <span className="varifyd">Pan Varified <FaCheck /></span>}</label>
            <div id="emailHelp" className="form-text">Enter your pan number. Pan number should belong to individual</div>
            <input type="text" value={pannum} onChange={(e) => { setpannum(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <button type="button" onClick={submitPanNumber} style={{ backgroundColor: '#2E3191', margin: "6px 0" }} disabled={!pannum ? true : false} className="btn btn-primary">Verify Pan {loader && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}</button>
        </div>
        {!adharOtpGet ? <div className="mb-3 pancars">
            <label for="exampleInputPassword1" className="form-label">Enter Adhaar Number {datas?.adhaarVerified && <span className="varifyd">Adhaar Verified <FaCheck /></span>}</label>
            <div id="emailHelp" className="form-text">Enter you adhaar number.....</div>

            <input type="number" onChange={(e) => { setaharnum(e.target.value) }} className="form-control" id="exampleInputPassword1" />

            <button type="button" onClick={adharGenerateOtpSub} style={{ backgroundColor: '#2E3191', margin: "6px 0" }} disabled={!aharnum ? true : false} className="btn btn-primary">Verify Adhar {loader1 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}</button>
        </div> : <div className="mb-3 pancars">
            <label for="exampleInputPassword1" className="form-label">Enter OTP</label>
            <input type="text" onChange={(e) => { setOtpAdhar(e.target.value) }} className="form-control" id="exampleInputPassword1" />

            <button type="button" onClick={OtpSubmit} style={{ backgroundColor: '#2E3191', margin: "6px 0" }} disabled={!OtpAdhar ? true : false} className="btn btn-primary">Otp Submit  {loader3 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}</button>
        </div>}

        <div style={{
            display: 'flex',
            justifyContent: 'end'
        }}>
            {/* <button type="submit" onClick={() => setState((2))} style={{ backgroundColor: '#2E3191' }}  className="btn btn-primary">Next</button> */}
        </div>
        <ToastContainer />
    </form >


}