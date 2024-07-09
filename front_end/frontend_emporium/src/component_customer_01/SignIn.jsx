import "./SignUp.css";


function SignIn ()
{
  return(
    <>
      <div class="register">
        
      <div className="reg_img">
            <img className="regi_img" src="src/images/reg-img.jpg" alt="img" />
          </div>
          <div className="reg_content">
            <div className="Login_content">
              <h2>Log in to Exclusive</h2>
              <h6>Enter your Details Below</h6><br/><br/>
              <input className="input-cont" type="text" placeholder="abc@gmail.com"/><br/><br/>
              <input className="input-cont" type="text" placeholder="Password"/><br/><br/>
              
              <div className="btn-forget">
              <button className="Log-btn">Log In</button>
              <p style={{color:"rgb(232, 82, 82)", fontSize:"15px"}}>Forget Password?</p>
              </div>
              </div>
          </div>
      </div>
    
    </>
  )
};
export default  SignIn;