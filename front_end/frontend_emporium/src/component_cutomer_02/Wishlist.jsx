import { FaShoppingCart } from "react-icons/fa";

import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";


const Wishlist = () => {

    return(
        <>
        
       
       <div class="wishlist-section">
      <div className="wish-top"> <h2>My Wishlist</h2>
      <button className="move-all">Move all to cart </button></div>
      <br/>


        <div className="wishlist-items">
            <div className="item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           >
            <img src="/public/images/products/f1.jpg" alt="" />
                <div className="discount">-35%
              
                </div>
                <button className="add-to-cart">Add To Cart</button>
                <p className="price">$960 <span class="old-price">$1160</span></p>
                <div class="rating">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
                  (65)</div>
            </div>


            <div className="item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           >
            <img src="/public/images/products/f2.jpg" alt="" />
               <div className="discount">-35%</div>
               <button className="add-to-cart">Add To Cart</button>
               <p className="price">$960 <span class="old-price">$1160</span></p>
               <div class="rating">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
                  (75)</div>
           </div>


           <div className="item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           >


           <img src="/public/images/products/f3.jpg" alt="" />
               <div className="discount">-35%</div>
               <button className="add-to-cart">Add To Cart</button>
               <p className="price">$960 <span class="old-price">$1160</span></p>
               <div class="rating">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
                  (85)</div>
           </div>


           <div className="item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           >


           <img src="/public/images/products/f4.jpg" alt="" />
               <div className="discount">-35%</div>
               <button className="add-to-cart">Add To Cart</button>
               <p className="price">$960 <span class="old-price">$1160</span></p>
               <div class="rating">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
                  (95)</div>
           </div>
        </div>
    </div>
    {/* ..................just for you.................... */}
    <div class="wishlist-section">
      <div className="wish-top"> <h2>Just for you</h2>
      <button className="move-all">See All </button>
      </div>
      <br/>
    <div className="wishlist-items"data-aos="flip-up"data-aos-duration="3000">
            <div className="item">
            <img src="/public/images/products/f1.jpg" alt="" />
                <div className="discount">New</div>
                <button className="add-to-cart">Add To Cart</button>
                <p className="price">$960 <span class="old-price">$1160</span></p>
                <div class="rating">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
                  (65)</div>
            </div>
            <div className="item">
            <img src="/public/images/products/f2.jpg" alt="" />
               <div className="discount">New</div>
               <button className="add-to-cart">Add To Cart</button>
               <p className="price">$960 <span class="old-price">$1160</span></p>
               <div class="rating">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
                  (75)</div>
           </div>
           <div className="item">
           <img src="/public/images/products/f3.jpg" alt="" />
               <div className="discount">New</div>
               <button className="add-to-cart">Add To Cart</button>
               <p className="price">$960 <span class="old-price">$1160</span></p>
               <div class="rating">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
                  (85)</div>
           </div>
           <div className="item">
           <img src="/public/images/products/f4.jpg" alt="" />
               <div className="discount">New</div>
               <button className="add-to-cart">Add To Cart</button>
               <p className="price">$960 <span class="old-price">$1160</span></p>
               <div class="rating">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
                  (95)</div>
           </div>
        </div>
        </div>
  
         
         
        </>
    )
}
export default Wishlist;