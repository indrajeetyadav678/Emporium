import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";



function SignUp ()
{
  return(
    <>
      <div class="register">
          <div class="reg-img">

          </div>
          <div class="reg-content">
              <h2>Create an account</h2>
              <h6>Enter your Details Below</h6><br/><br/>
              <input  className="input-cont" type="text" placeholder="Name"/><br/><br/>
              <input className="input-cont" type="text" placeholder="abc@gmail.com"/><br/><br/>
              <input className="input-cont" type="text" placeholder="Contact"/><br/><br/>
              <input className="input-cont" type="text" placeholder="Password"/><br/><br/>
             <button className="btn">Submit</button><br/><br/>
             <div className="Ggl-btn">
              <div className="ggl-icn"><FcGoogle /></div>
              <div>
              <input className="Ggl-input" placeholder="Sign in with google"/></div>
              </div>
              <p>Already have account? <Link to="/signin">Log in</Link></p>
          </div>
      </div>
    
    </>
  )
};
export default  SignUp;