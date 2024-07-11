
import "../index.css";
import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Header=()=>

    {
        const Navigate = useNavigate();
<<<<<<< HEAD
        const Incart = () => {
            Navigate("/component_customer_02/Cart")
=======
        const Incart = ()=> {
            Navigate("/cart")
>>>>>>> b81a5bede24e165fb2601bec963b678c90c0bf6c
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
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign-up</li>
                        
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
                                <li><button onClick={()=>{Incart()}}><BsCart3/></button></li>
                                <li><FiUser /></li>
                            </ul>
                        </div>
                                             
                    </nav>
                    </div>
            
            </>
        );
    }

export default Header;