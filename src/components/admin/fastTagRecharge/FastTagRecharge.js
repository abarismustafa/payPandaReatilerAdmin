

function FastTagRecharge() {
    return (
        <>
            <div className="tab-pane fade active show in" id="Fastag" role="tabpanel" aria-labelledby="FastagTab">
                <div className="row">
                    <div className="col-md-12" id="fastag_toast_msg" style={{ display: 'none' }} />
                    <div className="col-md-5 col-sm-12">
                        <h2 className="SecTitle">Fastag Recharge</h2>
                        <form id="frmFASTAGrecahrge" name="frmFASTAGrecahrge" method="post" action="https://m.masterpay.pro/Retailer/recharge_home" className="CustomForm fl-form ng-pristine ng-valid" autoComplete="off">
                            <input type="hidden" id="hidFASTAGSubmitRecharge" name="hidFASTAGSubmitRecharge" defaultValue="Success" autoComplete="off" />
                            <input type="hidden" id="hidFASTAGAction" name="hidUtilAction" defaultValue autoComplete="off" />
                            <input type="hidden" id="hidFASTAGParticulars" name="hidParticulars" defaultValue autoComplete="off" />
                            <input type="hidden" id="hidFASTAGTpin" name="txtTpin" defaultValue autoComplete="off" />
                            <input type="hidden" id="elecbilltype" defaultValue autoComplete="off" />
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input fl-is-required"><label htmlFor="txtFASTAGNo" className="fl-label">Vehicle Number</label><input type="text" required className="form-control fastag_input fl-input" id="txtFASTAGNo" maxLength={40} name="txtvehicleft" placeholder="Vehicle Number" tabIndex={1} onkeyup="getCustName()" data-placeholder="Enter CA Number." /></div>
                            </div>
                            <div className="form-group">
                                {/* <label for="ddlFASTAGOperator">Company</label> */}
                                <select required className="form-control fastag_input" name="selcompanyft" placeholder="Select company name." tabIndex={2} id="ddlFASTAGOperator" onchange="check_fastag_param()">
                                    <option value={0} disabled selected="true">--Select company name--</option>
                                    <option value="391:yes">Axis Bank FASTag ( Minimum amount: 100 )</option>
                                    <option value="304:yes">Bank of Baroda - Fastag ( Minimum amount: 100 )</option>
                                    <option value="306:yes">HDFC  Bank - Fastag ( Minimum amount: 100 )</option>
                                    <option value="309:yes">ICICI Bank Fastag ( Minimum amount: 100 )</option>
                                    <option value="305:yes">IDFC FIRST Bank - FasTag ( Minimum amount: 100 )</option>
                                    <option value="307:yes">Indian Highways Management Company Ltd FASTag ( Minimum amount: 100 )</option>
                                    <option value="308:yes">IndusInd Bank FASTag ( Minimum amount: 100 )</option>
                                    <option value="387:yes">Kotak Mahindra Bank - Fastag ( Minimum amount: 100 )</option>
                                    <option value="380:yes">Paytm Payments Bank Fastag ( Minimum amount: 100 )</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input fl-is-required"><label htmlFor="txtFASTAGCustMobile" className="fl-label">Customer Mobile</label><input type="text" required className="form-control fastag_input fl-input" id="txtFASTAGCustMobile" maxLength={10} name="txtmobileft" placeholder="Customer Mobile" tabIndex={4} data-placeholder="Enter Customer Mobile." /></div>
                            </div>
                            <div className="form-group" id="tr_spanFASTAGBillAmount" style={{ display: 'none' }}>
                                <label htmlFor="txtFASTAGAmount">Bill Amount</label>
                                <span id="spanFASTAGBillAmount" style={{ fontWeight: 'bold', display: 'block' }} />
                                <input type="text" className="form-control fastag_input txtAmountFtagRec" id="fastagbillamountdirect" autoComplete="off" name="txtAmountft" defaultValue maxLength={5} /><span className="numtowords_output" id="numtowords_outputFtagRec" style={{ display: 'block' }}> Ninety Eight Thousand Nine Hundred and Nineteen </span>
                            </div>
                            <div className="form-group" id="tr_spanFASTAGPin" style={{ display: 'none' }}>
                                <span id="spanFASTAGPin" style={{ fontWeight: 'bold', display: 'block' }} />
                                <div className="fl-wrap fl-wrap-input fl-is-active"><label htmlFor="fastagPindirect" className="fl-label">Enter Pin</label><input type="password" id="fastagPindirect" name="txtTpin2ft" className="form-control fastag_input fl-input" defaultValue placeholder="Enter Pin" /></div>
                            </div>
                            <div className="FormButtons" id="btnFASTAGgetbill">
                                <input type="button" className="btn btn-primary" defaultValue="Get Bill" disabled="true" id="btnFASTAGRecharge_CheckBill" name="btnFASTAGRecharge_CheckBill" tabIndex={5} onclick="getFASTAGBill()" style={{ backgroundColor: '#d40b2e' }} />
                            </div>
                            <div className="FormButtons" id="btnFASTAGpaybill" style={{ display: 'none' }}>
                                <input type="button" className="btn btn-primary" defaultValue="PAY BILL" id="btnFASTAGRechargepaybill" name="btnFASTAGRechargepaybill" tabIndex={5} onclick="fastag_billpay_direct()" />
                            </div>
                            <div className="FormButtons">
                                <span style={{ color: 'red', paddingTop: 20, fontWeight: 'bold', display: 'block' }}>FASTag commission has been revised to 0.05%.</span>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-sm-12 mobileTopSpacing ng-scope" ng-controller="fastgCtrl">
                        <h2 className="SecTitle">Recent Transaction<p className="all-pm-0 float-right"><i className="fa fa-refresh" ng-click="updateFastg()" /></p></h2>
                        <div className="GridUi no-header-footer-grid">
                            <table className="DataTableGrid display responsive dataTable" style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Vehicle no.</th>
                                        <th>Company</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* ngRepeat: fastgRec in fastgRecharges */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default FastTagRecharge