import { Upload } from "antd"
import { useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
export const UploadDoc = ({ setState }) => {
    const [fileList, setFileList] = useState([])
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
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
    return <div className="container">
        <h6 style={{ margin: "15px 0", textAlign: "center" }}>Add You Bank Account</h6>
        <form className="row">
            <div className="col-6 mainant">
                <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    // fileList={fileList}
                    // onPreview={handlePreview}
                    onChange={handleChange}
                >
                     {/* {uploadButton} */}
                     {fileList.length >= 1 ? null : uploadButtonAdfront}
                </Upload>
            </div>
            <div className="col-6 mainant">
                <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    // fileList={fileList}
                    // onPreview={handlePreview}
                    onChange={handleChange}
                >
                     {/* {uploadButton} */}
                     {fileList.length >= 1 ? null : uploadButtonAdback}
                </Upload>
            </div>


            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <button type="submit" onClick={() => { setState(3) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Back</button>
                <button type="submit" onClick={() => { setState(5) }} style={{ backgroundColor: '#2E3191' }} className="btn btn-primary">Next</button>
            </div>
        </form >
    </div>
}