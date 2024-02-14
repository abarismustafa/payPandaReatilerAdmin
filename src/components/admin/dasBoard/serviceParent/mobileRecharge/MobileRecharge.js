import ResentTransition from "./resentTransition/ResentTranssition"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react";
import * as yup from 'yup'
function MobileRecharge() {

    const defalutValue = {
        mobileNumber: '',
        operator: '',
        amount: '',
        tpin: ''
    }

    const validationSceema = yup.object().shape({
        mobileNumber: yup.string().required('Mobile Recharge is Requird!').min(10).max(10),
        operator: yup.string().required('Operator is Requird!'),
        amount: yup.string().required('Amount is Requird!'),
        tpin: yup.string().required('Tpin is Requird!'),
        // email: yup.string().required('email is Requird!').email('valid email'),
        // password: yup.string().required('passwoard is Required!').min(5).max(8),
        // gender: yup.string().required('gender is Requird!'),
        // termAndCondition: yup.boolean().oneOf([true], 'please Aceept Term And Condition'),
        // trnsformMood: yup.string().required('Trnport is Requird!'),
    })
    const handleSubmit = (value) => {
        console.log(value);

    }
    return (
        <>
            <div className="tab-pane fade active show in" id="Mobile" role="tabpanel" aria-labelledby="MobileTab">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <h2 className="SecTitle">Mobile Recharge</h2>
                        <Formik id="frmrecahrge" initialValues={defalutValue} validationSchema={validationSceema} onSubmit={handleSubmit} className="CustomForm fl-form ng-pristine ng-valid">
                            {({ errors, touched, resetForm }) => (
                                <Form>
                                    <div className="form-group">
                                        <div className="fl-wrap fl-wrap-input">
                                            <label htmlFor="txtMobileNo" className="fl-label">Mobile number</label>
                                            <Field type='number' name='mobileNumber' placeholder='Enter Mobile number'
                                                className={
                                                    `form-control
                                                    ${errors.mobileNumber && touched.mobileNumber ? ' is-invalid' : ''}`
                                                }
                                            />
                                            <p style={{ color: 'red' }}> <ErrorMessage name="mobileNumber" /></p>
                                        </div>
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-select"><label htmlFor="ddlOperator" className="fl-label">Operator</label>
                                                <Field component='select' name='operator' className={
                                                    `form-control
                                                    ${errors.operator && touched.operator ? ' is-invalid' : ''}`
                                                }>
                                                    <option value={2} disabled>--Select--</option>
                                                    <option value={71}>Airtel Prepaid</option>
                                                    <option value={82}>BSNL Prepaid</option>
                                                    <option value={83}>Vi Prepaid</option>
                                                    <option value={94}>JIO</option>
                                                </Field>
                                                <p style={{ color: 'red' }}> <ErrorMessage name="operator" /></p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="txtAmount" className="fl-label">Amount</label>
                                                <Field type='number' name='amount' placeholder='Enter Amount'
                                                    className={
                                                        `form-control
                                                    ${errors.amount && touched.amount ? ' is-invalid' : ''}`
                                                    }
                                                />
                                                <p style={{ color: 'red' }}> <ErrorMessage name="amount" /></p>
                                            </div>
                                            <span className="numtowords_output" id="numtowords_outputMobRec" />
                                        </div>
                                        <div className="form-group">
                                            <div className="fl-wrap fl-wrap-input">
                                                <label htmlFor="txtMobileTpin" className="fl-label">Tpin</label>
                                                <Field type='number' name='tpin' placeholder='Enter Tpin'
                                                    className={
                                                        `form-control
                                                    ${errors.tpin && touched.tpin ? ' is-invalid' : ''}`
                                                    }
                                                />
                                                <p style={{ color: 'red' }}> <ErrorMessage name="tpin" /></p>
                                            </div>
                                        </div>
                                        <div className="FormButtons">

                                            <button type="submit" className="btn btn-success">Submit</button>
                                            {/* <button
                                                type="button"
                                                onClick={resetForm}
                                                className="btn btn-warning float-right"
                                            >
                                                rest
                                            </button> */}
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <ResentTransition />
                </div>
            </div>

        </>
    )
}
export default MobileRecharge