import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "./component_cutomer_02/Contact";
import AccountEdit from "./component_cutomer_02/AccountEdit";
import Checkout from "./checkout";
// import { useState } from 'react'
import About from './component_cutomer_02/about';
import Home from "./component_cutomer_02/Home";
import Layout from "./Layout";
import SignUp from "./Login_Component/SignUp";
import SignIn from "./Login_Component/SignIn";
// import Checkout from "./checkout";
import Cart from "./component_cutomer_02/Cart";
import Addproduct from "./Admin_component/addproducts";
import Product_table from "./Admin_component/product_table";
// ********************This is Products Pages Start *************************
import Ipad_page from "./component_cutomer_02/ipad_page";
import Headphone_page from "./component_cutomer_02/headphone_page";
import Tv_page from "./component_cutomer_02/tv_page";
import Laptop_page from "./component_cutomer_02/laptop_page";
import Washing_Machine_page from "./component_cutomer_02/washing_machine_page";
import Mobile_page from "./component_cutomer_02/mobile_page";
import HomeTheater from "./component_cutomer_02/home_theater_page";
import Watch_page from "./component_cutomer_02/watch_page";
import Camera_page from "./component_cutomer_02/Camera_page";
// ********************This is Products Pages End *************************

// *************** Dashboard files******************
import AdminDashboard from "./Admin_component/AdminDashboard";

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
            <Route path="checkout" element={<Checkout/>} />
            
            {/* ***************** Admin files Start ************************* */}
            <Route path="adminDashboard" element={<AdminDashboard/>}/>
            <Route path="addproduct" element={<Addproduct/>} />          
            <Route path="product_table" element={<Product_table/>} />          
            {/* ***************** Admin files End ************************* */}

            {/* ***************** Product Pahes Start ************************* */}
            <Route path="mobile_page" element={<Mobile_page/>}/>
            <Route path="laptop_page" element={<Laptop_page/>}/>
            <Route path="ipad_page" element={<Ipad_page/>}/>
            <Route path="watch_page" element={<Watch_page/>}/>
            <Route path="camera_page" element={<Camera_page/>}/>
            <Route path="tv_page" element={<Tv_page/>}/>
            <Route path="washing_machine_page" element={<Washing_Machine_page/>}/>
            <Route path="headphone_page" element={<Headphone_page/>}/>
            <Route path="home_theater_page" element={<HomeTheater/>}/>
            {/* ***************** Product Pahes End ************************* */}

            <Route path="accountedit_page" element={<AccountEdit/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;