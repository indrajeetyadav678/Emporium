import "./checkout.css";

const Checkout = () => {

    return(
        <>
        <div className="checkoutlayout">

        <div className="billingside">
            
            <h1>Billings Details</h1>  <br /><br />
            <label>First Name<spam>*</spam></label>
            <input type="text"  />
            <label>Company Name<spam>*</spam></label>
            <input type="text"  />
            <label>Street Address<spam>*</spam></label>
            <input type="text"  />
            <label>Apartment,floor,etc(optional)</label>
            <input type="text"  />
            <label>Town/City<spam>*</spam></label>
            <input type="text"  />
            <label>Phone Number<spam>*</spam></label>
            <input type="tel"  />
            <label>Email Addresss<spam>*</spam></label>
            <input type="tel"  />
            <p className="para"><input type="checkbox" /> Save this information for faster check-out next time</p>
        </div>

        <div className="totalside">
        <div className="item">
            <img src="" alt="not found" />
            <div className="item-name">LCD Monitor</div>
            <div className="item-price">$650</div>
        </div>
        <div className="item">
            <img src="" alt="not found" />
            <div className="item-name">H1 Gamepad</div>
            <div className="item-price">$1100</div>
        </div>
        <div className="subtotal">
            <span>Subtotal:</span>
            <span>$1750</span>
        </div>
        <hr />
        <div className="subtotal">
            <span>Shipping:</span>
            <span>Free</span>
        </div>
        <hr />
        <div className="total">
            <span>Total:</span>
            <span>$1750</span>
        </div>
        
        <div className="Bank">
        <span><input type="checkbox"/></span>
        <span style={{marginLeft:"35px"}} className="bnktxt"><h4>Bank</h4></span>
        </div>

        <div className="cod">
        <span><input type="checkbox"/></span>
        <span style={{marginLeft:"35px"}} className="bnktxt"><h4>cash on delivery</h4></span>
        </div>

        <div class="coupon">
            <input type="text" placeholder="Coupon Code"/>
            <button>Apply Coupon</button>
        </div>
        <button class="order">Place Order</button>
        </div>
        </div>
        </>
    )
}

export default Checkout;