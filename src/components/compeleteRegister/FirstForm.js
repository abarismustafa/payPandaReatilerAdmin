import { useState } from "react"
import { adharGenerateOtp, panNumberVarify, subOtp } from "../../api/login/Login"
import { toast, ToastContainer } from 'react-toastify';
export const FirstForm = ({ setState }) => {
    const [pannum, setpannum] = useState()
    const [aharnum, setaharnum] = useState()
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
            await adharGenerateOtp({ adhaarNumber: aharnum, user_id: window.localStorage.getItem('userToken') })
            setloader2(false)
            toastSuccessMessage('Adhar Otp Send Successfully')
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
            await subOtp({ otp: OtpAdhar, user_id: window.localStorage.getItem('userToken') })
            setloader3(false)
            toastSuccessMessage('Identity Verification Successfully')
            setTimeout(() => {
                setState(1)
            }, 1000);
        } catch (error) {
            setloader3(false)
        }
    }


    return <form>
        <div className="mb-3 pancars">
            <label for="exampleInputEmail1" className="form-label">Enter Pan Number</label>
            <div id="emailHelp" className="form-text">Enter your pan number. Pan number should belong to individual</div>
            <input type="text" onChange={(e) => { setpannum(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <button type="button" onClick={submitPanNumber} style={{ backgroundColor: '#2E3191', margin: "6px 0" }} disabled={!pannum ? true : false} className="btn btn-primary">Verify Pan {loader && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}</button>
        </div>
        {!adharOtpGet ? <div className="mb-3 pancars">
            <label for="exampleInputPassword1" className="form-label">Enter Adhaar Number</label>
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
            {/* <button type="submit" onClick={() => setState((1))} style={{ backgroundColor: '#2E3191' }} disabled={true} className="btn btn-primary">Next</button> */}
        </div>
        <ToastContainer />
    </form >


}