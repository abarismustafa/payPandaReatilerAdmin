import { Upload } from "antd"
import { useEffect, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { cloudImage, uploadDocument, userValidate } from "../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";

const uploadButtonAdfront = (
  <button
    style={{
      border: 0,
      background: 'none',
    }}
    type="button"
  >
    <PlusOutlined />
    <div
      style={{
        marginTop: 8,
      }}
    >
      Uplaod Aadhaar Front
    </div>
  </button>
);
const uploadButtonAdback = (
  <button
    style={{
      border: 0,
      background: 'none',
    }}
    type="button"
  >
    <PlusOutlined />
    <div
      style={{
        marginTop: 8,
      }}
    >
      Uplaod Aadhaar back
    </div>
  </button>
);
const uploadButtonpanfront = (
  <button
    style={{
      border: 0,
      background: 'none',
    }}
    type="button"
  >
    <PlusOutlined />
    <div
      style={{
        marginTop: 8,
      }}
    >
      Uplaod Pancard Front
    </div>
  </button>
);
const uploadButtonpanback = (
  <button
    style={{
      border: 0,
      background: 'none',
    }}
    type="button"
  >
    <PlusOutlined />
    <div
      style={{
        marginTop: 8,
      }}
    >
      Uplaod bank Proof
    </div>
  </button>
);
const uploadButtonCertificate = (
  <button
    style={{
      border: 0,
      background: 'none',
    }}
    type="button"
  >
    <PlusOutlined />
    <div
      style={{
        marginTop: 8,
      }}
    >
      Upload GST Certificate
    </div>
  </button>
);

export const UploadDoc = ({ setState }) => {
  const [isGstAvailable, setIsGstAvailable] = useState(false)
  const [fileList, setFileList] = useState([])
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const [initailValue, setInitialValue] = useState({
    adhaar_front_card: '',
    adhaar_back_card: '',
    pan_card: '',
    gst: '',
    bank_proof: '',
    user_id: ''
  })

  const gstIdVerified = async () => {
    try {
      const res = await userValidate()
      if (res.data.isGstAvailable == true) {
        setIsGstAvailable(true)
      }
    } catch (error) {
    }
    // console.log(res.data.isGstAvailable);
  }
  useEffect(() => {
    gstIdVerified()
  },)

  const toastSuccessMessage = (str) => {
    toast.success(`${str}`, {
      position: "top-center"
    })
  };

  const onChangeHandleImage = async (e, nam) => {
    // console.log(e, nam);
    const image = new FormData();
    image.append('image', e.file.originFileObj);
    try {
      const res = await cloudImage(image)
      const clone = { ...initailValue, [nam]: res.data?.data.url }
      // clone[e.target.name] = res.data?.data.url
      setInitialValue(clone)
      image.delete('image')
    } catch (error) {

    }
  }
  const submitData = async () => {
    try {
      const res = await uploadDocument({ ...initailValue, user_id: window.localStorage.getItem('userIdToken') })
      console.log(res);
      if (res?.data?.statusCode == '200') {
        toastSuccessMessage('Document Upload Successfull')
        setTimeout(() => {
          setState(5)
        }, 1000);
      }
    } catch (error) {

    }

  }
  return <div className="container">
    <h6 style={{ margin: "15px 0", textAlign: "center" }}>Add You Bank Account</h6>
    <form className="row">
      <div className="col-6 mainant">
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          onChange={(e) => { onChangeHandleImage(e, 'adhaar_front_card') }}
          name="adhaar_front_card"
        >
          {uploadButtonAdfront}
        </Upload>
      </div>
      <div className="col-6 mainant">
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          onChange={(e) => { onChangeHandleImage(e, 'adhaar_back_card') }}
          name="adhaar_back_card"
        >
          {uploadButtonAdback}
        </Upload>
      </div>
      <div className="col-6 mainant">
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          onChange={(e) => { onChangeHandleImage(e, 'pan_card') }}
          name="pan_card"
        >
          {uploadButtonpanfront}
        </Upload>
      </div>
      <div className="col-6 mainant">
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          onChange={(e) => { onChangeHandleImage(e, 'bank_proof') }}
          name="bank_proof"
        >
          {uploadButtonpanback}
        </Upload>
      </div>
      {isGstAvailable && <div className="col-6 mainant">
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          onChange={(e) => { onChangeHandleImage(e, 'gst') }}
          name="gst"
        >
          {uploadButtonCertificate}
        </Upload>
      </div>}



      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <button type="submit" onClick={() => { setState(3) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
        <button type="button" onClick={submitData} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Submit</button>


      </div>
    </form >
    <ToastContainer />
  </div>
}