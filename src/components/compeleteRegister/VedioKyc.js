import { useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import { declarationSub, videoKycUpload } from "../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";

export const VedioKyc = ({ setState }) => {
    const [disa, setDisa] = useState(true)
    const [initialValue, setInitialValue] = useState({
        video: '',
        userId: ''
    })

    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };


    const videoUploadHandle = async (e) => {
        const video = new FormData();
        video.append('video', e.target.files[0]);
        video.append('user_id', window.localStorage.getItem('userIdToken'))
        setInitialValue(video)

    }

    const handleSubmitKyc = async () => {
        try {
            const res = await videoKycUpload(initialValue)
            if (res?.data?.statusCode == "200") {
                toastSuccessMessage(res?.data?.data?.message)
            }

        } catch (error) {

        }

    }
    const Declaration = async () => {
        try {
            const res = await declarationSub({ user_id: window.localStorage.getItem('userIdToken') })
            if (res?.data?.statusCode == "200") {
                toastSuccessMessage('Self Declaration Saved')
            }

        } catch (error) {

        }

    }




    return <div className="container">
        <h6 style={{ margin: "15px 0", textAlign: "center" }}>Vdio KYC uploaded </h6>
        <form className="row">
            <div className="col-12">
                <div className="kycCall">
                    <FcVideoCall className="kycicon" />
                    <input type="file" name="video" value={initialValue.video} onChange={videoUploadHandle} />
                </div>
                <p className="perakyc">
                    Your video kyc has not been shedule yet, as soon as it is sheduled we will inform you throught sms and you will also be able to see its details here
                </p>
            </div>

            <div>
                <h6>Self Declaration</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label onClick={() => { setDisa(!disa) }} className="form-check-label" for="flexCheckDefault">
                        I Agree to the latest Terms & Conditions & Privacy Policy.
                    </label>
                    <div className="laste">I certify that all the information provided by me is correct and
                        accurate
                    </div>
                    <button type="button" disabled={disa} style={{ backgroundColor: '#2E3191' }} onClick={Declaration} className="btn btn-primary">Submit</button>
                </div>
            </div>


            <div style={{
                display: 'flex',
                justifyContent: 'end'
            }}>
                {/* <button type="submit" onClick={() => { setState(4) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button> */}
                <button type="button" style={{ backgroundColor: '#2E3191' }} onClick={handleSubmitKyc} className="btn btn-primary">Save</button>
            </div>
        </form >
        <ToastContainer />
    </div>
}