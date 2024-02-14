
function CreatePin() {
    return (
        <>
            <div className="PageHeading">
                <h1>Transaction Password</h1>
            </div>
            <div className="ContentArea">
            <div className="card">
                <div className="card-header"><span>Change Your Transaction Password</span></div>
                <div className="card-body">
                    <form action="" method="post" name="frmCallAction" id="frmCallAction">
                        <input type="hidden" id="hidID" name="hidID" />
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label htmlFor="txtOldPassword">Old Transaction Password</label>
                                <input className="form-control error" id="txtOldPassword" name="txtOldPassword" type="password" placeholder="Old Txn Password" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="txtNewPassword">New Transaction Password</label>
                                <input className="form-control" id="txtNewPassword" name="txtNewPassword" type="password" placeholder="New Txn Password" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="txtCnfPassword">Confirm Transaction Password</label>
                                <input className="form-control" id="txtCnfPassword" name="txtCnfPassword" type="password" placeholder="Confirm New Txn Password" />
                            </div>
                        </div>
                        <div className="form-row">
                            <input type="submit" id="btnSubmit" name="btnSubmit" defaultValue="Submit" className="btn btn-primary" fdprocessedid="ud5num" />
                        </div>
                    </form></div>
                    </div>
            </div>

        </>
    )
}
export default CreatePin