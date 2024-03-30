import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { BENEFICIARYAdd, bankListApi } from "../../../../api/login/Login"
import Select from 'react-select'


function AddNewBeneficiary(props) {
    console.log(props);
    const [bankData, setBankData] = useState(null)
    const [initialValue, setInitialValue] = useState({
        user_id: '',
        recipient_name: '',
        customer_mobile: '',
        recipient_id_type: '',
        account_number: '',
        ifsc: '',
        bank_code: '',
        bank_id: '',
        recipient_mobile: ''
    })
    const bankList = async () => {
        try {
            const res = await bankListApi()
            setBankData(res?.data?.data)
        } catch (error) {

        }

    }


    const changeHandleBeneficiary = (e) => {
        const clone = { ...initialValue }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialValue(clone)

    }
    const HandleSubmitBeneficiary = async () => {
        const clone = { ...initialValue, customer_mobile: props.customerNumber, bank_code: initialValue.bank_id, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await BENEFICIARYAdd(clone)
            if (res?.data?.statusCode == 200) {
                props.toastSuccessMessage(res?.data?.message)
            }
            if (res?.data?.statusCode == 400) {
                props.toastSuccessMessage(res?.data?.message)
            }
            if (res?.data?.statusCode == 500) {
                props.toastSuccessMessage(res?.data?.message)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        bankList()
    }, [])

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        ADD NEW BENEFICIARY
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <h4 className="text-align-center">ADD NEW BENEFICIARY</h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input">
                                    <label htmlFor="BeneficiaryName" className="fl-label">Beneficiary Name</label>
                                    <input type="text" className="form-control fl-input" id="BeneficiaryName" placeholder="Beneficiary Name" name="recipient_name" value={initialValue.recipient_name} onChange={changeHandleBeneficiary} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input">
                                    <label htmlFor="recipient_mobile" className="fl-label">Recipient Mobile</label>
                                    <input type="number" className="form-control fl-input" id="recipient_mobile" placeholder="Beneficiary Mobile" name="recipient_mobile" value={initialValue.recipient_mobile} onChange={changeHandleBeneficiary} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div classname="mb-3">
                                <label htmlfor="BeneficiaryMobile" classname="form-label">Bank</label>

                                {/* <Select

                                    options={bankData}
                                // formatGroupLabel={formatGroupLabel}

                                /> */}


                                <select class="form-select" aria-label="Default select example" name="bank_id" onChange={changeHandleBeneficiary}>
                                    <option selected>Select Bank</option>
                                    {bankData && bankData?.map((item) => {
                                        return <option value={item?.bankID}>{item?.bank_name}</option>
                                    })}
                                </select>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div classname="mb-3">
                                <label htmlfor="BeneficiaryMobile" classname="form-label">Recipient Id Type</label>

                                {/* <Select

                                    options={bankData}
                                // formatGroupLabel={formatGroupLabel}

                                /> */}


                                <select class="form-select" aria-label="Default select example" name="recipient_id_type" onChange={changeHandleBeneficiary}>
                                    <option selected>Select Recipient Id Type</option>
                                    <option value={'acc_ifsc'}>acc ifsc</option>
                                </select>
                            </div>
                        </div>

                        {/* <div className="col-lg-6">
                            <div classname="mb-3">
                                <label htmlfor="BeneficiaryMobile" classname="form-label">Do You have IFSC CODE</label>
                                <div className="d-flex align-item-center">
                                    <div className="form-check me-5">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            YES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            NO
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div> */}
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input">
                                    <label htmlFor="FSCCode" className="fl-label">IFSC Code</label>
                                    <input type="text" className="form-control fl-input" id="FSCCode" placeholder="Enter IFSC Code" name="ifsc" value={initialValue.ifsc} onChange={changeHandleBeneficiary} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input">
                                    <label htmlFor="AccountNumber" className="fl-label">Account Number</label>
                                    <input type="number" className="form-control fl-input" id="AccountNumber" placeholder="Enter Account Number" name="account_number" value={initialValue.account_number} onChange={changeHandleBeneficiary} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group text-align-center">
                                <button type="button" className="btn btn-info" onClick={HandleSubmitBeneficiary}>ADD BENEFICIARY</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default AddNewBeneficiary