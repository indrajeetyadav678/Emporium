import "./style/Cart.css";


const Cart=()=> {
    return (
      <>
      <div className="addcart_container">
      <div className="cart_frame">
        <div className="first-row">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </div>
        <div className="Second-row">
            <p>LCD Monitor</p>
            <p>$650</p>
            <button>01</button>
            <p>$650</p>
        </div>
        <div className="Third-row">
            <p>HI Gamepad</p>
            <p>$550</p>
            <button>02</button>
            <p>$110</p>
        </div>
        <div className="Forth-row">
        <button className="btn-1">Return To Shop</button>
        <button className="btn-1">Update cart</button>
        </div>
        <div className="Five-row">
          <div className="btn-div">
            <button className="btn-1">Coupon Code</button>
            <button className="btn-2">Apply Coupon</button>
          </div>
          <div className="cart-total">
              <p style={{marginTop:"8px"}}>Cart Total</p>
              <div className="row-1">
                <p>Subtotal</p>
                <p>$750</p>
              </div>
              <div className="row-1">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="row-1">
                <p>Total</p>
                <p>$1150</p>
              </div>
              <button className="btn-2" style={{marginTop:"15px", alignItems:"center", marginLeft:"50px"}}> Checkout</button>

          </div>
        </div>
      </div>
      </div>
        
        
      </>
    );
  }
  
  export default Cart;