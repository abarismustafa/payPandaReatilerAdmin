import { CiUser } from "react-icons/ci"
import { PiDeviceMobileSpeakerLight } from "react-icons/pi"
import { IoLocationOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";


export const SecForm = ({setState}) => {
    return <div className="container">
        <form className="row">
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Surabh Shukla" aria-describedby="emailHelp" />
                <CiUser className="clApsulute"/>
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="2334543534" aria-describedby="emailHelp" />
                <PiDeviceMobileSpeakerLight className="clApsulute"/>
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Alernate mobile number" aria-describedby="emailHelp" />
                <PiDeviceMobileSpeakerLight className="clApsulute"/>
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Present Address" aria-describedby="emailHelp" />
                <IoLocationOutline className="clApsulute"/>
            </div>
            <div className="col-6 mb-3 clrelative">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                {/* <IoLocationOutline className="clApsulute"/> */}
            </div>
            <div className="col-6 mb-3 clrelative">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                {/* <IoLocationOutline className="clApsulute"/> */}
            </div>
            <div className="col-6 mb-3 clrelative">
                <select class="form-select" aria-label="Default select example">
                    <option selected>District</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="col-6 mb-3 clrelative">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter Education Qualification" aria-describedby="emailHelp" />
                <FaGraduationCap className="clApsulute"/>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <button type="submit" onClick={()=>{setState(0)}} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
                <button type="submit" onClick={()=>{setState(2)}} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button>
            </div>
        </form >
    </div>
}