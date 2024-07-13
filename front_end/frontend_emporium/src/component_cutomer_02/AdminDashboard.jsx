import "./style/AdminDashboard.css";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { VscTable } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

const AdminDashboard=()=>{
    return(
        <>
        <div className="admin_container">
           {/* *********************** side menu start ******************************* */}
           <div className="side-menu">
                <ul>
                    <li><a href="#home"><AiFillDashboard />Dashboard</a></li>
                    <li><a href="#services"><AiOutlineForm />Form</a></li>
                    <li><a href="#about"><VscTable />Table</a></li>
                    <li><a href="#contact"><IoSettingsOutline />Setting</a></li>
                    <li><a href="#contact"><IoMdLogOut />Logout</a></li>
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
            {/* *********************** Admin Pannel Start ******************************* */}
            <div className="admin_table">
            <h1>Sample Table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Contact</th>
                            <th>shipment Address</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Status</th>



                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>30</td>
                            <td>New York</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>25</td>
                            <td>Los Angeles</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>40</td>
                            <td>Chicago</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>40</td>
                            <td>Chicago</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>40</td>
                            <td>Chicago</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>40</td>
                            <td>Chicago</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                    </tbody>
                </table>
                </div>
        </div>
        
        </>
    )
}
export default AdminDashboard;