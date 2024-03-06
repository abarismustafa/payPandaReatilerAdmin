
import { Link } from 'react-router-dom'
import imageLogo from '../../asesets/logo/image 2.png'
function MerchantLoginHeader() {
    return (
        <>
            <section className="MerchantLoginHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-sec">
                                <div className="image-log">
                                    <img src={imageLogo} alt="" />
                                </div>
                                <div className='buttonArea'>
                                    <Link to="/login-area" className='btn login-area me-3'>LOGIN</Link>
                                    <Link to="/Signup" className='btn sign-area'>SIGNUP</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MerchantLoginHeader