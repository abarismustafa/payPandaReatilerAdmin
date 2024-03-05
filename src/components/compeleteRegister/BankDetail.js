import { IoLocationOutline } from "react-icons/io5";
export const BankDetail = ({ setState }) => {
    return <div className="container">
        <h6 style={{margin:"15px 0" ,textAlign:"center"}}>Add You Bank Account</h6>
        <form className="row">
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" aria-describedby="emailHelp" />
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
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter IFCS Code" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Account Number" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="row">
                <h6>Select acount type</h6>
                <div className="d-flex" style={{ margin: "10px 0 ", padding: "0" }}>
                    <div class="form-check" style={{ margin: "0 20px" }}>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Saving
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
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
                <button type="submit" onClick={() => { setState(4) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button>
            </div>
        </form >
    </div>
}