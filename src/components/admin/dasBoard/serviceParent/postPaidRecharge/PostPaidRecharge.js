

function PostPaidRecharge() {
    return (
        <>
            <div className="tab-pane fade active show in" id="Bbpspostpaid" role="tabpanel" aria-labelledby="BbpspostpaidTab">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <h2 className="SecTitle">Postpaid Recharge</h2>
                        <p className="disp-message" />
                        <form id="frm_bbps_p_recahrge" name="frm_bbps_p_recahrge" method="post" className="CustomForm fl-form ng-pristine ng-valid" autoComplete="off">
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="bbps_txtPostpaidNo" className="fl-label">Mobile number</label>
                                    <input type="text" className="form-control fl-input" id="bbps_txtPostpaidNo" maxLength={10} name="bbps_txtMobileNo" placeholder="Mobile number" tabIndex={3} data-placeholder="Enter Recharge Number." />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-select"><label htmlFor="bbps_ddlPostpaidOperator" className="fl-label">Company</label><select className="form-control fl-select" name="bbps_ddlOperator" placeholder="Select company name." tabIndex={2} id="bbps_ddlPostpaidOperator" onchange="load_fetchbill(this);" data-placeholder="Select company name.">
                                    <option value>Company</option><option value={0}>--Select--</option>
                                    <option value="ATPOST000NAT01">Airtel Postpaid</option>
                                    <option value="VODA00000NATVA">Idea Postpaid</option>
                                    <option value="JIO000000NAT01">Jio Postpaid</option>
                                    <option value="VODA00000NATVA">Vodafone Postpaid</option>
                                </select></div>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="bbps_txtPostpaidAmount" className="fl-label">Amount</label>
                                    <input type="text" style={{ cursor: 'text !important', backgroundColor: 'white' }} className="form-control txtAmountPostRec fl-input" id="bbps_txtPostpaidAmount" maxLength={10} name="bbps_txtAmount" onkeypress="return isNumeric(event);" placeholder="Amount" readOnly onfocus="if (this.hasAttribute('readonly')) { this.removeAttribute('readonly');this.blur();    this.focus();  }" data-placeholder="Enter recharge amount." />
                                </div><span className="numtowords_output" id="numtowords_outputPostRec" />
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="bbps_txtPTpin" className="fl-label">Tpin</label><input type="password" style={{ cursor: 'text !important', backgroundColor: 'white' }} className="form-control fl-input" id="bbps_txtPTpin" maxLength={4} name="bbps_txtTpin" onkeypress="return isNumeric(event);" placeholder="Tpin" tabIndex={4} readOnly onfocus="if (this.hasAttribute('readonly')) { this.removeAttribute('readonly');this.blur();    this.focus();  }" data-placeholder="Enter Tpin" /></div>
                            </div>
                            <div className="FormButtons">
                                <input type="button" className="btn btn-success" defaultValue="Submit" id="bbps_btnPostpaidRecharge" name="btnRecharge" tabIndex={4} onclick="Bbpspostpaidsubmit()" />
                                <input type="button" className="btn btn-primary" defaultValue="Get Bill" id="btnPostpaidGetBill" name="btnRecharge" tabIndex={4} style={{ display: 'none' }} onclick="BbpsGetBill()" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-sm-12 mobileTopSpacing ng-scope" ng-controller="bbpspostpaidCtrl">
                        <h2 className="SecTitle">Recent Transaction<p className="all-pm-0 float-right"><i className="fa fa-refresh" ng-click="updatebbpsPostpaid()" /></p></h2>
                        <div className="GridUi no-header-footer-grid">
                            <table className="DataTableGrid display responsive dataTable" style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Mobile no.</th>
                                        <th>Operator</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* ngRepeat: ppaidRec in ppaidRecharges */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PostPaidRecharge