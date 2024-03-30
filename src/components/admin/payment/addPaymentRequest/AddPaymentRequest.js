import { useEffect, useState } from "react"
import { addPaymentRequest, bankListApi, cloudImage } from "../../../../api/login/Login"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function AddPaymentRequest() {
    const [profileImage, setProfileImage] = useState()
    const [imageShow, setImageShow] = useState()
    const navigate = useNavigate()
    // console.log(profileImage);
    const [bankData, setBankData] = useState(null)
    const [initialData, setInitialData] = useState({
        user_id: '',
        paymentDate: '',
        bankRef: '',
        amount: '',
        bank: '',
        method: '',
        // image: '',
        // remark: ''
    })

    const { paymentDate, bankRef, amount, bank, method } = initialData

    const handleChange = (e) => {
        const clone = { ...initialData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialData(clone)
    }



    // const imgs = new FormData();
    // const colodinaryImage = async (e) => {
    //     setProfileImage(e.target.files[0])
    //     imgs.append("image", e.target.files[0]);
    //     try {
    //         const res = await cloudImage(imgs)
    //         setImageShow(res?.data?.data?.url);
    //         setProfileImage(res?.data?.data?.url)
    //     } catch (error) {

    //     }
    // }


    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };

    const bankListName = async () => {
        const res = await bankListApi()
        setBankData(res?.data?.data);
    }

    const submitData = async () => {
        const clone = { ...initialData, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await addPaymentRequest(clone)
            if (res?.data?.statusCode == '200') {
                toastSuccessMessage(res?.data?.message)
                setTimeout(() => {
                    navigate('/admin/payment-request-view')
                }, 1000)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        bankListName()
    }, [])

    return (
        <>
            <div className="PageHeading"><h1>ADD Payment Request</h1></div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>ADD Payment Request</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtUserId">Payment Date :</label>
                                    <input className="form-control datefield" id="txtFrom" type="date" placeholder="Enter Amount" name="paymentDate" value={initialData.paymentDate} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="ddldb">Select Method</label>
                                    <select className="form-select" aria-label="Default select example" name="method" onChange={handleChange}>
                                        <option selected>Select Method</option>
                                        <option value={"neft"}>NEFT</option>
                                        <option value={"rtgs"}>RTGS</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtUserId">Bank Name :</label>
                                    <select className="form-select" aria-label="Default select example" name="bank" onChange={handleChange}>
                                        <option selected>Select Bank</option>
                                        {bankData && bankData.map((item) => {
                                            return <option value={item?.bank_name}>{item?.bank_name}</option>
                                        })}
                                        {/* <option value={"neft"}>NEFT</option>
                                        <option value={"rtgs"}>RTGS</option> */}
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtUserId">Amount :</label>
                                    <input className="form-control datefield" id="txtFrom" type="number" placeholder="Enter Amount" name="amount" value={initialData.amount} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtUserId">Bank
                                        Reference No :</label>
                                    <input className="form-control datefield" id="txtFrom" type="text" placeholder="Enter Bank Ref No" name="bankRef" value={initialData.bankRef} onChange={handleChange} />
                                </div>
                                {/* <div className="form-group col-md-3">
                                    <label htmlFor="txtUserId">Image :</label>
                                    <input className="form-control datefield" id="txtFrom" name="image" type="file" onChange={colodinaryImage} />
                                </div>
                                <div className="form-group col-md-3">
                                    {imageShow && <img src={`https://api.paypandabnk.com/api/cloudinary/${imageShow}`} style={{ height: '200px', width: '200px' }} alt="image" />}
                                </div> */}
                                {/* <div className="form-group col-md-3">
                                    <label htmlFor="txtUserId">Security Pin :</label>
                                    <input className="form-control datefield" id="txtFrom" type="password" placeholder="Enter Security Pin" name="securityPin" value={initialData.securityPin} onChange={handleChange} />
                                </div> */}
                                {/* <div className="form-group col-md-3">
                                    <label htmlFor="txtUserId">Remark :</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Message" name="remark" value={initialData.remark} onChange={handleChange}></textarea>
                                </div> */}
                                <div className="form-group col-md-3">
                                    <label>&nbsp;</label>
                                    <button type="button" disabled={!initialData.bankRef} className="btn btn-primary" onClick={submitData}>Submit</button>

                                </div>
                                {/* <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <input type="button" name="btnExport" id="btnExport" defaultValue="Export" className="btn btn-secondary" onclick="startexoprt()" fdprocessedid="vmyoef" />
                                </div> */}
                            </div>
                        </form>
                    </div>

                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default AddPaymentRequest