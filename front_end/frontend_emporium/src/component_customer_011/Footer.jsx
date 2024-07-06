
import Eml from "../images/emailF.jpg"
import Content5 from "../images/content5.jpg"
import "../index.css"

const Footer=()=>{

  return(
    <>
    <footer> 
        <div className="container">
          <div className="sub-container" >
            <div className="sub-content1">
              <ul>
                <li><h3>Electronic Emporium</h3></li>
                <li>Subscribe</li>
                <li>Get 10% off your first order</li>
                <li className="img"><img src={Eml} alt="" /></li>
              </ul>

            </div>
            <div className="sub-content2">
              <ul>
                <li><h3>Support</h3></li>
                <li>111 Bijoy sarani,Dhaka,<br/>DH 1515,Bangladesh,</li>
                <li>elecempo@gmail.com</li>
                <li>+88801-88888-9999</li>
              </ul>

            </div>
            <div className="sub-content3">
              <ul>
                <li>
                  <h3>Account</h3>
                </li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>

            </div>
            <div className="sub-content4">
              <ul>
                <li>
                  <h3>Quick Link</h3>
                </li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
            </div>
            <div className="sub-content5"> 
              <img src={Content5} alt=""/>

            </div>
           


          </div>
          <div className="footer-end">
            © Copyright Emporium 2024 All right reserved
          </div>

        </div>
    </footer>
    
    </>
  );
}
export default Footer;