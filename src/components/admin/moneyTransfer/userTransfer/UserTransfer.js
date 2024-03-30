import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap"
import { FaRupeeSign } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import { sendMoneyTrans } from "../../../../api/login/Login";


function UserTransfer(props) {
    console.log(props);

    const [initialMoney, setInitialMoney] = useState({
        user_id: '',
        recipient_id: '',
        amount: 0,
        customer_mobile: '',
        channel: '',
        latlong: '',
        beneficiary_name: '',
        bank_name: '',
        ifsc_code: '',
        // bank_id: '',
        // bank_code: '',
        // bank_logo: '',
        account_number: '',
        customer_name: ''
    })

    const handleAmount = (e) => {
        const clone = { ...initialMoney }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialMoney(clone)
    }

    const [position, setPosition] = useState({ latitude: null, longitude: null });

    console.log('position', position);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            alert('Geolocation is not available in your browser.')
        }
    }, []);

    const sendMoney = async () => {
        const clone = {
            ...initialMoney, recipient_id: props.sendMoneyData.recipient_id.toString(), customer_mobile: props.customerNumber, channel: props.sendMoneyData.channel.toString(), beneficiary_name: props.sendMoneyData.recipient_name,
            bank_name: props.sendMoneyData.bank, ifsc_code: props.sendMoneyData.ifsc, account_number: props.sendMoneyData.account, customer_name: props.sendMoneyData.recipient_name, user_id: window.localStorage.getItem('userIdToken'), latlong: `${position.latitude} , ${position.longitude}`
        }
        // console.log(clone);
        try {
            const res = await sendMoneyTrans(clone)
            console.log(res?.data?.message);
            if (res?.data?.statusCode == '200') {
                props.toastSuccessMessage(res?.data?.message)
            } else {
                alert('Amount must be greater than 100')
            }
        } catch (error) {

        }
    }


    // const [pinComferm, setPinComferm] = useState(false)

    // const [pin, setPin] = useState({
    //     otp_pin: ''
    // })

    // const handlePin = (e) => {
    //     const clone = { ...pin }
    //     const value = e.target.value
    //     const name = e.target.name
    //     clone[name] = value
    //     setPin(clone)

    //     if (clone.otp_pin.length == 4) {
    //         setPinComferm(true)
    //     }

    // }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal-dialog-modal"
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="head-modal text-align-center">
                            <h2>Send Money</h2>
                            <p>Domestic Money Transfer</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="send-money-deatils">
                        <div className="send-money-name">
                            <h2>Name : </h2>
                            <p>{props?.sendMoneyData?.recipient_name}</p>
                        </div>
                        <div className="send-money-Mobile">
                            <h2>Mobile : </h2>
                            <p>{props?.sendMoneyData?.recipient_mobile}</p>
                        </div>
                        <div className="send-money-accNum">
                            <h2>Account Number : </h2>
                            <p>{props?.sendMoneyData?.account}</p>
                        </div>
                        <div className="send-money-bnkName">
                            <h2>Bank Name : </h2>
                            <p>{props?.sendMoneyData?.bank}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="send-moneyForm mt-1">
                                <form action="">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><FaRupeeSign /></span>
                                        <input type="number" className="form-control" placeholder="Enter Amount" name="amount" value={initialMoney.amount} onChange={handleAmount} />
                                        <span className="input-group-text" id="basic-addon1" onClick={sendMoney}><LuSendHorizonal /></span>
                                    </div>
                                    <div className="selctMode">
                                        <div className="form-check me-3">
                                            <input className="form-check-input form-check-input-2 " type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                            <label className="form-check-label mt-1 ms-2" htmlFor="flexRadioDefault1">
                                                IMPS
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-input-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label mt-1 ms-2" htmlFor="flexRadioDefault2">
                                                NEFT
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <div className="col-lg-12">
                            <div className="send-moneyForm mt-1">
                                <form action="">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1 " className="form-label text-align-label">Enter PIN</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" name="otp_pin" value={pin.otp_pin} placeholder="Enter Your Transaction PIN" onChange={handlePin} />
                                    </div>
                                    {pinComferm ? <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1 " className="form-label text-align-label text-align-label-2">Pin Verification Completed.Proceed For Transaction</label>
                                        <button type="button" className="btn btn-success btn-cnf">CONFIRM & PAY</button>
                                    </div> : ''}

                                </form>
                            </div>
                        </div> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default UserTransfer