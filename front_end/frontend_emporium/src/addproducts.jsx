import { useState } from "react";
import axios from "axios"

import "./addproducts.css";


const Addproduct = () => {
  const [product, setProducts] = useState({})
  let files=[]

  const inputhandle = (e) => {
    let name = e.target.name
    let value = e.target.value
    setProducts((items) => ({ ...items, [name]: value }))
  }

  const filehandle =(e)=>{
    files.append(e.target.files) // Ensure files are stored as an array
  }

  console.log(product)
  const submithandle = () => {
  // event.preventDefault();
  let formData = new FormData()    
  formData.append("product_name",product.product_name)
  formData.append("product_type",product.product_type)
  formData.append("product_price",product.product_price)
  formData.append("product_status",product.product_status)
  formData.append("product_colour",product.product_colour)
  formData.append("product_brand",product.product_brand)
  formData.append("product_description",product.product_description)
  for(let i=0; i>files.length; ++i){
    formData.append(`product_name${i}`,files[i])
  }
    axios.post('http://127.0.0.1:8000/product/', formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then((res) => {
      wimdow.alert("Data Successfully Save")
    })
  }
  return (
    <>
      <center>
          <br /> <br /> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" >Name</label>
            <input type="text" name="product_name" value={product.product_name} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">Product Type</label>
            <input type="text" name="product_type" value={product.product_type} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">Price</label>
            <input type="number" name="product_price" value={product.product_price} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">product_status</label>
            <input type="text" name="product_status" value={product.product_status} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">product_colour</label>
            <input type="text" name="product_colour" value={product.product_colour} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">product_brand</label>
            <input type="text" name="product_brand" value={product.product_brand} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">Description</label>
            <input type="text" name="product_description" value={product.product_description} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">Image1</label>
            <input type="file" name="product_image1" onChange={filehandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" >Image2</label>
            <input type="file"  name="product_image2"  onChange={filehandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" >Image3</label>
            <input type="file"  name="product_image3" onChange={filehandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" >Image4</label>
            <input type="file"  name="product_image4" onChange={filehandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <input type="file" name="" id="" />
          <button onClick={submithandle}>Submit</button>
      </center>
      <br /> <br />
    </>
  )
}

export default Addproduct;