
import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import Select from 'react-select';
// import Skeleton from "react-loading-skeleton";


const Table1 = () => {
  const [data1, setData1] = useState([])
  const [searchinput, setSearchInput] = useState("")
  console.log("searchinput------>", searchinput)

  // const Load = async () => {
  //     try {
  //         const url = `${DjangoConfig.apiUrl}/rtqm/qms_tab_login/`
  //         await axios.get(url).then(res => {
  //             setData1(res.data)
  //         })
  //     } catch (error) {
  //         console.log("data fetching error", error)
  //     }
  // }

  // useEffect(() => {
  //     Load()
  // }, [])

  

  const inputhandle = (e) => {
    console.log(e);
    let value = e.target.value;
    console.log(value);
    setSearchInput(value);
  };

  return (
    <>
      <div >
        <div ><input type="search"   name="search" placeholder="search data" id="" /></div>
        <div >
          <div >DataTable</div>
          <Link to="/"><button>Update New</button></Link>
        </div>
        <div >
          <table >
            <thead>
              <tr>
                <th >S.No</th>
                <td >Excel_File</td>
                <td>Style No</td>
                <td >company</td>
                <td >Color</td>
                <td >OB Date</td>
                <td >Kaz-Button</td>
                <th >Others</th>
              </tr>
              <tr>
                <th></th>
                <td ><input type="text"  placeholder="Search" onChange={(e) => { setSearchInput(e.target.value) }} /></td>
                <td>
                  <select  onChange={(e) => { setSearchInput(e.target.value) }}>
                    <option disabled selected>Tiny</option>
                    <option value="Apple">Tiny Apple</option>
                    <option value="Orange">Tiny Orange</option>
                    <option value="Tomato">Tiny Tomato</option>
                  </select>
                </td>
                <td >
                  <select  onChange={(e) => { setSearchInput(e.target.value) }}>
                    <option disabled selected >Tiny</option>
                    <option value="Apple">Tiny Apple</option>
                    <option value="Orange">Tiny Orange</option>
                    <option value="Tomato">Tiny Tomato</option>
                  </select>
                </td>
                <td >
                  <select  onChange={(e) => { setSearchInput(e.target.value) }}>
                    <option disabled selected>Tiny</option>
                    <option value="Apple">Tiny Apple</option>
                    <option value="Orange">Tiny Orange</option>
                    <option value="Tomato">Tiny Tomato</option>
                  </select>
                </td>
                <td ><input type="date" name="obdate" onChange={(e) => { setSearchInput(e.target.value) }} /></td>
                <td ><input type="text"  placeholder="Search" onChange={(e) => { setSearchInput(e.target.value) }} /></td>
                <th ><input type="text"  placeholder="Search" onChange={(e) => { setSearchInput(e.target.value) }} /></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th >1</th>
                <td >excel-1</td>
                <td >mks23456789</td>
                <td >intellySync</td>
                <td >Blue-wgyf</td>
                <td >12/16/2020</td>
                <td >t87898989</td>
                <th >NULL</th>
              </tr>
            </tbody>
            <tfoot>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
export default Table1;