import { useEffect, useState } from "react";
import { Getprofile, cloudImage, countryGet, languageGet, updateProfilee } from "../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";

function Profile() {
    const [country, setCountry] = useState()
    const [language, setLanguage] = useState()
    const [profileImage, setProfileImage] = useState()
    const [data, setData] = useState()
    // console.log(data);

    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        mobile: '',
        language_id: '',
        profile: '',
        country: '',
        user_id: ''
    });

    const handleChange = (e) => {
        const clone = { ...initialValues }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialValues(clone)

    }

    const getCountry = async () => {
        const res = await countryGet()
        setCountry(res?.data?.data)
    }
    const getlaguage = async () => {
        const res = await languageGet()
        setLanguage(res?.data?.data)

    }


    const imgs = new FormData();
    const colodinaryImage = async (e) => {
        setProfileImage(e.target.files[0])
        imgs.append("image", e.target.files[0]);
        try {
            const res = await cloudImage(imgs)
            // console.log(res?.data?.data?.url);
            setProfileImage(res?.data?.data?.url)
        } catch (error) {

        }
    }


    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-center",
        });
    };


    const updateProfile = async () => {
        const clone = { ...initialValues, profile: profileImage, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await updateProfilee(clone)
            if (res?.status == '200') {
                toastSuccessMessage(res.data.data.message)
            }
            // console.log(res);
        } catch (error) {

        }
    }

    const getDataProfile = async () => {
        try {
            const res = await Getprofile()
            setData(res?.data?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getCountry()
        getlaguage()
        getDataProfile()
    }, [])

    useEffect(() => {
        const ob = {
            name: data?.name,
            email: data?.email,
            mobile: data?.mobile,
            language_id: data?.language_id,
            country: data?.country,
            profile: data?.profile
        }
        setInitialValues(ob)
    }, [data])

    return (
        <>
            <div className="PageHeading"><h1>Update Profile</h1></div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Update Profile Area</span></div>
                    <div className="card-body">
                        <form action="#" id="frmCallAction">

                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtNumId">Name</label>
                                    <input className="form-control" id="txtNumId" name="name" type="text" value={initialValues.name} placeholder="Enter Name" onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-3">
                                    <img src={`https://api.paypandabnk.com/api/cloudinary/${data?.profile}`} style={{ width: '40%', height: '100px' }} alt="" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtNumId">Profile Image</label>

                                    <input className="form-control" id="txtNumId" name="txtNumId" type="file" placeholder="Profile Image" onChange={colodinaryImage} />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtNumId">Email</label>
                                    <input className="form-control" id="txtNumId" name="email" type="email" value={initialValues.email} placeholder="Enter Email" onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtNumId">Mobile Number</label>
                                    <input className="form-control" id="txtNumId" name="mobile" type="number" value={initialValues.mobile} placeholder="Enter Mobile Number" onChange={handleChange} />
                                </div>

                                <div className="form-group col-md-3">
                                    <label htmlFor="txtNumId">Country</label>
                                    <select class="form-select" aria-label="Default select example" name="country" value={initialValues?.country} onChange={handleChange}>
                                        <option selected>Select Country</option>
                                        {country && country?.map((item) => {
                                            return <option value={item?._id}>{item?.name}</option>
                                        })}

                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="txtNumId">Language</label>
                                    <select class="form-select" aria-label="Default select example" name="language_id" value={initialValues.language_id} onChange={handleChange}>
                                        <option selected>Select Language</option>
                                        {language && language?.map((item) => {
                                            return <option value={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <button type="button" id="btnSearch" className="btn btn-primary" onClick={updateProfile}>Profile Update</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div >
        </>
    )
}
export default Profile