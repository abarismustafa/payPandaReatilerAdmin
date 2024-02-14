
function LandLineBills() {
    return (
        <>
            <div className="tab-pane fade active show in" id="Landline" role="tabpanel" aria-labelledby="LandlineTab">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <h2 className="SecTitle">Landline Bills</h2>
                        <form id="frmLandlinerecahrge" name="frmrecahrge" method="post" action="" className="CustomForm fl-form ng-pristine ng-valid" autoComplete="off">
                            <input type="hidden" id="hidELECTRICITYSubmitRecharge" name="hidELECTRICITYSubmitRecharge" defaultValue="Success" autoComplete="off" />
                            <input type="hidden" id="hidLandlineAction" name="hidUtilAction" defaultValue autoComplete="off" />
                            <input type="hidden" id="hidLandlineParticulars" name="hidParticulars" defaultValue autoComplete="off" />
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-select"><label htmlFor="ddlLandlineOperator" className="fl-label">Company</label><select className="form-control fl-select" name="ddlOperator" placeholder="Select company name." tabIndex={2} id="ddlLandlineOperator" onchange="setOptionalFielsds()" data-placeholder="Select company name." fdprocessedid="a0a7ru">
                                    <option value>Company</option><option value={0}>--Select--</option>
                                    <option value={104}>BSNL Landline - Individual</option>
                                    <option value={283}>BSNL - Corporate</option>
                                    <option value={103}>MTNL Delhi Landline</option>
                                    <option value={284}>MTNL - Mumbai</option>
                                </select></div>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtLandlineNo" id="td_landline_number" className="fl-label">Landline number</label><input type="text" className="form-control fl-input" id="txtLandlineNo" maxLength={11} name="txtMobileNo" tabIndex={1} onkeyup="getCustName()" placeholder="Landline number" fdprocessedid="7p1mop" /></div>
                            </div>
                            <div className="form-group" style={{ display: 'none' }} id="TR_Landlineoption1">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtLandlineOption1" id="labelLandline_option1" className="fl-label">Landline number</label><input type="text" className="form-control fl-input" id="txtLandlineOption1" maxLength={11} name="txtOption1" tabIndex={1} placeholder="Landline number" /></div>
                            </div>
                            <div className="form-group" id="tr_spanLandlineBillAmount">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtLandlineAmount" className="fl-label">Amount</label><input type="text" className="form-control txtAmountLlineRec fl-input" id="txtLandlineAmount" maxLength={20} name="txtAmount" tabIndex={3} placeholder="Amount" fdprocessedid="zf3lmc" /></div><span className="numtowords_output" id="numtowords_outputLlineRec" />
                                <span id="spanLandlineBillAmount" style={{ fontWeight: 'bold', display: 'block' }} />
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtLandlineCustMobile" className="fl-label">Customer Mobile Number</label><input type="text" className="form-control fl-input" id="txtLandlineCustMobile" maxLength={10} name="txtCustMobile" tabIndex={3} placeholder="Customer Mobile Number" fdprocessedid="jv6fgd" /></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPTpin">Tpin</label>
                                <input type="password" style={{ cursor: 'text !important', backgroundColor: 'white' }} className="form-control" id="txtLandlineTxnPwd" maxLength={4} name="txtTpin" onkeypress="return isNumeric(event);" placeholder="Enter Tpin" tabIndex={4} readOnly onfocus="if (this.hasAttribute('readonly')) { this.removeAttribute('readonly');this.blur();    this.focus();  }" fdprocessedid="ml36nq" />
                            </div>
                            <div className="FormButtons" id="btnLandlinecheckbill">
                                <input type="button" className="btn btn-success" defaultValue="Get Bill" id="btnLandlineRecharge_CheckBill" name="btnLandlineRecharge_CheckBill" tabIndex={4} onclick="getLandlineBill()" fdprocessedid="e21n9cp" />
                            </div>
                            <div className="FormButtons" id="btnLandlinepaybill" style={{ display: 'none' }}>
                                <input type="button" className="btn btn-success" defaultValue="Submit" id="btnLandlineRecharge" name="btnRecharge" tabIndex={4} onclick="Landlinesubmit()" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-sm-12 mobileTopSpacing ng-scope" ng-controller="llineCtrl">
                        <h2 className="SecTitle">Recent Transaction<p className="all-pm-0 float-right"><i className="fa fa-refresh" ng-click="updateLline()" /></p></h2>
                        <div className="GridUi no-header-footer-grid">
                            <div className="GridUi no-header-footer-grid">
                                <table className="DataTableGrid display responsive dataTable" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Landline no.</th>
                                            <th>Operator</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* ngRepeat: llineRec in llineRecharges */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default LandLineBills