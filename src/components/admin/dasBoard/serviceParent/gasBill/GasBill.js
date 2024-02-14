

function GasBill() {
    return (
        <>
            <div className="tab-pane fade active show in" id="Gas" role="tabpanel" aria-labelledby="GasTab">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <h2 className="SecTitle">Gas Bills</h2>
                        <form id="frmGASrecahrge" name="frmGASrecahrge" method="post" className="CustomForm fl-form ng-pristine ng-valid" autoComplete="off">
                            <input type="hidden" id="hidGASSubmitRecharge" name="hidELECTRICITYSubmitRecharge" defaultValue="Success" autoComplete="off" />
                            <input type="hidden" id="hidGASAction" name="hidUtilAction" defaultValue autoComplete="off" />
                            <input type="hidden" id="hidGASParticulars" name="hidParticulars" defaultValue autoComplete="off" />
                            <input type="hidden" id="hidGasTpin" name="txtTpin" defaultValue autoComplete="off" />
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtGASNo" className="fl-label">Sub number</label><input type="text" className="form-control fl-input" id="txtGASNo" maxLength={40} name="txtMobileNo" placeholder="Sub number" tabIndex={1} onkeyup="getCustName()" data-placeholder="Enter CA Number." /></div>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-select"><label htmlFor="ddlGASOperator" className="fl-label">Company</label><select className="form-control fl-select" name="ddlOperator" placeholder="Select company name." tabIndex={2} id="ddlGASOperator" data-placeholder="Select company name.">

                                    <option value={0}>--Select--</option>
                                    <option value={135}>Maharashtra Natural Gas Limited (MNGL)</option>
                                    <option value={136}>Indraprastha Gas Limited</option>
                                    <option value={137}>Gujarat Gas Limited</option>
                                    <option value={138}>Adani Gas - Gujarat</option>
                                    <option value={161}>Adani Gas - Haryana</option>
                                    <option value={259}>Charotar Gas Sahakari Mandali Ltd</option>
                                    <option value={260}>Haryana City Gas</option>
                                    <option value={261}>Mahanagar Gas</option>
                                    <option value={262}>Sabarmati Gas Limited (SGL)</option>
                                    <option value={263}>Siti Energy Ltd</option>
                                    <option value={264}>Tripura Natural Gas</option>
                                    <option value={265}>Vadodara Gas Limited (VGL)</option>
                                </select></div>
                            </div>
                            <div className="form-group" style={{ display: 'none' }} id="TR_GASoption1">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtGASOption1" id="labelGAS_option1" className="fl-label" /><input type="text" className="form-control fl-input" id="txtGASOption1" maxLength={11} name="txtOption1" tabIndex={1} placeholder="null" /></div>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtGASCustMobile" className="fl-label">Customer Mobile</label><input type="text" className="form-control fl-input" id="txtGASCustMobile" maxLength={10} name="txtCustMobile" placeholder="Customer Mobile" tabIndex={4} data-placeholder="Enter Customer Mobile." /></div>
                            </div>
                            <div className="form-group" id="tr_spanGasCustomerName" style={{ display: 'none' }}>
                                <label htmlFor="txtGASCustomerName">Customer Name</label>
                                <span id="spanGasCustomerName" style={{ fontWeight: 'bold' }} />
                                <input type="hidden" id="txtGASCustomerName" name="txtCustName" autoComplete="off" />
                            </div>
                            <div className="form-group" id="tr_spanGasBillAmount" style={{ display: 'none' }}>
                                <span id="spanGasBillAmount" style={{ fontWeight: 'bold' }} />
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtGASAmount" className="fl-label">Bill Amount</label><input type="text" id="txtGASAmount" name="txtAmount" className="form-control fl-input" placeholder="Bill Amount" /></div>
                            </div>
                            <div className="form-group" id="tr_spanGasDueDate" style={{ display: 'none' }}>
                                <label htmlFor="spanGasDueDate">Bill DueDate</label>
                                <span id="spanGasDueDate" style={{ fontWeight: 'bold' }} />
                            </div>
                            <div className="form-group" id="tr_spanGasBillDate" style={{ display: 'none' }}>
                                <label htmlFor="spanGasBillDate">Bill Date</label>
                                <span id="spanGasBillDate" style={{ fontWeight: 'bold' }} />
                            </div>
                            <div className="form-group" id="tr_spanGasBillNumber" style={{ display: 'none' }}>
                                <label htmlFor="spanGasBillNumber">Bill Number</label>
                                <span id="spanGasBillNumber" style={{ fontWeight: 'bold' }} />
                            </div>
                            <div className="form-group" id="tr_spanGasBillPeriod" style={{ display: 'none' }}>
                                <label htmlFor="spanGasBillPeriod">Bill Period</label>
                                <span id="spanGasBillPeriod" style={{ fontWeight: 'bold' }} />
                            </div>
                            <div className="FormButtons" id="btncheckbill">
                                <input type="button" className="btn btn-primary" defaultValue="Get Bill" id="btnGASRecharge_CheckBill" name="btnGASRecharge_CheckBill" tabIndex={5} onclick="getGasBill()" />
                            </div>
                            <div className="FormButtons" id="btnpaybill" style={{ display: 'none' }}>
                                <input type="button" className="btn btn-primary" defaultValue="PAY BILL" id="btnGASRecharge" name="btnGASRecharge" tabIndex={5} onclick="gassubmit()" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-sm-12 mobileTopSpacing ng-scope" ng-controller="gasCtrl">
                        <h2 className="SecTitle">Recent Transaction<p className="all-pm-0 float-right"><i className="fa fa-refresh" ng-click="updateGas()" /></p></h2>
                        <div className="GridUi no-header-footer-grid">
                            <table className="DataTableGrid display responsive dataTable" style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Sub no.</th>
                                        <th>Company</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* ngRepeat: gasRec in gasRecharges */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default GasBill