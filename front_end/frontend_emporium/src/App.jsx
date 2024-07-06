import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import About from './component_cutomer_02/about';
import Home from "./component_cutomer_02/Home";
import Layout from "./Layout";
import Checkout from "./checkout";

const App=()=>{
  return(
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="checkout" element={<Checkout/>} />
           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;