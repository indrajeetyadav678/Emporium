import { FaStore } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiCustomerServiceFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
const About=()=>{
    return(
        <>
       <div className="main">
        <div className="abtheading">
           <h1> Our Story </h1>
        
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        
               <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
       
         <div className="abtimg">
            <img src="images/abt.jpg" alt="notfound" />
         </div>
       </div>
       <br/>
       <br/>
       <br/>

<div  className="card">
       <div className="midmain" >
         <div className="iconouter" >
            <div className="iconinner">
            <FaStore />

            </div>
            
         </div>
         <h2 >10.5k</h2>
         <h5>Sellers active in our site</h5>

         
       </div>
       {/* ................. */}
       <div className="midmain" >
         <div className="iconouter" >
            <div className="iconinner">
            <BiSolidDollarCircle />

            </div>
            
         </div>
         <h2 >10.5k</h2>
         <h5>Monthly Products Sale</h5>

         
       </div>
       <div className="midmain" >
         <div className="iconouter" >
            <div className="iconinner">
            <HiMiniShoppingBag />

            </div>
            
         </div>
         <h2 >10.5k</h2>
         <h5>Customer active in our site</h5>

         
       </div>
       <div className="midmain" >
         <div className="iconouter" >
            <div className="iconinner">
            <GiTakeMyMoney />

            </div>
            
         </div>
         <h2 >10.5k</h2>
         <h5>Annual gross sale in our site</h5>

         
       </div>
       </div>
       {/* .............................. */}
       <div className="picmain">
         <div className="cardcont">
            <img src="images/p1.jpg" alt=""/>
            <h2>Tom Cruise</h2>
            <h5>Founder & Chairman</h5>
            <center><div className="innericon"style={{display:"flex"}}>
               <div><CiTwitter /></div>
               <div  style={{marginLeft:"10px"}}><CiInstagram /></div>
               <div  style={{marginLeft:"10px"}}><FaLinkedinIn /></div>
            </div></center>
         </div>

         <div className="cardcont a" >
            <img src="images/p2.jpg" alt="" />
            <h2>Emma Watson</h2>
            <h5>Managing Director</h5>
            <div className="innericon"style={{display:"flex"}}>
               <div><CiTwitter /></div>
               <div  style={{marginLeft:"10px"}}><CiInstagram /></div>
               <div  style={{marginLeft:"10px"}}><FaLinkedinIn /></div>
            </div>
         </div>

         <div className="cardcont a" >
            <img src="images/p3.jpg" alt="" />
            <h2>Will Smith</h2>
            <h5>Product Designer</h5>
            <div className="innericon"style={{display:"flex"}}>
               <div><CiTwitter /></div>
               <div  style={{marginLeft:"10px"}}><CiInstagram /></div>
               <div  style={{marginLeft:"10px"}}><FaLinkedinIn /></div>
            </div>
         </div>
       </div>
       {/* ......................................... */}
       <div className="lastmain" >
         <div className="lastone">


               <div className="lastouter">
               <div className="lastinner" > <TbTruckDelivery /> </div>
            </div>


            <h5>FREE AND FAST DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
         </div>

         <div className="lastone">



            <div className="lastouter">
               <div className="lastinner"><RiCustomerServiceFill /> </div>
            </div>

            <h5>24/7 CUSTOMER SERVICE</h5>
            <p>Friendly 24/7 customer support</p>
         </div>

         <div className="lastone">

         <div className="lastouter">
               <div className="lastinner"><VscWorkspaceTrusted  /></div>
            </div>
            <h5>MONEY BACK GUARANTEE</h5>
            <p>We return money within 30 days</p>
         </div>

       </div>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
     
       </>
    )
}


export default About;