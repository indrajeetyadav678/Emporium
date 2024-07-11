import "./style/home.css";



const Home=()=>{
    return(

         <>
         <div className="home_container">
            {/* *********this is slider part****************** */}
            
            <div className="banner_slide">
                <div className="slider">
                </div>
            </div>
            {/* *********slider part End****************** */}

            {/* *********this is Best electronic  part****************** */}

            <h1 style={{color:"black"}}>Best of Electronics</h1>
            <div id="offer-prize">
                <div id="box1">
                     <center>
                        <h6 style={{color:"white"}}> Home Theatres</h6>
                    </center> 
                </div>
                <div id="box2" >
                     <center>
                        <h6 align="bottom" style={{color:"white"}}> Laptops </h6>
                    </center>
                </div>
                <div id="box3"> 
                    <center>
                        <h6 style={{color:"white"}}> Headphones </h6>
                    </center>   
                </div>
                <div id="box4"> 
                    <center>
                        <h6 style={{color:"white"}}> Ipads </h6>
                    </center>
                </div>
                <div id="box5">
                    <center> 
                        <h6 style={{color:"white"}}> washing Machines</h6>
                    </center>  
                </div>
            </div>
            {/* ********* Best electronic  part End****************** */}
            {/* ********* this is  Leatest Product ****************** */}
            <h1 style={{color:"black"}}>Latest Laptops For You</h1>
            <div className="small_banner">
                <div className="leatest_pro_1">
                   
                </div>
                <div className="leatest_pro_2">
                   
                </div>
            </div>
            {/* ********* Leatest Product End ****************** */}
            {/* ********* deals of The Day ****************** */}
            <h1 style={{color:"black"}}>Deals Of The Day</h1>
            <div className="deals">
                <div className="deals_div_1"></div>
                <div className="deals_div_2"></div>
                <div className="deals_div_3"></div>
                <div className="deals_div_4"></div>
            </div>

         </div>
        </>
    )
        
        
        
    
}
export default Home;