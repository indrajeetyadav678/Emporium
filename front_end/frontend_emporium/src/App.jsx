import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { useState } from 'react'

import About from './about';
import Error from './Error';
import Home from "./Home";
import Layout from "./Layout";
// import Contact from "./Contact";
// import Signup from "./Signup";
import Checkout from "./checkout";
=======
// import { useState } from 'react'
import About from './component_cutomer_02/about';
import Home from "./component_cutomer_02/Home";
import Layout from "./Layout";
import SignUp from "./component_customer_01/SignUp";
import SignIn from "./component_customer_01/SignIn";
import Checkout from "./checkout";
import Cart from "./component_cutomer_02/Cart";
>>>>>>> 0ed5186a6c79855d24e0efa92c5e013b87d1208c


const App=()=>{
  return(
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          
            <Route path="home" element={<Home/>} />
<<<<<<< HEAD
            {/* <Route path="contact" element={<Contact/>} /> */}
            <Route path="about" element={<About/>} />
            {/* <Route path="sign_up" element={<Signup/>} /> */}
            <Route path="checkout" element={<Checkout/>} />
=======
            <Route path="about" element={<About/>} />

            <Route path="sign_up" element={<SignUp/>} />
            <Route path="signin" element={<SignIn/>} />

            <Route path="cart" element={<Cart/>} />
            <Route path="checkout" element={<Checkout/>} />

>>>>>>> 0ed5186a6c79855d24e0efa92c5e013b87d1208c
           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;