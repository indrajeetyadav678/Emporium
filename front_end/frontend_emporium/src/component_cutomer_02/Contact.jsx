
import "./style/Contact.css";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";


const Contact=()=>
{
    return(
        <>
         <div class="contact-container">
        <div class="contact-cont1">
            <div className="sub-cont1">
            <div className="sub-sub-cont1">
                <div className="iconss">
                <div className="call-icon"><IoCallOutline /></div>
                <div className="call-cont">Call To Us</div>
                </div>
                <div className="call-cont2">We are available 24/7,7 days a week.
                    <br/>
                    <br/>
                    Phone:+8810101215
                </div>
                <div className="underline">
                
            </div>
            </div>
            <div className="sub-cont2">
            <div className="sub-sub-cont1">
                <div className="iconss">
                <div className="call-icon"><FaRegEnvelope /></div>
                <div className="call-cont">Write To Us</div>
                </div>
                <div className="call-cont2">Fill out our form and we will contact <br/>you within 24 hours
                    <br/>
                    <br/>
                    Email:customer@eemporium.com
                    <br/>
                    <br/>
                    Email:support@eemporium.com
                </div>
                </div>
                </div>
            </div>
         </div>
        
       

    </div>
         </>
          );
        }
        export default Contact;
        
       