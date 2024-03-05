
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
                                    <button className='btn login-area me-3'>LOGIN</button>
                                    <button className='btn sign-area'>SIGNUP</button>
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