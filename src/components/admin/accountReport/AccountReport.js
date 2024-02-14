

function AccountReport() {
    return (
        <>
            <div className="PageHeading">
                <h1>Account Report</h1>
            </div>

            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmCallAction" id="frmCallAction">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-2">
                                    <label htmlFor="txtFrom">From Date</label>
                                    <input className="form-control datefield" id="txtFrom" name="txtFrom" type="text" style={{ cursor: 'pointer' }} />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="txtTo">To Date</label>
                                    <input className="form-control datefield" id="txtTo" name="txtTo" type="text" style={{ cursor: 'pointer' }} />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="ddldb">Data</label>
                                    <select id="ddldb" name="ddldb" className="form-control" fdprocessedid="g4nuva">
                                        <option value="LIVE">LIVE</option>
                                        <option value="ARCHIVE">ARCHIVE</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <input type="button" id="btnExport" name="btnExport" defaultValue="Export" className="btn btn-secondary" onclick="startexoprt()" fdprocessedid="fv9sw" />
                                </div>
                            </div>
                        </form></div>
                    <form id="frmexport" name="frmexport" action="" method="get">
                        <input type="hidden" id="hidfrm" name="from" />
                        <input type="hidden" id="hidto" name="to" />
                        <input type="hidden" id="hiddb" name="db" />
                    </form>
                </div>
                <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div className="GridUi no-header-footer-grid" id="all_transaction">
                            <table id="rechargehistorytbl" className="table table-striped table-bordered table-hover display fixed_headers" style={{ width: 1250 }}>
                                <thead>
                                    <tr>
                                        <th>Payment Date</th>
                                        <th>PaymentId</th>
                                        <th>Transaction Type</th>
                                        <th>Description</th>
                                        <th>Credit Amount</th>
                                        <th>Debit Amount</th>
                                        <th>Balance</th>
                                        <th>Payment From</th>
                                        <th>Payment To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default AccountReport