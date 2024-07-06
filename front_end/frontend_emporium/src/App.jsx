import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import About from './component_cutomer_02/about';
import Home from "./component_cutomer_02/Home";
import Layout from "./Layout";
import SignUp from "./component_customer_01/SignUp";
// import SignUp from "./component_customer_01/SignIn";

const App=()=>{
  return(
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="sign_up" element={<SignUp/>} />
            {/* <Route path="sign_in" element={<SignIn/>} /> */}

           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;