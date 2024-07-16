import { useState } from "react";
import axios from "axios"

import "./addproducts.css";


const Addproduct = () => {
  const [product, setProducts] = useState({})
  const [files, setFiles] = useState([])

  const inputhandle = (e) => {
    let name = e.target.name
    let value = e.target.value
    setProducts((items) => ({ ...items, [name]: value }))
  }

  const filehandle =(e)=>{
    setFiles(e.target.files)
  }

  console.log(product)
  const submithandle = () => {
  const formData = new formData()    
  formData.append("product_name",product.product_name)
  formData.append("product_type",product.product_type)
  formData.append("product_price",product.product_price)
  formData.append("product_status",product.product_status)
  formData.append("product_colour",product.product_colour)
  formData.append("product_brand",product.product_brand)
  formData.append("product_description",product.product_description)
  for(let i=0; i>files.length; ++i){
    formData.append(`product_name${i}`,product.product_name)
  }
  formData.append("product_name",product.product_name)
  formData.append("product_name",product.product_name)

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
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" name="product_name" value={product.product_name} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Product Type</label>
            <input type="text" className="form-control" name="product_type" value={product.product_type} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Price</label>
            <input type="number" className="form-control" name="product_price" value={product.product_price} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">product_status</label>
            <input type="text" className="form-control" name="product_status" value={product.product_status} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">product_colour</label>
            <input type="text" className="form-control" name="product_colour" value={product.product_colour} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">product_brand</label>
            <input type="text" className="form-control" name="product_brand" value={product.product_brand} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Description</label>
            <input type="text" className="form-control" name="product_description" value={product.product_description} onChange={inputhandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Image1</label>
            <input type="file" className="form-control" name="product_image1" value={files.product_image1} onChange={filehandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Image2</label>
            <input type="file" className="form-control" name="product_image2" value={files.product_image2} onChange={filehandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Image3</label>
            <input type="file" className="form-control" name="product_image3" value={files.product_image3} onChange={filehandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Image4</label>
            <input type="file" className="form-control" name="product_image4" value={files.product_image4} onChange={filehandle} aria-describedby="emailHelp" />
          </div> <br /> <br />
          <button  className="btn btn-primary" onClick={submithandle}>Submit</button>
      </center>
      <br /> <br />
    </>
  )
}

export default Addproduct;