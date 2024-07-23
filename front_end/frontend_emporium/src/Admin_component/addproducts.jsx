import { useState } from "react";
import axios from "axios";
import "./CSS/addproducts.css";

const Addproduct = () => {
  const [product, setProduct] = useState({});
  const [files, setFiles] = useState([]);

  const inputhandle = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const filehandle = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  console.log(product);

  const submithandle = () => {
    let formData = new FormData();
    formData.append("product_name", product.product_name);
    formData.append("product_type", product.product_type);
    formData.append("product_price", product.product_price);
    formData.append("product_status", product.product_status);
    formData.append("product_colour", product.product_colour);
    formData.append("product_brand", product.product_brand);
    formData.append("product_description", product.product_description);

    for (let i = 0; i < files.length; i++) {
      formData.append(`product_image${i + 1}`, files[i]);
    }

    axios
      .post("http://127.0.0.1:8000/product/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        window.alert("Data Successfully Saved");
      })
      .catch((err) => {
        console.error(err);
        window.alert("Error saving data");
      });
  };

  return (<>
      <center><h2>Add Product</h2></center>
    <div className="add_container">

      <div className="add_container1">

      <div className="form-group">
        <label htmlFor="product_name" className="add_level">Name</label>
        <input className="add_input"
          type="text"
          name="product_name"
          value={product.product_name || ""}
          onChange={inputhandle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_type">Product Type</label>
        <input className="add_input"
          type="text"
          name="product_type"
          value={product.product_type || ""}
          onChange={inputhandle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_price">Price</label>
        <input className="add_input"
          type="number"
          name="product_price"
          value={product.product_price || ""}
          onChange={inputhandle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_status">Status</label>
        <input className="add_input"
          type="text"
          name="product_status"
          value={product.product_status || ""}
          onChange={inputhandle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_colour">Colour</label>
        <input className="add_input"
          type="text"
          name="product_colour"
          value={product.product_colour || ""}
          onChange={inputhandle}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="product_brand">Brand</label>
        <input className="add_input"
          type="text"
          name="product_brand"
          value={product.product_brand || ""}
          onChange={inputhandle}
        />
      </div>
      </div>
      <div className="add_container2">
      <div className="form-group">
        <label htmlFor="product_description">Description</label>
        <input className="add_input"
          type="text"
          name="product_description"
          value={product.product_description || ""}
          onChange={inputhandle}
        />
      </div>
      

      

      <div className="form-group">
        <label htmlFor="product_image1">Image 1</label>
        <input type="file" name="product_image1" onChange={filehandle} className="add_input"/>
      </div>
      <div className="form-group">
        <label htmlFor="product_image2">Image 2</label>
        <input type="file" name="product_image2" onChange={filehandle} className="add_input"/>
      </div>
      <div className="form-group">
        <label htmlFor="product_image3">Image 3</label>
        <input type="file" name="product_image3" onChange={filehandle} className="add_input"/>
      </div>
      <div className="form-group">
        <label htmlFor="product_image4">Image 4</label>
        <input type="file" name="product_image4" onChange={filehandle} className="add_input"/>
      </div>
      <button onClick={submithandle} className="add_button">Submit</button>
    </div>
    </div>
    </>
  );
};

export default Addproduct;
