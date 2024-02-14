
function RechargeHistory() {
    return (
        <>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header">
                        <span>Filter</span>
                        <div className="float-right mt-2">
                            <button className="btn btn-success mr-2" type="button" id="all-success" fdprocessedid="guzzp">Success : 0</button>
                            <button className="btn btn-warning mr-2" type="button" id="all-pending" fdprocessedid="5z6v5">Pending : 0</button>
                            <button className="btn btn-danger mr-2" type="button" id="all-failure" fdprocessedid="n4v2pr">Failure : 0</button>
                            <button className="btn btn-info" type="button" id="all-commission" fdprocessedid="df961n">Commission : 0</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <form action="https://m.masterpay.pro/Retailer/recharge_history " method="post" name="frmCallAction" id="frmCallAction">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="txtFrom">From Date</label>
                                    <input className="form-control datefield" id="txtFrom" name="txtFrom" type="date" style={{ cursor: 'pointer' }} placeholder="Select Date" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="txtTo">To Date</label>
                                    <input className="form-control datefield" id="txtTo" name="txtTo" type="date" style={{ cursor: 'pointer' }} placeholder="Select Date" fdprocessedid="f4qi9f" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="ddlstatus">Status:</label>
                                    <select id="ddlstatus" name="ddlstatus" className="form-control" fdprocessedid="ao0u4f">
                                        <option value="ALL">ALL</option>
                                        <option value="Success">Success</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Failure">Failure</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="ddloperator">Operator</label>
                                    <select id="ddloperator" name="ddloperator" className="form-control" fdprocessedid="5kxypi">
                                        <option value="ALL">ALL</option>
                                        <option value={392}>
                                            Aadhar Housing Finance Limited(customer) - CMS                        </option>
                                        <option value={398}>
                                            Adani Capital (ACPL) AGENT - CMS                        </option>
                                        <option value={435}>
                                            Adani Capital Pvt Ltd - Loans                        </option>
                                        <option value={254}>
                                            Adani Electricity - MUMBAI                        </option>
                                        <option value={138}>
                                            Adani Gas - Gujarat                        </option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="txtNumId">Number / Id</label>
                                    <input className="form-control" id="txtNumId" name="txtNumId" type="text" placeholder="Mobile No / Recharge Id" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="ddldb">Data</label>
                                    <select id="ddldb" name="ddldb" className="form-control" fdprocessedid="xlkjqw">
                                        <option value="LIVE">LIVE</option>
                                        <option value="ARCHIVE">ARCHIVE</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <input type="submit" id="btnSearch" name="btnSearch" defaultValue="Search" className="btn btn-primary" />
                                &nbsp; &nbsp; <input type="button" id="btnExport" name="btnExport" defaultValue="Export" className="btn btn-secondary" />
                                &nbsp; &nbsp; <button className="btn btn-primary" type="button" fdprocessedid="vvjlzh">Live Data Date :
                                    2023-11-22                  </button>
                            </div>
                        </form></div>
                    <form id="frmcomplain" method="post">
                        <input type="hidden" id="hidrecid" name="hidrecid" />
                        <input type="hidden" id="hidmsg" name="hidmsg" />
                        <input type="hidden" id="hidmsgtext" name="hidmsgtext" />
                    </form>
                </div>
                <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div className="GridUi no-header-footer-grid" id="all_transaction">
                            <div id="rechargehistorytbl_wrapper" className="dataTables_wrapper">
                            <div className="d-flex  justify-content-between align-items-center">
                            <div className="dataTables_length" id="myTable_length">
                                <label>Show <select name="myTable_length" aria-controls="myTable" className fdprocessedid="srx8j"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label>
                            </div>
                                <div className="form-group col-md-2">
                                    <label >
                                        Search:
                                    </label>
                                    <input className="form-control datefield" id="txtFrom" name="txtFrom" type="text" style={{ cursor: 'pointer' }} />
                                </div>
                            </div><table id="rechargehistorytbl" className="table table-striped table-bordered table-hover display fixed_headers dataTable" style={{ width: 1250 }} role="grid" aria-describedby="rechargehistorytbl_info">
                                <thead>
                                    <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Sr No: activate to sort column descending">Sr No</th><th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Recharge ID: activate to sort column ascending">Recharge ID</th><th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Txn Id: activate to sort column ascending">Txn Id</th><th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Recharge  DateTime: activate to sort column ascending">Recharge <br /> DateTime</th><th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Company Name: activate to sort column ascending">Company Name</th><th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Mobile No: activate to sort column ascending">Mobile No</th><th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Amount: activate to sort column ascending">Amount</th><th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Debit Amount: activate to sort column ascending">Debit Amount</th><th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Balance: activate to sort column ascending">Balance</th><th className="action_th sorting_disabled" rowSpan={1} colSpan={1} aria-label="Status">Status</th><th className="action_th sorting_disabled" rowSpan={1} colSpan={1} aria-label="Complain">Complain</th></tr>
                                </thead>
                                <tbody>
                                    <tr className="odd"><td valign="top" colSpan={11} className="dataTables_empty">No data available in table</td></tr></tbody>
                                {/* <tfoot>
                                    <tr><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1}>Total :</th><th rowSpan={1} colSpan={1}>0</th><th rowSpan={1} colSpan={1}>0</th><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /></tr>
                                </tfoot> */}
                            </table>
                                {/* <div className="dataTables_info" id="rechargehistorytbl_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                <div className="dataTables_paginate paging_simple_numbers" id="rechargehistorytbl_paginate"><a className="paginate_button previous disabled" aria-controls="rechargehistorytbl" data-dt-idx={0} tabIndex={0} id="rechargehistorytbl_previous">Previous</a><span /><a className="paginate_button next disabled" aria-controls="rechargehistorytbl" data-dt-idx={1} tabIndex={0} id="rechargehistorytbl_next">Next</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default RechargeHistory