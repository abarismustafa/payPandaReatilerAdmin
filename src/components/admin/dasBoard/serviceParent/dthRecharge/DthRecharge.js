

function DthRecharge() {
    return (
        <>
            <div className="tab-pane fade active show in" id="DTH" role="tabpanel" aria-labelledby="DTHTab">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <h2 className="SecTitle">DTH Recharge</h2>
                        <form id="frmDthrecahrge" name="frmrecahrge" method="post" action="https://m.masterpay.pro/Retailer/recharge_home" className="CustomForm fl-form ng-pristine ng-valid" autoComplete="off">
                            <input type="hidden" id="hidSubmitRecharge" name="hidSubmitRecharge" defaultValue="Success" autoComplete="off" />
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input">
                                    <label htmlFor="txtDthNo" className="fl-label">Customer ID</label>
                                    <input type="text" className="form-control fl-input" id="txtDthNo" maxLength={40} name="txtMobileNo" placeholder="Customer ID" tabIndex={1} onkeyup="getCustName()" data-placeholder="Enter Customer ID" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-select"><label htmlFor="ddlDthOperator" className="fl-label">Company</label><select className="form-control fl-select" name="ddlOperator" placeholder="Select company name." tabIndex={2} id="ddlDthOperator" data-placeholder="Select company name.">
                                    <option value>Company</option><option value={0}>--Select--</option>
                                    <option value={95}>Airtel DTH</option>
                                    <option value={97}>SUN TV</option>
                                    <option value={98}>Videocon D2H</option>
                                    <option value={99}>DISH TV</option>
                                    <option value={100}>TATA SKY</option>
                                </select></div>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtDthAmount" className="fl-label">Amount</label><input type="text" style={{ cursor: 'text !important', backgroundColor: 'white' }} className="form-control txtAmountDthRec fl-input" id="txtDthAmount" maxLength={20} name="txtAmount" placeholder="Amount" tabIndex={3} onfocus="if (this.hasAttribute('readonly')) { this.removeAttribute('readonly');this.blur();    this.focus();  }" data-placeholder="Enter Amount" /></div><span className="numtowords_output" id="numtowords_outputDthRec" style={{ display: 'none' }} />
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtDthTpin" className="fl-label">Tpin</label><input type="password" style={{ cursor: 'text !important', backgroundColor: 'white' }} className="form-control fl-input" id="txtDthTpin" maxLength={4} name="txtTpin" onkeypress="return isNumeric(event);" placeholder="Tpin" tabIndex={4} readOnly onfocus="if (this.hasAttribute('readonly')) { this.removeAttribute('readonly');this.blur();    this.focus();  }" data-placeholder="Enter Tpin" /></div>
                            </div>
                            <div className="FormButtons">
                                <input type="button" className="btn btn-success" defaultValue="Submit" id="btnDthRecharge" name="btnRecharge" tabIndex={4} onclick="dthsubmit()" />&nbsp;&nbsp;<input type="button" className="btn btn-primary" defaultValue="Get Plan Info" id="btnOffer" name="btnOffer" tabIndex={5} onclick="getDoffer()" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-sm-12 mobileTopSpacing ng-scope" ng-controller="dthCtrl">
                        <h2 className="SecTitle">Recent Transaction<p className="all-pm-0 float-right"><i className="fa fa-refresh" ng-click="updateDth()" /></p></h2>
                        <div className="GridUi no-header-footer-grid">
                            <table className="DataTableGrid display responsive dataTable" style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Customer ID</th>
                                        <th>Company</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* ngRepeat: dthRec in dthRecharges */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default DthRecharge