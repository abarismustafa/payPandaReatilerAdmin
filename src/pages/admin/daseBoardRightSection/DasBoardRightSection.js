import { Outlet, useNavigate } from "react-router-dom"
import AsideAdmin from "../../../components/admin/asideAdmin/AsideAdmin"
import DasBoardRightSection from "../../../components/admin/dasboardRightSection/DasBoardRightSection"
import AdminHeader from "../../../common/adminHeader/AdminHeader"
import AdminRightHeader from "../../../common/adminHeader/adminRightHeader/AdminRightHeader"
import ServiceParent from "../../../components/admin/dasBoard/serviceParent/ServiceParent"
import { useEffect, useRef, useState } from "react"
import RightSideBarSettings from "../../../components/admin/rightSidebarSetting/RightSidebarSetting"

function DasRightSectionPage() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/admin/mobile-reacharge')
    }, [])

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // console.log('dff');
        setIsActive(current => !current);
        var element = document.getElementById("myDIV");
        element.classList.add("overlay");
    };

    const overlayClick = () => {
        setIsActive(current => !current);

        var element = document.getElementById("myDIV");
        element.classList.remove("overlay");
    }

    const ref = useRef(null);
    useEffect(() => {
        // console.log('width', ref.current ? ref.current.offsetWidth : 0);
        if (ref.current.offsetWidth <= 426) {
            setIsActive(current => !current);
        }
        var element = document.getElementById("myDIV");
        element.classList.remove("overlay");
    }, [ref?.current]);

    return (
        <>
            {/* <DasBoardRightSection /> */}
            <div className="LayoutMain" ref={ref} id="abcd dadas" >
                <AdminHeader handleClick={handleClick} />
                <div className="BodyArea" id="abcd">
                    <AsideAdmin isActive={isActive} overlayClick={overlayClick} />
                    <div className="ContainerMain">
                        {/* <AdminRightHeader /> */}
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>

            <div className="sidebar-right">
                {["end"].map((placement, idx) => (
                    <RightSideBarSettings key={idx} placement={placement} name={placement} />
                ))}
            </div>
        </>
    )
}
export default DasRightSectionPage