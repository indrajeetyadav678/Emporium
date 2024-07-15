import "./addproducts.css";

const Addproduct = () => {

    return(
        <>
      <center>
    <form class="form" action="" method="post" enctype="multipart/form-data" >
        <br/> <br/> <br/> <br/> 
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" name="name" aria-describedby="emailHelp" />
        </div> <br/> <br/>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Price</label>
          <input type="tel" class="form-control" name="price" aria-describedby="emailHelp" />
        </div> <br/> <br/>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Description</label>
          <input type="text" class="form-control" name="img" aria-describedby="emailHelp" />
        </div> <br/> <br/>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Image</label>
          <input type="file" class="form-control" name="img" aria-describedby="emailHelp" />
        </div> <br/> <br/>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </center>
      <br /> <br />
        </>
    )
}

export default Addproduct;