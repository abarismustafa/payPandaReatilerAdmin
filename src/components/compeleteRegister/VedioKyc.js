import { FcVideoCall } from "react-icons/fc";

export const VedioKyc = ({ setState }) => {


    return <div className="container">
        <h6 style={{ margin: "15px 0", textAlign: "center" }}>Cmpleted Vdio KYC</h6>
        <form className="row">
            <div className="col-12">
                <div className="kycCall">
                    <FcVideoCall className="kycicon"/> 
                </div>
                <p className="perakyc">
                Your video kyc has not been shedule yet, as soon as it is sheduled we will inform you throught sms and you will also be able to see its details here
                </p>
            </div>


            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {/* <button type="submit" onClick={() => { setState(4) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button> */}
                <button type="button" style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Submit</button>
            </div>
        </form >
    </div>
}