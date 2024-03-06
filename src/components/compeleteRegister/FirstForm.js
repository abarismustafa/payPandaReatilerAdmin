import { useState } from "react"
import { panNumberVarify } from "../../api/login/Login"

export const FirstForm = ({ setState }) => {
    const [pannum, setpannum] = useState()
    const submitPanNumber = async () => {
        const res = await panNumberVarify({ pan: pannum, user_id: window.localStorage.getItem('userToken')})
    }
    return <form>
        <div className="mb-3 pancars">
            <label for="exampleInputEmail1" className="form-label">Enter Pan Number</label>
            <div id="emailHelp" className="form-text">Enter your pan number. Pan number should belong to individual</div>
            <input type="text" onChange={(e) => { setpannum(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <button type="button" onClick={submitPanNumber} style={{ backgroundColor: '#2E3191', margin: "6px 0" }} disabled={!pannum ? true : false} className="btn btn-primary">Verify Pan</button>
        </div>
        <div className="mb-3 pancars">
            <label for="exampleInputPassword1" className="form-label">Enter Adhaar Number</label>
            <div id="emailHelp" className="form-text">Enter you adhaar number.....</div>
            <input type="number" className="form-control" id="exampleInputPassword1" />
        </div>

        <div style={{
            display: 'flex',
            justifyContent: 'end'
        }}>
            <button type="submit" onClick={() => setState((1))} style={{ backgroundColor: '#2E3191' }} disabled={true} className="btn btn-primary">Next</button>
        </div>
    </form >


}