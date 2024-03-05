
function TabMobileEmail() {
    return (
        <>
            <div className="email-mobile-tab">
                <div className="mobileitab me-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="via-mobile" defaultChecked />
                        <label className="form-check-label" htmlFor="via-mobile">
                            Via Mobile
                        </label>
                    </div>

                </div>
                <div className="emailtab">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="via-email" />
                        <label className="form-check-label" htmlFor="via-email">
                            Via Email
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TabMobileEmail