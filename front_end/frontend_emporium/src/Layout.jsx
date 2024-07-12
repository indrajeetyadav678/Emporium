import { Link, Outlet } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";


import Footer from "./component_customer_011/Footer";
import { useNavigate } from "react-router-dom";
import {useAuth0 } from "@auth0/auth0-react";


const Layout = () => {
    const { isLoading, isAuthenticated, user } = useAuth0();
    console.log(user)


    const Navigate = useNavigate();
    const Incart = () => {
        Navigate("/cart")
    }
    return (
        <>
            <header className="header1">
                
                    <div className="head-sub1">
                       
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! ShopNow
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
                        <ul>
                            <li> <Link to="home" >Home</Link> </li>
                            <li> <Link to="contact" >Contact</Link> </li>
                            <li> <Link to="about" >About</Link> </li>
                            {user?
                            (<li> <Link to="sign_up" >Sign-up</Link> </li>):
                            (<li> <Link to="sign_up" >Logout</Link> </li>)
                            }
                            <li> <Link to="checkout" >checkout</Link> </li>
                            <li> <Link to="addproduct" >addproduct</Link> </li>

                        </ul>
                  

                    
                        <div className="search-bar">

                            <input type="text" placeholder="What are you looking for?" />
                            
                               <IoIosSearch  className="search-icon"/>
                            
                        </div>
                        <ul>
                            <li ><IoHeartOutline /></li>

                            <li  onClick={Incart}><BsCart3 /></li>

                            <li ><FiUser /></li>

                        </ul>
            </div>
              
               
           

            <Outlet />
            <Footer />
        </>
    );
}
export default Layout;