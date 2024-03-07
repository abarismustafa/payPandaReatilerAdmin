
import { IoLocationOutline } from "react-icons/io5";
export const GstBusinessForm = ({ setState }) => {
    return <div className="container">
        <div className="row">
            <h6 style={{ textAlign: "center", margin: "14px 0" }}>Are you Register for Gst</h6>
            <div className="d-flex" style={{justifyContent:"center" ,margin:"10px 0 "}}>
                <div class="form-check" style={{margin:"0 20px"}}>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label class="form-check-label" for="flexRadioDefault1">
                       Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                </div>
            </div>
        </div>
        <form className="row">
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter GST provisional GST number" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter business GST Name" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="GST Registration type" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Address" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                {/* <IoLocationOutline className="clApsulute"/> */}
            </div>

            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Pin Code" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Shop Name" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute" />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {/* <button type="submit" onClick={() => { setState(1) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
                <button type="submit" onClick={() => { setState(3) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button> */}
            </div>
        </form >
    </div>
}