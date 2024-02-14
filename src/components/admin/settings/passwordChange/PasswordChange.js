
function PasswordChange() {
    return (
        <>
        
            <div className="PageHeading">
                <h1>Password</h1>
            </div>
            <div className="ContentArea">
            <div className="card">
                <div className="card-header"><span>Change Your Password</span></div>
                <div className="card-body">
                    <div className="well" style={{ display: 'none' }}>
                    </div>
                    <form action="" method="post" name="frmCallAction" id="frmCallAction">
                        <input type="hidden" id="hidID" name="hidID" />
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label htmlFor="txtOldPassword">Old Password</label>
                                <input className="form-control error" id="txtOldPassword" name="txtOldPassword" type="password" placeholder="Old Password" required />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="txtNewPassword">New Password</label>
                                <input className="form-control error" id="txtNewPassword" name="txtNewPassword" type="password" placeholder="New Password" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="txtCnfPassword">Confirm Password</label>
                                <input className="form-control" id="txtCnfPassword" name="txtCnfPassword" type="password" placeholder="Confirm New Password" />
                            </div>
                        </div>
                        <div className="form-row">
                            <input type="submit" id="btnSubmit" name="btnSubmit" defaultValue="Submit" className="btn btn-primary" />
                        </div>
                    </form></div>
            </div>
            </div>

        </>
    )
}
export default PasswordChange