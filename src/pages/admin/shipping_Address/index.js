
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function Shipping_Address() {


    return (
        <div className="addressInfo mt-3">
            {/* {isLoading && (
        <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )} */}

            <div className="card container" style={{ margin: "10px auto" }}>
                <div className="card-header">
                    <h5 className="mb-0 h6">Shipping Address</h5>
                </div>
                <div className="card-body">
                    <div className="col-lg-6 mx-auto">
                        <div className="border p-3 rounded mb-3 c-pointer text-center bg-light">
                            <i className="la la-plus la-2x" />
                            <div
                                className="alpha-7"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <Link to='/admin/shipping_AddressaForm'>  Add Shipping Address</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters-10">
                        {/* {!data && <div className="preloaderCount">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>} */}
                        {[] &&
                            [{ _id: '1' }].map((item) => {
                                return (
                                    <div className="col-lg-6" key={item._id}>
                                        <div className="border p-3 pr-5 rounded mb-3 position-relative">
                                            <h6
                                                style={{
                                                    fontSize: "17px",
                                                    fontWeight: "bold",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                Type :{item?.type} Address
                                                <div className="form-check form-switch d-flex">
                                                    <FaEdit
                                                        onClick={() => {
                                                            // setIdAddresdEdit(item._id);
                                                        }}
                                                    />
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        // checked={item.active}
                                                        role="switch"
                                                        id="flexSwitchCheckChecked"
                                                    // onClick={() => billingShippingActive(item)}
                                                    />
                                                </div>
                                            </h6>
                                            <div>
                                                <span className="w-50 fw-600">Address:</span>
                                                <span className="ml-2">{item?.province}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Address Line 1:</span>
                                                <span className="ml-2">{item?.addressLine1}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Address Line 2:</span>
                                                <span className="ml-2">{item?.addressLine2}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Postal code:</span>
                                                <span className="ml-2">{item?.zip}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">City:</span>
                                                <span className="ml-2">{item?.city}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">State:</span>
                                                <span className="ml-2">{item?.state}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Country:</span>
                                                <span className="ml-2">{item?.country}</span>
                                            </div>

                                            <div>
                                                <span className="w-50 fw-600">Name:</span>
                                                <span className="ml-2">
                                                    {item?.firstname + " " + item?.lastname}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Email:</span>
                                                <span className="ml-2">{item?.email}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Phone:</span>
                                                <span className="ml-2">{item?.phone}</span>
                                            </div>

                                            <div className="dropdown position-absolute right-0 top-0">
                                                <button
                                                    className="btn bg-gray px-2"
                                                    type="button"
                                                    data-toggle="dropdown"
                                                >
                                                    <i className="la la-ellipsis-v" />
                                                </button>
                                                <div
                                                    className="dropdown-menu dropdown-menu-right"
                                                    aria-labelledby="dropdownMenuButton"
                                                >
                                                    <a className="dropdown-item">Edit</a>
                                                    <a className="dropdown-item" href="">
                                                        Make This Default
                                                    </a>
                                                    <a className="dropdown-item" href="">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Shipping_Address;
