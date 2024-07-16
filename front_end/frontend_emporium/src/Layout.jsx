import { Link, Outlet } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
// import Footer from "./Component/Footer";
import Footer from "./component_customer_011/Footer";
import { useNavigate } from "react-router-dom";
import {useAuth0 } from "@auth0/auth0-react";


const Layout = () => {
    const { isLoading, isAuthenticated, user } = useAuth0();
    console.log(user)


    const Navigate = useNavigate();
    const Incart = () => {
        Navigate("/checkout")
    }
    return (
        <>
            <header>
                <div className="head1">
                    <div className="head1-sub">
                        <div className="head1-content">
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                        <div className="head1-content2">
                            ShopNow
                        </div>

                    </div>

                    <div className="head1-content3">
                        <select>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>Japanese</option>
                            <option>Russian</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                </div>
            </header>


            <div className="nav-container">
                <nav className="navBar">
                    <div id="manubar">
                    <label id="manubar_open"><FaBars /></label>
                    <label id="manubar_close"><FaBarsStaggered /></label>
                    </div>
                    <div className="title">
                        <span>Electronic Emporium</span>
                    </div>
                    <div className="menu-bar">
                        <ul>
                            <li> <Link to="home" style={{ textDecoration: "none" }}>Home</Link> </li>
                            <li> <Link to="contact" style={{ textDecoration: "none" }}>Contact</Link> </li>
                            <li> <Link to="about" style={{ textDecoration: "none" }}>About</Link> </li>
                            {user?
                            (<li> <Link to="sign_up" style={{ textDecoration: "none" }}>Sign-up</Link> </li>):
                            (<li> <Link to="sign_up" style={{ textDecoration: "none" }}>Logout</Link> </li>)}
                            <li> <Link to="checkout" style={{ textDecoration: "none" }}>checkout</Link> </li>

                        </ul>
                    </div>
                    <div className="icns">
                        <div className="search-bar">

                            <input type="text" placeholder="What are you looking for?" />
                            <div className="search-icon">
                               <a href="#"><IoIosSearch /></a>
                            </div>
                        </div>
                        <ul>
                            <li style={{cursor:"pointer"}}><IoHeartOutline /></li>
                            <li style={{cursor:"pointer"}} onClick={Incart}><BsCart3 /></li>
                            <li style={{cursor:"pointer"}}><FiUser /></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
            <Footer />
        </>
    );
}
export default Layout;