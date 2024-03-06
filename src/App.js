
import { Navigate, Route, Routes } from 'react-router-dom';
import './asesets/main.css'
import './asesets/css/bootstap2.css'
import './asesets/css/caltmine.css'
import './asesets/css/fontAwesom.css'
// import './asesets/css/mixin.scss'

import './asesets/css/customAdmin.css'
import './asesets/css/selectMin.css'
import './asesets/css/responsive.css'


import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import HomePage from './pages/home';
import ContactUsPage from './pages/contactUs';
import ServicesPage from './pages/services';
import AboutPage from './pages/about';
import PrivacyPolicyPage from './pages/privacyPolicy';
import TermConditionPage from './pages/termCondition';
import GrievancePolicyPage from './pages/grivencePolicy';
import RefundCancilationPage from './pages/refundCancilation';
import DasRightSectionPage from './pages/admin/daseBoardRightSection/DasBoardRightSection';
import { useEffect, useState } from 'react';
import PaytmWalletPage from './pages/admin/paytmWallet';
import DasBoardPage from './pages/admin/dasBoard';
import MobileDthRecharge from './components/services/serviceSection/serviceDetails/MobileDthRechage/MobileDthRecharge';
import ServiceParent from './components/admin/dasBoard/serviceParent/ServiceParent';
import MobileRecharge from './components/admin/dasBoard/serviceParent/mobileRecharge/MobileRecharge';
import DthRecharge from './components/admin/dasBoard/serviceParent/dthRecharge/DthRecharge';
import PostPaidRecharge from './components/admin/dasBoard/serviceParent/postPaidRecharge/PostPaidRecharge';
import MoneyTransferPage from './pages/admin/moneyTransfer/MoneyTransfer';
import AdharPayPage from './pages/admin/adharPay/AdharPay';
import YblDtmPage from './pages/admin/yblDtm';
import CreditCardPaymentPage from './pages/admin/creditCardPayment';
import ElectricityBill from './components/admin/dasBoard/serviceParent/electricityBill/ElectricityBill';
import FastTagRecharge from './components/admin/fastTagRecharge/FastTagRecharge';
import GasBill from './components/admin/dasBoard/serviceParent/gasBill/GasBill';
import LandLineBills from './components/admin/dasBoard/serviceParent/landLineBill/LandLineBill';
import AepsPayoutPage from './pages/admin/aepsPayout';
import AddAepsPayout from './components/admin/aepsPayout/addAepsPayout/AddAepsPayout';
import ComplainListPage from './pages/admin/complainList';
import RechargeHistoryPage from './pages/admin/rechargeHistory';
import SearchRechargeHistoryPage from './pages/admin/searchRechargeHistory';
import MoneyTransferReprotPage from './pages/admin/moneyTrasferReport';
import FastTagPage from './pages/admin/fastagReport';
import DmtReportPage from './pages/admin/dmtReport';
import DtmReportSearchPage from './pages/admin/dtmReportSearch';
import DmtKycReportPage from './pages/admin/dmtKycReport';
import CreditBilPaymentPage from './pages/admin/creditBillPayment';
import AepsReportPage from './pages/admin/aepsReport';
import AepsTezreportPage from './pages/admin/aepsTezReport';
import AdharPayReportPage from './pages/admin/adharPayReport';
import AepsIcicReportPage from './pages/admin/aepsICICReport';
import AepsTransisation from './components/admin/dasBoard/serviceParent/aepsTransisation/AepsTransisation';
import AepsTezAddPaymentPage from './pages/admin/aepsTezAddPayment';
import AepsFinoUserDasBoardPage from './pages/admin/aepsFinoUserDasboard';
import InsurancedekhoReportPage from './pages/admin/insurancedekhoReport';
import BillPaymentReportPage from './pages/admin/billPaymentReport';
import AccountReportPage from './pages/admin/accountReport';
import BlanceTopUpHistoryPage from './pages/admin/blanceTopUpHistory';
import BankListPage from './pages/admin/bankList';
import PaymentWithDrowReportPage from './pages/admin/paymentWithDrowReport';
import CmsBillReportPage from './pages/admin/cmsBillReport';
import PostPaidBillTransPage from './pages/admin/postPaidBillTrans';
import TurboPaymentRequestPage from './pages/admin/turboPaymentRequest';
import PaymentGateWayPage from './pages/admin/paymentGateWay';
import RupayCardReportPage from './pages/admin/rupayCardReport';
import AepsDevicePage from './pages/admin/aepsDeviceDrivers';
// ---------------------------------------------------
import PasswordChagePage from './pages/admin/settings/passwordChage';
import CreatePinPage from './pages/admin/settings/createPin/CreatePinPage';
import OtpSecurityPage from './pages/admin/settings/otpSecurity';
import TdsCertificatePage from './pages/admin/tdsCertificate';
import MerchantLoginAreaPage from './pages/merchantLoginArea/Index';
<<<<<<< HEAD
import SinUpMerchantPage from './pages/merchantLoginArea/sinupMerchant';
=======
import CompeleteRegister from './pages/merchantLoginArea/compeleteRegister';
>>>>>>> 52ee0382af6a312e5f18d1252304485b7256c31a

function App() {
  const [isLogin, setislogin] = useState(window.localStorage.getItem('login'))

  useEffect(() => {
    window.localStorage.setItem('login', false)
  }, [])

  return (
    <>
      {/* {isLogin == 'false' && <Header setislogin={setislogin} />} */}
      {/* <Header /> */}

      <Routes>
        {/* <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/privacy-policy/:id' element={<PrivacyPolicyPage />} />
        <Route path='/terms-conditions/:id' element={<TermConditionPage />} />
        <Route path='/grievance-redressal-policy/:id' element={<GrievancePolicyPage />} />
        <Route path='/refund-and-cancellation-policy/:id' element={<RefundCancilationPage />} /> */}
<<<<<<< HEAD
        <Route path='login-area' element={<MerchantLoginAreaPage />} />
        <Route path='Signup' element={<SinUpMerchantPage />} />
        <Route path="/" element={<Navigate to="/admin" />} />
=======
        <Route path="/" element={<Navigate to="/login-area" />} />
        <Route path='/login-area' element={<MerchantLoginAreaPage />} />
        <Route path='/registrationComplete' element={<CompeleteRegister/>} />
>>>>>>> 52ee0382af6a312e5f18d1252304485b7256c31a
        <Route path='/admin' element={<DasRightSectionPage />}>
          <Route path="" element={<DasBoardPage />} >
            <Route path='mobile-reacharge' element={<MobileRecharge />} />
            <Route path='dth-reacharge' element={<DthRecharge />} />
            <Route path='postpaid-recharge' element={<PostPaidRecharge />} />
            <Route path='electricity-bills' element={<ElectricityBill />} />
            <Route path='fastag-recharge' element={<FastTagRecharge />} />
            <Route path='gas-bills' element={<GasBill />} />
            <Route path='landline-bills' element={<LandLineBills />} />
            <Route path='aeps-transaction' element={<AepsTransisation />} />
          </Route>
          <Route path='Retailer/Paytm_wallet' element={<PaytmWalletPage />} />
          <Route path='money-transfer' element={<MoneyTransferPage />} />
          <Route path='aadhar-pay' element={<AdharPayPage />} />
          <Route path='ybl_home' element={<YblDtmPage />} />
          <Route path='creditcard_bill_payment' element={<CreditCardPaymentPage />} />
          <Route path='aeps-payout-account' element={<AepsPayoutPage />} />
          <Route path='add-aeps-payout-account' element={<AddAepsPayout />} />
          <Route path='complain-list' element={<ComplainListPage />} />
          <Route path='aesp-device-drivers' element={<AepsDevicePage />} />
          <Route path='recharge_history' element={<RechargeHistoryPage />} />
          <Route path='search_recharge_history' element={<SearchRechargeHistoryPage />} />
          <Route path='money_transfer_Reprot' element={<MoneyTransferReprotPage />} />
          <Route path='fastag_report' element={<FastTagPage />} />
          <Route path='dmt_report' element={<DmtReportPage />} />
          <Route path='dmt_report_search' element={<DtmReportSearchPage />} />
          <Route path='dmtkyc_report' element={<DmtKycReportPage />} />
          <Route path='ccbill_payment_report' element={<CreditBilPaymentPage />} />
          <Route path='Aeps_fino_report' element={<AepsReportPage />} />
          <Route path='aeps_paytm_report' element={<AepsTezreportPage />} />
          <Route path='aadhaarpay_pay_report' element={<AdharPayReportPage />} />
          <Route path='aeps_icici_report' element={<AepsIcicReportPage />} />
          <Route path='Aeps_paytm/checkPaytm' element={<AepsTezAddPaymentPage />} />
          <Route path='aepsfino/useronboard' element={<AepsFinoUserDasBoardPage />} />
          <Route path='insurancedekho_report' element={<InsurancedekhoReportPage />} />
          <Route path='bill_report' element={<BillPaymentReportPage />} />
          <Route path='accountreport' element={<AccountReportPage />} />
          <Route path='topuphistory' element={<BlanceTopUpHistoryPage />} />
          <Route path='list_bank' element={<BankListPage />} />
          <Route path='Aeps_payout_report' element={<PaymentWithDrowReportPage />} />
          <Route path='Cms_bill_report' element={<CmsBillReportPage />} />
          <Route path='postpaid_bill_transaction' element={<PostPaidBillTransPage />} />
          <Route path='Turbo_payment_request' element={<TurboPaymentRequestPage />} />
          <Route path='Pg_report_rz' element={<PaymentGateWayPage />} />
          <Route path='Aquapay_gift_cards_report' element={<RupayCardReportPage />} />


          {/* <Route path="" element={<ServiceParent />} ></Route> */}
          <Route path='change_password' element={<PasswordChagePage />} />
          <Route path='change_txnpassword' element={<CreatePinPage />} />
          <Route path='Retailer_authentication' element={<OtpSecurityPage />} />
          <Route path='tds_certificate' element={<TdsCertificatePage />} />
        </Route>

        <Route />
      </Routes>
      {/* {isLogin == 'false' && <Footer />} */}

      {/* <div className='LayoutMain'>


      </div> */}
    </>
  );
}

export default App;
