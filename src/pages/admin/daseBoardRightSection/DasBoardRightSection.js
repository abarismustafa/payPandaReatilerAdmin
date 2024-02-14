import { Outlet, useNavigate } from "react-router-dom"
import AsideAdmin from "../../../components/admin/asideAdmin/AsideAdmin"
import DasBoardRightSection from "../../../components/admin/dasboardRightSection/DasBoardRightSection"
import AdminHeader from "../../../common/adminHeader/AdminHeader"
import AdminRightHeader from "../../../common/adminHeader/adminRightHeader/AdminRightHeader"
import ServiceParent from "../../../components/admin/dasBoard/serviceParent/ServiceParent"
import { useEffect, useState } from "react"

function DasRightSectionPage() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/admin/mobile-reacharge')
    }, [])

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {

        console.log('jkhjkhk');
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <>
            {/* <DasBoardRightSection /> */}
            <div className="LayoutMain">
                <AdminHeader handleClick={handleClick} />
                <div className="BodyArea">
                    <AsideAdmin isActive={isActive} />
                    <div className="ContainerMain">
                        {/* <AdminRightHeader /> */}
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DasRightSectionPage