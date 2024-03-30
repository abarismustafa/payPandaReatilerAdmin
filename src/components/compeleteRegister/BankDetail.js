import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { bankAccount, bankAccountSave, bankListApi } from "../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
export const BankDetail = ({ setState }) => {

    const [initailValue, setInitital] = useState({
        name: '',
        ifsc: '',
        phone: '',
        remarks: "test",
        bankAccount: '',
        user_id: ''
    })

    const [errorValue, setErrorValue] = useState({})
    // console.log(errorValue);
    const [databankList, setDataBankList] = useState(null)
    const [bankId, setBankId] = useState(null)
    const [bankName, setBankName] = useState(null)
    const [buttonSubmit, setButtonSubmit] = useState(true)

    const validation = (values) => {
        const error = {}
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const accountRejexa = /^\d{ 9, 18}$/i
        const ifsc = /^[A-Z]{4}0[A-Z0-9]{6}$/gm
        if (!values.name) {
            error.name = "Name is Required!"
        }
        if (!values.phone) {
            error.phone = "Phone Number is Required!"

        }
        if (!values.bankAccount) {
            error.bankAccount = "Bank Account Number is Required! ";
        } else if (!accountRejexa.test(values.bankAccount)) {
            error.email = "Invalid Bank Account Number";
        }
        // if (!values.bankAccount) {
        //     error.bankAccount = "Bank Account Number is Required!"

        // }
        if (!values.ifsc) {
            error.ifsc = "IFSC Code is Required! ";
        } else if (!ifsc.test(values.ifsc)) {
            error.email = "Invalid Bank IFSC Code";
        }
        return error
    }

    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };

    const handleChange = (e) => {
        const clone = { ...initailValue }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setInitital(clone)
    }

    const handleSubmit = async (event) => {
        const clone = { ...initailValue, user_id: window.localStorage.getItem('userIdToken') }
        // event.preventDefault()
        // setErrorValue(validation(clone))
        try {
            const res = await bankAccount(clone)
            // console.log(res?.data?.data?.data?.bankName);
            filterBank(res?.data?.data?.data?.bankName)
            if (res?.data?.statusCode == '200') {
                toastSuccessMessage('Bank added successfully')
                setButtonSubmit(false)
            }
        } catch (error) {

        }
    }

    const bankList = async () => {
        try {
            const res = await bankListApi()
            setDataBankList(res?.data?.data);
        } catch (error) {

        }
    }

    const filterBank = async (bank) => {
        const filter = databankList.find((item) => {
            return item?.bank_name.toLowerCase() == bank.toLowerCase()
        })
        setBankId(filter.bankID);
        setBankName(filter.bank_name);
    }


    const handleSave = async () => {
        const clone = { ...initailValue, bank_ifsc: initailValue.ifsc, bank_account_number: initailValue.bankAccount, bank_account_name: initailValue.name, bank_name: bankName, bank_id: bankId, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await bankAccountSave(clone)
            if (res?.data?.statusCode == '200') {
                toastSuccessMessage(res?.data?.message)
                setButtonSubmit(false)
                setTimeout(() => {
                    setState(4)
                }, 1000);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        bankList()
    }, [])

    return <div className="container">
        <h6 style={{ margin: "15px 0", textAlign: "center" }}>Add You Bank Account</h6>
        <form className="row">
            <div className="col-6 mb-3 clrelative">
                <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={initailValue.name} placeholder="Enter Name" onChange={handleChange} />
                {/* <IoLocationOutline className="clApsulute" /> */}
                <p style={{ color: "red", marginBottom: '2px' }}>
                    {errorValue.name}
                </p>
            </div>

            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" name="phone" value={initailValue.phone} placeholder="Enter Mobile Number" onChange={handleChange} />
                {/* <IoLocationOutline className="clApsulute" /> */}
                <p style={{ color: "red", marginBottom: '2px' }}>
                    {errorValue.phone}
                </p>
            </div>


            <div className="col-6 mb-3 clrelative">
                <input type="text" className="form-control" id="exampleInputEmail1" name="ifsc" value={initailValue.ifsc} placeholder="Enter IFCS Code" onChange={handleChange} />
                <IoLocationOutline className="clApsulute" />
                <p style={{ color: "red", marginBottom: '2px' }}>
                    {errorValue.ifsc}
                </p>
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" name="bankAccount" value={initailValue.bankAccount} placeholder="Enter Account Number" onChange={handleChange} />
                <IoLocationOutline className="clApsulute" />
                <p style={{ color: "red", marginBottom: '2px' }}>
                    {errorValue.bankAccount}
                </p>
            </div>
            {/* <div className="row">
                <h6>Select acount type</h6>
                <div className="d-flex" style={{ margin: "10px 0 ", padding: "0" }}>
                    <div class="form-check" style={{ margin: "0 20px" }}>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange} />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Saving
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRaname" onChange={handleChange} />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Current
                        </label>
                    </div>
                </div>
            </div> */}

            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {/* <button type="submit" onClick={() => { setState(2) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button> */}
                {buttonSubmit ? <button type="button" onClick={handleSubmit} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Submit</button> :
                    <button type="button" onClick={handleSave} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Save</button>
                }

                {/* <button type="submit" onClick={() => { setState(4) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button> */}
            </div>
        </form >
        <ToastContainer />
    </div>
}