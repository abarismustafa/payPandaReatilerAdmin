
function ElectricityBill() {
    return (
        <>
            <div className="tab-pane fade active show in" id="Electricity" role="tabpanel" aria-labelledby="ElectricityTab">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <h2 className="SecTitle">Electricity Bills</h2>
                        <form id="frmELECTRICITYrecahrge" name="frmELECTRICITYrecahrge" method="post" action="https://m.masterpay.pro/Retailer/recharge_home" className="CustomForm fl-form ng-pristine ng-valid" autoComplete="off">
                            <input type="hidden" id="hidELECTRICITYSubmitRecharge" name="hidELECTRICITYSubmitRecharge" defaultValue="Success" autoComplete="off" />
                            <input type="hidden" id="hidELECTRICITYAction" name="hidUtilAction" defaultValue autoComplete="off" />
                            <input type="hidden" id="hidELECTRICITYParticulars" name="hidParticulars" defaultValue autoComplete="off" />
                            <input type="hidden" id="hidElectricityTpin" name="txtTpin" defaultValue autoComplete="off" />
                            <input type="hidden" id="elecbilltype" defaultValue autoComplete="off" />
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtELECTRICITYNo" className="fl-label">CA Number</label><input type="text" className="form-control fl-input" id="txtELECTRICITYNo" maxLength={40} name="txtMobileNo" placeholder="CA Number" tabIndex={1} onkeyup="getCustName()" data-placeholder="Enter CA Number." /></div>
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-select"><label htmlFor="ddlELECTRICITYOperator" className="fl-label">Company</label><select className="form-control fl-select" name="ddlOperator" placeholder="Select company name." tabIndex={2} id="ddlELECTRICITYOperator" onchange="ELECTRICITY_enabledisableoption1()" data-placeholder="Select company name.">
                                    <option value>Company</option><option value={0}>--Select--</option>
                                    <option value={254}>Adani Electricity - MUMBAI</option>
                                    <option value={181}>Ajmer Vidyut Vitran Nigam Ltd. (AVVNL)</option>
                                    <option value={193}>Assam Power Distribution Company Ltd (APDCL)- NON </option>
                                    <option value={192}>Assam Power Distribution Company Ltd (APDCL)- RAPD</option>
                                    <option value={256}>BESCOM - BENGALURU</option>
                                    <option value={255}>BEST Undertaking - MUMBAI</option>
                                    <option value={178}>Bharatpur Electricity Services Ltd. (BESL)</option>
                                    <option value={179}>Bikaner Electricity Supply Limited (BKESL)</option>
                                    <option value={115}>BSES Rajdhani - Delhi</option>
                                    <option value={116}>BSES Yamuna - Delhi</option>
                                    <option value={287}>CESC - WEST BENGAL</option>
                                    <option value={194}>Chamundeshwari Electricity Supply Corp Ltd (CESCOM</option>
                                    <option value={127}>Chhattisgarh State Electricity Board</option>
                                    <option value={126}>Co-Operative Electric Supply Society Ltd - CESS</option>
                                    <option value={180}>Dakshin Gujarat Vij</option>
                                    <option value={191}>Dakshin Haryana Bijli Vitran Nigam (DHBVN)</option>
                                    <option value={195}>Daman and Diu Electricity Department</option>
                                    <option value={196}>DNH Power Distribution Company Limited</option>
                                    <option value={197}>Eastern Power Distribution Co Ltd (APEPDCL)</option>
                                    <option value={128}>Goa Electricity Department</option>
                                    <option value={198}>Gulbarga Electricity Supply Company Limited</option>
                                    <option value={258}>HESCOM - KARNATAKA</option>
                                    <option value={218}>Himachal Pradesh State Electricity Board</option>
                                    <option value={199}>Hubli Electricity Supply Company Ltd (HESCOM)</option>
                                    <option value={200}>India Power Corporation - West Bengal</option>
                                    <option value={201}>India Power Corporation Limited - Bihar</option>
                                    <option value={172}>Jaipur Vidut Vitran Nigam Ltd</option>
                                    <option value={129}>Jamshedpur Utilities and Services Company Limited</option>
                                    <option value={202}>Jharkhand Bijli Vitran Nigam Limited (JBVNL)</option>
                                    <option value={203}>Jodhpur Vidyut Vitran Nigam(JDVVNL)</option>
                                    <option value={285}>Kanpur Electricity Supply Company Ltd (KESCO)</option>
                                    <option value={120}>Kerala State Electricity Board Ltd (KSEB)</option>
                                    <option value={182}>Kota Electricity Distribution Ltd. (KEDL)</option>
                                    <option value={247}>M.P. Poorv Kshetra Vidyut Vitaran - Rural</option>
                                    <option value={232}>M.P. Poorv Kshetra Vidyut Vitaran - URBAN</option>
                                    <option value={204}>Madhya Gujarat Vij Company Limited</option>
                                    <option value={123}>Madhya Kshetra Vitaran (Rural) - MADHYA PRADESH</option>
                                    <option value={125}>Madhya Kshetra Vitaran (Urban) - MADHYA PRADESH</option>
                                    <option value={205}>Meghalaya Power Distribution Corporati on Ltd</option>
                                    <option value={119}>MSEDC - MAHARASHTRA</option>
                                    <option value={206}>Muzaffarpur Vidyut Vitran Limited</option>
                                    <option value={220}>NESCO, Odisha</option>
                                    <option value={233}>New Delhi Municipal Council (NDMC) - Electricity</option>
                                    <option value={124}>Noida Power Company Limited</option>
                                    <option value={159}>North Bihar Electricity</option>
                                    <option value={208}>ODISHA Discoms(B2B)</option>
                                    <option value={207}>ODISHA Discoms(B2C)</option>
                                    <option value={184}>Paschim Gujarat Vij</option>
                                    <option value={189}>Pashchimanchal Vidyut Vitran Nigam Limited-PVVNL</option>
                                    <option value={183}>Punjab State Power Corporation Ltd. (PSPCL)</option>
                                    <option value={415}>Purvanchal Vidyut Vitran Nigam Limited-PUVVNL</option>
                                    <option value={114}>Reliance Energy</option>
                                    <option value={186}>Reliance Energy - Mumbai</option>
                                    <option value={248}>Sikkim Power - RURAL</option>
                                    <option value={209}>SNDL Nagpur</option>
                                    <option value={160}>South Bihar Electricity</option>
                                    <option value={221}>SOUTHCO, Odisha</option>
                                    <option value={117}>Southern Power Distribution Co Ltd (APSPDCL)</option>
                                    <option value={211}>Tamil Nadu Electricity Board (TNEB)</option>
                                    <option value={253}>Tata Power - Delhi</option>
                                    <option value={171}>Tata Power - Mumbai</option>
                                    <option value={417}>Test Operator</option>
                                    <option value={225}>Torrent Power - Agra</option>
                                    <option value={226}>Torrent Power - Ahmedabad</option>
                                    <option value={227}>Torrent Power - Bhiwandi</option>
                                    <option value={367}>Torrent Power - Shilmumbrakalwa</option>
                                    <option value={228}>Torrent Power - Surat</option>
                                    <option value={223}>TP Ajmer Distribution Ltd (TPADL)</option>
                                    <option value={130}>Tripura State Electricity Corporation Ltd</option>
                                    <option value={188}>UPCL - UTTARAKHAND</option>
                                    <option value={212}>Uttar Gujarat Vij Company Limited</option>
                                    <option value={215}>Uttar Haryana Bijli Vitran Nigam (UHBVN)</option>
                                    <option value={190}>Uttar Pradesh Power Corp Ltd (UPPCL) - RURAL</option>
                                    <option value={416}>Uttar Pradesh Power Corp Ltd (UPPCL)-URBAN (Postpaid and Smart Meter Recharge)</option>
                                    <option value={224}>WESCO Utility</option>
                                    <option value={216}>West Bengal State Electricity Distribution Co. Ltd</option>
                                </select></div>
                            </div>
                            <div className="form-group" id="TR_ELECTRICITYoption1" style={{ display: 'none' }}>
                                <div className="fl-wrap fl-wrap-select"><label htmlFor="ddlELECTRICITY_city" id="labelELECTRICITY_option1" className="fl-label" /><select id="ddlELECTRICITY_city" name="ddlELECTRICITY_city" className="form-control fl-select" style={{ display: 'none' }}>
                                    <option value>null</option><option value="Ahmedabad">Ahmedabad</option>
                                    <option value="City">City</option>
                                </select></div>
                                <input style={{ display: 'none' }} type="text" className="form-control" id="txtELECTRICITYOption1" maxLength={40} name="txtOption1" tabIndex={1} />
                            </div>
                            <div className="form-group">
                                <div className="fl-wrap fl-wrap-input"><label htmlFor="txtELECTRICITYCustMobile" className="fl-label">Customer Mobile</label><input type="text" className="form-control fl-input" id="txtELECTRICITYCustMobile" maxLength={10} name="txtCustMobile" placeholder="Customer Mobile" tabIndex={4} data-placeholder="Enter Customer Mobile." /></div>
                            </div>
                            <div className="form-group" id="tr_spanELECTRICITYBillAmount" style={{ display: 'none' }}>
                                <span id="spanELECTRICITYBillAmount" style={{ fontWeight: 'bold', display: 'block' }} />
                                <div className="fl-wrap fl-wrap-input fl-is-active"><label htmlFor="txtELECTRICITYAmount" className="fl-label">Bill Amount</label><input type="text" id="txtELECTRICITYAmount" name="txtAmount" className="form-control txtAmountElecRec fl-input" style={{ display: 'none' }} placeholder="Bill Amount" /></div><span className="numtowords_output" id="numtowords_outputElecRec" style={{ display: 'block' }}> Nine Hundred and Eighty Nine Crore Nineteen Lakh Seventy Six Thousand Five Hundred and Twenty Three </span>
                            </div>
                            <div className="form-group" id="tr_spanELECTRICITYPin" style={{ display: 'none' }}>
                                <span id="spanELECTRICITYPin" style={{ fontWeight: 'bold', display: 'block' }} />
                                <div className="fl-wrap fl-wrap-input fl-is-active"><label htmlFor="txtELECTRICITYPin" className="fl-label">Enter Pin</label><input type="password" id="txtELECTRICITYPin" name="txtTpin2" className="form-control fl-input" placeholder="Enter Pin" /></div>
                            </div>
                            <div className="form-group" id="tr_spanELECTRICITYCustomerName" style={{ display: 'none' }}>
                                <label htmlFor="txtELECTRICITYCustomerName">Customer Name</label>
                                <span id="spanELECTRICITYCustomerName" style={{ fontWeight: 'bold' }} />
                                <input type="hidden" id="txtELECTRICITYCustomerName" name="txtCustName" autoComplete="off" />
                            </div>
                            <div className="form-group" id="tr_spanELECTRICITYDueDate" style={{ display: 'none' }}>
                                <label htmlFor="spanELECTRICITYDueDate">Bill DueDate</label>
                                <span id="spanELECTRICITYDueDate" style={{ fontWeight: 'bold' }} />
                            </div>
                            <div className="form-group" id="tr_spanELECTRICITYBillDate" style={{ display: 'none' }}>
                                <label htmlFor="spanELECTRICITYBillDate">Bill Date</label>
                                <span id="spanELECTRICITYBillDate" style={{ fontWeight: 'bold' }} />
                            </div>
                            <div className="form-group" id="tr_spanELECTRICITYBillNumber" style={{ display: 'none' }}>
                                <label htmlFor="spanELECTRICITYBillNumber">Bill Number</label>
                                <span id="spanELECTRICITYBillNumber" style={{ fontWeight: 'bold' }} />
                            </div>
                            <div className="form-group" id="tr_spanELECTRICITYBillPeriod" style={{ display: 'none' }}>
                                <label htmlFor="spanELECTRICITYBillPeriod">Bill Period</label>
                                <span id="spanELECTRICITYBillPeriod" style={{ fontWeight: 'bold' }} />
                            </div>
                            <div className="FormButtons">
                                <input type="button" className="btn btn-primary" defaultValue="Get Bill" id="btnELECTRICITYRecharge_CheckBill" name="btnELECTRICITYRecharge_CheckBill" tabIndex={5} onclick="getELECTRICITYBill()" />
                            </div>
                            <div className="FormButtons" id="btnELECTRICITYpaybill" style={{ display: 'none' }}>
                                <input type="button" className="btn btn-primary" defaultValue="PAY BILL" id="btnELECTRICITYRecharge" name="btnELECTRICITYRecharge" tabIndex={5} onclick="ELECTRICITYsubmit()" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-sm-12 mobileTopSpacing ng-scope" ng-controller="elecCtrl">
                        <h2 className="SecTitle">Recent Transaction<p className="all-pm-0 float-right"><i className="fa fa-refresh" ng-click="updateElec()" /></p></h2>
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
                                    {/* ngRepeat: elecRec in elecRecharges */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ElectricityBill