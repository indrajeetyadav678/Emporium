import "./CSS/AdminDashboard.css";

const Product_table=()=>{
    return(
        <>
        <div className="admin_table">
            <h1>Sample Table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Contact</th>
                            <th>shipment Address</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>30</td>
                            <td>New York</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>25</td>
                            <td>Los Angeles</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>40</td>
                            <td>Chicago</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>40</td>
                            <td>Chicago</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>40</td>
                            <td>Chicago</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>40</td>
                            <td>Chicago</td>
                            <td>New York</td>
                            <td>Image</td>
                            <td>New York</td>
                        </tr>
                    </tbody>
                </table>
                </div>
        
        </>
    )
}
export default Product_table