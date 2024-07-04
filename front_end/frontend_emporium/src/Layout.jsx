import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
      <>
   |
    <Link to="Home">Home</Link>|
    {/* <Link to="Contact">Contact</Link>| */}
    <Link to="about">About</Link>|
    {/* <Link to="Signup">Sign-Up</Link>| */}
    {/* <Link to="Error">Error</Link> */}
    <hr size="4" color="red" />   

    <Outlet />

    
    </>
    );
  }
  export default Layout;
