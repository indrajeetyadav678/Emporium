import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import About from './about';
import Error from './Error';
import Home from "./Home";
import Layout from "./Layout";
// import Contact from "./Contact";
// import Signup from "./Signup";
import Checkout from "./checkout";


const App=()=>{
  return(
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          
            <Route path="home" element={<Home/>} />
            {/* <Route path="contact" element={<Contact/>} /> */}
            <Route path="about" element={<About/>} />
            {/* <Route path="sign_up" element={<Signup/>} /> */}
            <Route path="checkout" element={<Checkout/>} />
           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
