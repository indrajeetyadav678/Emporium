

import { BrowserRouter, Routes, Route } from "react-router-dom";


import About from './about'
import Error from './Error'
import Home from "./Home";
import Layout from "./Layout";



const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
           
            <Route path="Home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="Error" element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
