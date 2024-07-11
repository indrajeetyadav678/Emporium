import { Link, Outlet } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

<<<<<<< HEAD

=======
// import Footer from "./Component/Footer";
>>>>>>> b81a5bede24e165fb2601bec963b678c90c0bf6c

import Footer from "./component_customer_011/Footer";
import { useNavigate } from "react-router-dom";


const Layout=()=>{
    const Navigate = useNavigate();
        const Incart = () => {
            Navigate("/cart")
        }
    return(
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
                        <div className="title">
                     <h3>Electronic Emporium</h3> 
                     </div>
                     <div className="menu-bar">
                     <ul>
                        <li> <Link to="home" style={{textDecoration:"none"}}>Home</Link> </li>
                        <li> <Link to="contact" style={{textDecoration:"none"}}>Contact</Link> </li>
                        <li> <Link to="about" style={{textDecoration:"none"}}>About</Link> </li>
                        <li> <Link to="sign_up" style={{textDecoration:"none"}}>Sign-up</Link> </li>
                        <li> <Link to="checkout" style={{textDecoration:"none"}}>checkout</Link> </li>
                        
                        </ul>  
                        </div>
                        <div className="search-bar">
                            
                            <input type="text" placeholder="What are you looking for?"/>
                            <div className="search-icon">
                            <IoIosSearch />
                            </div>
                        </div>
                        <div className="icns">
                            <ul>
                                <li><IoHeartOutline /></li>

                                <li><BsCart3 /></li>

                                <li><FiUser /></li>

                            </ul>
                        </div>     
                    </nav>
                    </div>

    <Outlet />


    <Footer/>
    </>
    );
  }
  export default Layout;