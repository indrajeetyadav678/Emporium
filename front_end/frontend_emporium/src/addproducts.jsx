import { useState } from "react";
import axios from "axios"

import "./addproducts.css";


const Addproduct = () => {
     const [product, SetProducts] = useState({})
     


    return(
        <>
      <center>
    <form class="form" action="" method="post" enctype="multipart/form-data" >
        <br/> <br/> <br/> <br/> 
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" name="product_name" value={product.product_name} onChange={inputhandle} aria-describedby="emailHelp" />
        </div> <br/> <br/>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Price</label>
          <input type="tel" class="form-control" name="price" value={product.price} onChange={inputhandle} aria-describedby="emailHelp" />
        </div> <br/> <br/>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Description</label>
          <input type="text" class="form-control" name="img" value={product.name} onChange={inputhandle} aria-describedby="emailHelp" />
        </div> <br/> <br/>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Image</label>
          <input type="file" class="form-control" name="img" value={product.name} onChange={inputhandle} aria-describedby="emailHelp" />
        </div> <br/> <br/>
        <button type="submit" class="btn btn-primary" onClick={submithandle}>Submit</button>
      </form>
      </center>
      <br /> <br />
        </>
    )
}

export default Addproduct;