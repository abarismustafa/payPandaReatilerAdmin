import { useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import { videoKycUpload } from "../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";

export const VedioKyc = ({ setState }) => {

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
            console.log(res);
            if (res?.data?.statusCode == "200") {
                toastSuccessMessage(res?.data?.data?.message)
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


            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <button type="submit" onClick={() => { setState(4) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
                <button type="button" style={{ backgroundColor: '#2E3191' }} onClick={handleSubmitKyc} className="btn btn-primary">Submit</button>
            </div>
        </form >
        <ToastContainer />
    </div>
}