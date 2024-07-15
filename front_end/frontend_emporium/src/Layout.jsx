import { Link, Outlet } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";

import Footer from "./component_customer_011/Footer";
import { useNavigate } from "react-router-dom";
import {useAuth0 } from "@auth0/auth0-react";
import "./index.css";


const Layout = () => {
    const { isLoading, isAuthenticated, user } = useAuth0();
    console.log(user)


    const Navigate = useNavigate();
    const Incart = () => {
        Navigate("/cart")
    }
    return (
        <>
         <input type="checkbox" id="navid"/>
        
            <header className="header1">
                
                        <div className="head-sub1">
                    <marquee  scrollamount="10" behavior="alternate">
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! ShopNow
                        </marquee>
                        </div>
                    <div className="head-sub2">
                        <select>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>Japanese</option>
                            <option>Russian</option>
                            <option>Hindi</option>
                        </select>
                    </div>
            </header>
            <div className="nav-container">
                        <span>Electronic Emporium</span>
                        <ul >
                            <li> <Link to="home" className="head-ul">Home</Link> </li>
                            <li> <Link to="contact"className="head-ul" >Contact</Link> </li>
                            <li> <Link to="about" className="head-ul">About</Link> </li>
                            {user?
                            (<li> <Link to="sign_up"className="head-ul" >Sign-up</Link> </li>):
                            (<li> <Link to="sign_up" className="head-ul">Logout</Link> </li>)
                            }
                            <li> <Link to="checkout" className="head-ul">checkout</Link> </li>
                            <li> <Link to="addproduct" className="head-ul">addproduct</Link> </li>

                        </ul>
                        
                        <div className="search-bar">
                            <input type="text" placeholder="What are you looking for?" />
                               <IoIosSearch  className="search-icon"/>
                        </div>
                        <div className="head-icon">
                            <li className="head-ul iconh"><IoHeartOutline /></li>
                            <li className="head-ul iconh" onClick={Incart}><BsCart3 /></li>
                            <li className="head-ul iconh"><FiUser /></li>

                        </div>
                        <label for ="navid" className="label"><AiOutlineBars /></label>
            </div>
            
            <Outlet />
            <Footer />
        </>
    );
}
export default Layout;