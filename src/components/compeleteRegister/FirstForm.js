export const FirstForm = ({setState}) => {
    return <form>
        <div className="mb-3 pancars">
            <label for="exampleInputEmail1" className="form-label">Enter Pan Number</label>
            <div id="emailHelp" className="form-text">Enter your pan number. Pan number should belong to individual</div>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
            <button type="submit" onClick={()=>setState((1))} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Verify</button>
        </div>
    </form >


}