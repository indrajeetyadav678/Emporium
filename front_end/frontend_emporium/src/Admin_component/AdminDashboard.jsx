import "./CSS/AdminDashboard.css";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { VscTable } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const AdminDashboard=()=>{
    const Navigate = useNavigate();
    const addproduct= () => {
        Navigate("/addproduct")
    }
    const product_table= () => {
        Navigate("/product_table")
    }
    return(
        <>
        <div className="admin_container">
           {/* *********************** side menu start ******************************* */}
           <div className="side-menu">
                <ul>
                    <li><a href="dashboard"><AiFillDashboard />Dashboard</a></li>
                    <li><a href="#form" onClick={addproduct}><AiOutlineForm />Form</a></li>
                    <li><a href="#table" onClick={product_table}><VscTable />Table</a></li>
                    <li><a href="#setting"><IoSettingsOutline />Setting</a></li>
                    <li><a href="#logout"><IoMdLogOut />Logout</a></li>
                </ul>
            </div>
            {/* *********************** side menu End ******************************* */}
            {/* *********************** Admin Pannel Start ******************************* */}

            <div className="admin_pannel">
                <div className="order_pannel">
                    <div className="order_content">
                    <p className="order_cont">1. <br/>
                        registered Customer</p>
                    </div>
                    <div className="order_logo">< FaUsers className="logo"/></div>

                </div>
                <div className="order_pannel" style={{backgroundColor:"green"}}>
                <div className="order_content">
                    <p className="order_cont">2. <br/>
                        Total Product</p>
                    </div>
                    <div className="order_logo"><MdOutlineProductionQuantityLimits  className="logo"/></div>

                </div>
                <div className="order_pannel" style={{backgroundColor:"grey"}}>
                <div className="order_content">
                    <p className="order_cont">3. <br/>
                        Total Orders</p>
                    </div>
                    <div className="order_logo"><VscGraph className="logo"/></div>

                </div>
            </div>
            {/* *********************** Admin Pannel End ******************************* */}      
        </div>
        </>
    )
}
export default AdminDashboard;