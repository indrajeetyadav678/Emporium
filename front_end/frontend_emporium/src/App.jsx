import { BrowserRouter, Routes, Route } from "react-router-dom";


import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState } from 'react'
import Contact from "./component_cutomer_02/Contact";



import Checkout from "./checkout";
// import { useState } from 'react'
import About from './component_cutomer_02/about';
import Home from "./component_cutomer_02/Home";
import Layout from "./Layout";
import SignUp from "./component_customer_01/SignUp";
import SignIn from "./component_customer_01/SignIn";

// import Checkout from "./checkout";
import Cart from "./component_cutomer_02/Cart";

import Addproduct from "./addproducts";
import Headphone_page from "./component_cutomer_02/headphone_page";
import Washing_Machine_page from "./component_cutomer_02/washing_machine_page";
import Mobile_page from "./component_cutomer_02/mobile_page";
import HomeTheater from "./component_cutomer_02/home_theater_page";
// *************** Dashboard files******************
import AdminDashboard from "./component_cutomer_02/AdminDashboard";

const App=()=>{
  // for animation
  useEffect(() => {
    AOS.init({
         duration: 500,
         once: false,
       })
  }, [])







  return(
    <>
     
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="about" element={<About/>} />
            <Route path="checkout" element={<Checkout/>} />
            <Route path="about" element={<About/>} />
            <Route path="sign_up" element={<SignUp/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="checkout" element={<Checkout/>} />          
            <Route path="addproduct" element={<Addproduct/>} />          
            <Route path="checkout" element={<Checkout/>} />
            <Route path="home_theater_page" element={<HomeTheater/>}/>
            <Route path="adminDashboard" element={<AdminDashboard/>}/>
            <Route path="mobile_page" element={<Mobile_page/>}/>
            <Route path="washing_machine_page" element={<Washing_Machine_page/>}/>
            <Route path="headphone_page" element={<Headphone_page/>}/>


           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;