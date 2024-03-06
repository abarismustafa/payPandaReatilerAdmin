import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
function MerchantLoginForm() {
    return (
        <>
            <div className="mobile-login-phone">
                <form action="">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span>
                        <input type="number" className="form-control" placeholder="Enter Mobile Number / Enter Email" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <div>
                        <button className="btn btn-login">LOGIN</button>
                    </div>
                </form>
                <div className="text-align-center mt-1">
                    <a href="#" >Forgot Password ?</a>
                </div>

            </div>
        </>
    )
}
export default MerchantLoginForm