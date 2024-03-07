import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { bankAccount } from "../../api/login/Login";
import { ToastContainer } from "react-toastify";
export const BankDetail = ({ setState }) => {

    const [initailValue, setInitital] = useState({
        name: '',
        ifsc: '',
        phone: '',
        remarks: "test",
        bankAccount: '',
        user_id: ''
    })

    const handleChange = (e) => {
        const clone = { ...initailValue }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setInitital(clone)
    }

    const handleSubmit = async () => {
        try {
            const res = await bankAccount({ ...initailValue, user_id: window.localStorage.getItem('userToken') })
        } catch (error) {

        }

        console.log({ ...initailValue, user_id: window.localStorage.getItem('userToken') });
    }

    return <div className="container">
        <h6 style={{ margin: "15px 0", textAlign: "center" }}>Add You Bank Account</h6>
        <form className="row">
            <div className="col-6 mb-3 clrelative">
                <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={initailValue.name} placeholder="Enter Name" onChange={handleChange} />
                {/* <IoLocationOutline className="clApsulute" /> */}
            </div>

            <div className="col-6 mb-3 clrelative">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Search Branch</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="col-6 mb-3 clrelative">
                <input type="text" className="form-control" id="exampleInputEmail1" name="ifsc" value={initailValue.ifsc} placeholder="Enter IFCS Code" onChange={handleChange} />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" name="bankAccount" value={initailValue.bankAccount} placeholder="Enter Account Number" onChange={handleChange} />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="row">
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
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <button type="submit" onClick={() => { setState(2) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
                <button type="button" onClick={handleSubmit} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Submit</button>
                <button type="submit" onClick={() => { setState(4) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button>
            </div>
        </form >
        <ToastContainer />
    </div>
}