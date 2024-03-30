import { useState } from "react"
import CustomerApi from "./customerApi/CustomerApi"
import NotExitCustomer from "./notExitCustomer/NotExitCustomer"
import CreateCustomer from "./createCustomer/CreateCustomer";
import { BENEFICIARYDelete, CustomerInfo, VerifyCustomer, reciptList } from "../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import OtpCustomer from "./createCustomer/otpCustomer/OtpCustomer";
import OtpChaeckTost from "./otpcheckTost/OtpCheckTost";
import { Button, message, Popconfirm } from 'antd';
import Loader from "../../../common/loader/Loader";

function MoneyTransfer() {
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [customerNumber, setCustomerNumber] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isActiveCus, setIsActiveCus] = useState(false)

    const [data, setData] = useState(null)
    const [beneficiaryData, setBeneficiaryData] = useState(null)


    const [initialCustomer, setInitialCustomer] = useState({
        mobile: '',
    })

    const handleChangeCustomer = (e) => {
        const clone = { ...initialCustomer }
        const name = e.target.name
        const value = e.target.value
        clone[name] = value
        setInitialCustomer(clone)
    }

    const toastSuccessMessage = (data) => {
        console.log(data);
        toast.success(`${data}`, {
            position: "top-center",
        });
    };

    const SubmitCustomer = async () => {
        setLoading(true)
        const clone = { ...initialCustomer }
        try {
            const res = await CustomerInfo(clone)
            const resRecipt = await reciptList(clone)
            // console.log(resRecipt);
            setBeneficiaryData(resRecipt?.data?.data?.response?.recipient_list)
            // console.log(res);
            setData(res?.data?.data?.response);
            setCustomerNumber(res?.data?.data?.response?.customer_id)
            if (res?.data?.statusCode == 200) {
                toastSuccessMessage(res?.data?.message)
                SearchCustomer()
            }
            if (res?.data?.statusCode == 400) {
                toastSuccessMessage(res?.data?.message)
                setModalShow(true)
            }
            if (res?.data?.statusCode == 300) {
                toastSuccessMessage(res?.data?.message)
                setShow(true)
            }
            setLoading(false)
        } catch (error) {

        }
    }


    const confirm = (id) => {
        deleteRecipt(id)
        message.success('Delete Successfull!');
    };
    const cancel = (e) => {
        message.error('Cancle Successfull!');
    };

    const deleteRecipt = async (id) => {
        const clone = { customer_mobile: customerNumber, recipient_id: id.toString(), user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await BENEFICIARYDelete(clone)
            if (res?.data?.statusCode == 200) {
                toastSuccessMessage(res?.data?.message)
                SubmitCustomer()
            }
            if (res?.data?.statusCode == 400) {
                toastSuccessMessage(res?.data?.message)
            }
            if (res?.data?.statusCode == 300) {
                toastSuccessMessage(res?.data?.message)
            }
        } catch (error) {

        }
    }


    const SearchCustomer = () => {
        setIsActiveCus(true)
        // setModalShow(true)
    }

    const customerCreate = () => {
        setModalShow(false)
        setModalShow2(true)
    }
    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading"><h1>Domestic Money Transfer</h1></div>
            <div className="ContentArea"><div className="card">
                <div className="card-header">
                    <span>Search</span>
                    <div style={{ float: 'right', color: '#1e5591', fontWeight: 600, paddingTop: 15 }}>Dhamaka Offer Limit: 62011</div>
                </div>
                <div className="card-body">
                    <div className="row row-row" id="dev-search-form">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="txtSM">Customer Number <span id="lenofsendernumber" className="float-right" /></label>
                                <input type="number" id="txtSM" className="form-control" name="mobile" value={initialCustomer.mobile} placeholder="Enter Customer Number" onChange={handleChangeCustomer} />
                            </div>
                        </div>
                        {/* <div className="col-1 block-seprator2 mx-auto"><span>OR</span></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="txtRA">Recipient Account Number <span id="lenofbeneaccno" className="float-right" /></label>
                                <input type="text" id="txtRA" className="form-control" maxLength={22} tabIndex={2} autoComplete="off" fdprocessedid="rrve1" />
                            </div>
                        </div> */}
                        <div className="col-md-3 pt-md-3 mt-1">
                            <button type="button" id="btnSearch" className="btn btn-success custom-button example-1" onClick={SubmitCustomer}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {isActiveCus ? <CustomerApi data={data} beneficiaryData={beneficiaryData} customerNumber={customerNumber} confirm={confirm} cancel={cancel} toastSuccessMessage={toastSuccessMessage} /> : ''}

            <NotExitCustomer
                show={modalShow}
                onHide={() => setModalShow(false)}
                customerCreate={customerCreate}
            />

            <CreateCustomer
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow2={setModalShow2}
                handleShow={handleShow}
                toastSuccessMessage={toastSuccessMessage}
            />

            <OtpChaeckTost
                setShow={setShow}
                show={show}
                handleClose={handleClose}
                setModalShow3={setModalShow3}
            />

            <OtpCustomer
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                customerNumber={customerNumber}
                toastSuccessMessage={toastSuccessMessage}
            />

            <ToastContainer />
        </>
    )
}
export default MoneyTransfer