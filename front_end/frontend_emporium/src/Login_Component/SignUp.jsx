import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';

function SignUp() {
  const [input, setInput] = useState({})
  const { loginWithRedirect, user} = useAuth0();
    console.log("user_name",user.name)
    let user_log = {
        "name":"indrajeet",
    }
  const inputhandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(item => ({ ...item, [name]: value }));
};

const submithandle = () => {
  let url = "http://127.0.0.1:8000/login/";
  axios.post(url, input).then(res => {
      alert("Registration successful");
  });
};
  return (
    <>
      <div className="register">
        <div className="reg_img">
          <img className="regi_img" src="src/images/regimg.jpg" alt="img" />
        </div>
        <div className="reg_content">
          <div className="content">
            <h2>Create an account</h2>
            <h6>Enter your Details Below</h6><br /><br />
            <input className="input-cont" value={input.name} name="name" type="text" placeholder="Name" onChange={inputhandle} /><br /><br />
            <input className="input-cont" type="email" value={input.email} name="email"  placeholder="abc@gmail.com" onChange={inputhandle}/><br /><br />
            <input className="input-cont" type="tel" value={input.contact} name="contact" placeholder="Contact" onChange={inputhandle} /><br /><br />
            <input className="input-cont" type="text" value={input.password} name="password" placeholder="Password" onChange={inputhandle} /><br /><br />
            <button className="btn" onClick={submithandle}>Submit</button><br /><br />
            <div className="Ggl-btn">
              <div className="ggl-icn" onClick={()=>loginWithRedirect()}><FcGoogle /></div>
              <div>
              </div>
            </div>
            <p>Already have account? <Link to="/signin">Log in</Link></p>
          </div>
        </div>

      </div>

    </>
  );
}
export default SignUp;