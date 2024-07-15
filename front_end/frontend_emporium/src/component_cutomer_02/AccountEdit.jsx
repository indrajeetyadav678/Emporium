
import "./style/AccountEdit.css";

const AccountEdit=()=>
{
    return(
    <>

    <div className="acc-top">
        <div className="acc-top1">Home / Account</div>
        <div className="acc-top2">Welcome!  <span> Remil</span></div>
     </div>

    <div  className="acc-body">
        <div className="mng-acc">
        <div className="mng-acc-head">Manage My Account</div>
        <div className="mng-acc-body">
            <span>My Profile</span>
            <br/>
            <br/>
            Address Book
            <br/>
            <br/>
            My Payment Options
        </div>
        <br/>
        <br/>

        
        <div className="mng-acc-head">My orders</div>
        <div className="mng-acc-body">
           My Returns
            <br/>
            <br/>
            My Collections
        </div>

        <div className="mng-acc-head">My Wishlist</div>




        </div>
        <div className="edit-acc">
            <div className="edit-acc-head">
                Edit Your Profile
            </div>
            <div className="edit-acc-body">
                <div className="edit-acc-body1">First Name</div>
                <div className="edit-acc-body2">Last Name</div>
            </div>

        </div>

    </div>
    
    
    
    </>
    );
}
export default AccountEdit;