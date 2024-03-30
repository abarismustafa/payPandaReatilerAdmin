
import { Pagination } from "antd"
import { useEffect, useState } from "react"
import { dmtTransiList, walletsREports } from "../../../api/login/Login"
import Loader from "../../../common/loader/Loader"
function WalletReport() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)


    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        min_amt: 0,
        max_amt: 0,
        end_date: '',
        start_date: '',
        type: '',
        trans_type: '',
        order_id: '',
        txn_id: '',

    })

    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: page, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await walletsREports(clone)
            // console.log(res);
            setTotalCount(res?.data?.data?.total)
            setData(res?.data?.data?.wallet)
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {

        setPage(e - 1)
        getTransitionReport(e - 1)
    };
    useEffect(() => {
        getTransitionReport()
    }, [])
    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading">
                <h1>Wallet Report</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Min Amount</label>
                                    <input type="number" name="min_amt" id="account_no" className="form-control" value={filterInitial.min_amt} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Max Amount</label>
                                    <input type="number" name="max_amt" id="account_no" className="form-control" value={filterInitial.max_amt} onChange={handleChange} />
                                </div>

                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Start Date</label>
                                    <input type="date" name="start_date" id="account_no" className="form-control" value={filterInitial.start_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">End Date</label>
                                    <input type="date" name="end_date" id="account_no" className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Type</label>
                                    <select class="form-select" name="type" onChange={handleChange}>
                                        <option selected>select Type</option>
                                        <option value="credit">Credit</option>
                                        <option value="debit">Debit</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-4">

                                    <label htmlFor="txtUserId">Transaction Type</label>
                                    <select class="form-select" name="trans_type" onChange={handleChange}>
                                        <option selected>Select Transaction type</option>
                                        <option value="refund">Refund</option>
                                        <option value="recharge">Recharge</option>
                                        <option value="transfer">Transfer</option>
                                        <option value="order">Order</option>
                                        <option value="bill_pay">bill_pay</option>
                                        <option value="pan">Pan</option>
                                        <option value="fastag">Fastag</option>
                                        <option value="credit_card">Credit Card</option>
                                        <option value="lic_bill">lic bill</option>
                                        <option value="qr_code">qr_code</option>
                                        <option value="add-wallet">add-wallet</option>
                                        <option value="onBoarding">On Boarding</option>
                                        <option value="fromAEPS">fromAEPS</option>
                                        <option value="reversal">reversal</option>
                                        <option value="ureversal">ureversal</option>
                                        <option value="ucommission">commission</option>
                                        <option value="validate_beneficiary">validate_beneficiary</option>
                                        <option value="dmt">dmt</option>
                                        <option value="dmt_rev">dmt_rev</option>
                                        <option value="admintrf">admin transfer</option>
                                        <option value="cms">CMS</option>
                                    </select>

                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="order_id">Order Id</label>
                                    <input type="text" name="order_id" id="order_id" className="form-control" placeholder="Enter Order Id" value={filterInitial.order_id} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txn_id">Txn Id</label>
                                    <input type="text" name="txn_id " id="txn_id " className="form-control" placeholder="Enter Txn Id" value={filterInitial.txn_id} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <button type="button" className="btn btn-primary" onClick={getTransitionReport}>Search</button>
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <input type="button" name="btnExport" id="btnExport" defaultValue="Export" className="btn btn-secondary" onclick="startexoprt()" fdprocessedid="6zqsnhw" />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="card mt-4" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
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
                            </div>
                            <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                            <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                <thead>
                                    <tr role="row">
                                        <th className="sorting">Created Date</th>
                                        {/* <th className="sorting">
                                            Update Date
                                        </th> */}
                                        <th className="sorting">
                                            Txn Id
                                        </th>
                                        <th className="sorting">
                                            Order Id
                                        </th>
                                        <th className="sorting" >Transaction type</th>
                                        <th className="sorting" >Type</th>
                                        <th className="sorting" >Opening Balance</th>
                                        <th className="sorting" >Closing Balance</th>
                                        <th className="sorting" >Amount</th>
                                        <th className="sorting" >Is Refunded</th>
                                        <th className="sorting" >Is Commission</th>
                                        <th className="sorting" >Message</th>
                                        <th className="sorting" >Approve</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item) => {
                                        // console.log(item);
                                        return <tr className="odd" key={item?._id}>
                                            <td valign="top" className="dataTables_empty">{new Date(item?.createdAt).getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()}</td>
                                            {/* <td valign="top" className="dataTables_empty">{item?.updatedAt}</td> */}
                                            <th valign="top" className="dataTables_empty">
                                                {item?.txn_id}
                                            </th>
                                            <td valign="top" className="dataTables_empty">{item?.order_id}</td>
                                            <td valign="top" className="dataTables_empty">{item?.trans_type}</td>
                                            <td valign="top" className="dataTables_empty">{item?.type}</td>
                                            <td valign="top" className="dataTables_empty">{item?.o_bal}</td>
                                            <td valign="top" className="dataTables_empty">{item?.c_bal}</td>
                                            <td valign="top" className="dataTables_empty">{item?.amount}</td>
                                            <td valign="top" className="dataTables_empty">{item?.is_refunded == true ? 'Yes' : 'No'}</td>
                                            <td valign="top" className="dataTables_empty">{item?.is_commision == true ? 'Yes' : 'No'}</td>
                                            <td valign="top" className="dataTables_empty">{item?.message}</td>
                                            <td valign="top" className="dataTables_empty">{item?.approve.toString()}</td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                            <div className="dataTables_info_page">
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total {totalCount}  entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">


                                    <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={''}

                                        defaultCurrent={1}
                                        onChange={onChangeVal}
                                        total={totalCount}
                                    />


                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>

            </div>
        </>
    )
}
export default WalletReport