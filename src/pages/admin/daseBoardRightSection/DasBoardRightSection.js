import { Outlet, useNavigate } from "react-router-dom"
import AsideAdmin from "../../../components/admin/asideAdmin/AsideAdmin"
import DasBoardRightSection from "../../../components/admin/dasboardRightSection/DasBoardRightSection"
import AdminHeader from "../../../common/adminHeader/AdminHeader"
import AdminRightHeader from "../../../common/adminHeader/adminRightHeader/AdminRightHeader"
import ServiceParent from "../../../components/admin/dasBoard/serviceParent/ServiceParent"
import { useEffect, useState } from "react"
import RightSideBarSettings from "../../../components/admin/rightSidebarSetting/RightSidebarSetting"

function DasRightSectionPage() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/admin/mobile-reacharge')
    }, [])

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {

        // console.log('jkhjkhk');
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };


    return (
        <>
            {/* <DasBoardRightSection /> */}
            <div className="LayoutMain" id="abcd">
                <AdminHeader handleClick={handleClick} />
                <div className="BodyArea" id="abcd">
                    <AsideAdmin isActive={isActive} />
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