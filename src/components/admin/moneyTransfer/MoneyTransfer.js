
function MoneyTransfer() {
    return (
        <>
            <div className="PageHeading"><h1>Domestic Money Remittance</h1></div>
            <div className="ContentArea"><div className="card">
                <div className="card-header">
                    <span>Search</span>
                    <div style={{ float: 'right', color: '#1e5591', fontWeight: 600, paddingTop: 15 }}>Dhamaka Offer Limit: 62011</div>
                </div>
                <div className="card-body">
                    <div className="row row-row" id="dev-search-form">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="txtSM">Sender Mobile Number <span id="lenofsendernumber" className="float-right" /></label>
                                <input type="number" id="txtSM" className="form-control" onkeypress="javascript:return ( this.value.length < 10 );" tabIndex={1} autoComplete="off" fdprocessedid="d9wxsf" />
                            </div>
                        </div>
                        <div className="col-1 block-seprator2 mx-auto"><span>OR</span></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="txtRA">Recipient Account Number <span id="lenofbeneaccno" className="float-right" /></label>
                                <input type="text" id="txtRA" className="form-control" maxLength={22} tabIndex={2} autoComplete="off" fdprocessedid="rrve1" />
                            </div>
                        </div>
                        <div className="col-md-3 pt-md-3 mt-1">
                            <button type="button" id="btnSearch" className="btn btn-success custom-button example-1" title="Click to search" onclick="return asdfjkjkjhs098098asdf()" tabIndex={3} fdprocessedid="uo7pv5">Search</button>
                        </div>
                    </div></div></div></div>
        </>
    )
}
export default MoneyTransfer