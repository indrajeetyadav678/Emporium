import "./style/home.css";

const Home=()=>{
    return(
         <>
         <div className="home_container">
            {/* *********this is slider part start************* */}
            
            <div className="banner_slide">
                <div className="slider">
                </div>
            </div>
            {/* *********slider part End****************** */}

            {/* *********Exclusively start****************** */}

            <center> 
                <h1 className=".home_h1" style={{marginTop:"-50px"}}>Exclusively Curated For You</h1>
            </center> 
            <div className="Exclusively">
                
                <div className="Exclusively_div_1"></div>
                <div className="Exclusively_div_2"></div>
                <div className="Exclusively_div_3"></div>
                <div className="Exclusively_div_4"></div>
                <div className="Exclusively_div_5"></div>
                <div className="Exclusively_div_6"></div>
                <div className="Exclusively_div_7"></div>
            </div>
            {/* *********Exclusively End****************** */}

            {/* *********this is Best electronic  part****************** */}
            <center>
                <h1 className=".home_h1">Best of Electronics</h1>
            </center>
            <div id="offer-prize">
                <div id="box1">
                     <center>
                        <h6 className="Home_h6" style={{color:"white"}}> Home Theatres</h6>
                    </center> 
                </div>
                <div id="box2" >
                     <center>
                        <h6 className="Home_h6" align="bottom" style={{color:"white"}}> Laptops </h6>
                    </center>
                </div>
                <div id="box3"> 
                    <center>
                        <h6 className="Home_h6" style={{color:"white"}}> Headphones </h6>
                    </center>   
                </div>
                <div id="box4"> 
                    <center>
                        <h6 className="Home_h6" style={{color:"white"}}> Ipads </h6>
                    </center>
                </div>
                <div id="box5">
                    <center> 
                        <h6 className="Home_h6" style={{color:"white"}}> washing Machines</h6>
                    </center>  
                </div>
            </div>
            {/* ********* Best electronic  part End****************** */}
            {/* ********* this is  Leatest Product ****************** */}
            <center>
            <h1 className=".home_h1">Latest Laptops For You</h1>
            </center>
            <div className="small_banner">
                <div className="leatest_pro_1">
                   
                </div>
                <div className="leatest_pro_2">
                   
                </div>
            </div>
            {/* ********* Leatest Product End ****************** */}
            {/* ********* deals of The Day Start ****************** */}
            <center>
            <h1 className=".home_h1">Deals Of The Day</h1>
            </center>
            <div className="deals">
                <div className="deals_div_1"></div>
                <div className="deals_div_2"></div>
                <div className="deals_div_3"></div>
                <div className="deals_div_4"></div>
            </div>
            {/* ********* deals of The Day End ****************** */}
            
            {/* ********* Champion Deals start ****************** */}
            <center>
            <h1 className=".home_h1"> Champion Deals Zone</h1>
            </center>
            <div id="banner2">
            </div>
            <center>
            <h1 className=".home_h1">Select Your Display Type</h1>
            </center>
            <div className="tv_banner">
                <div className="tv_div_1"> </div>
                <div className="tv_div_2"> </div>
                <div className="tv_div_3"> </div>
                <div className="tv_div_4"> </div>

            </div>
             {/* ********* Champion Deals end ****************** */}

            {/* ********* Brand Logo Start ****************** */}
            <center>
            <h1 className=".home_h1">Brands We Are Passionate About</h1>
            </center>
            <marquee scrollamount="30"><div className="brand_logo">
                <div className="logo_1">
                </div>
                <div className="logo_2">
                </div>
                <div className="logo_3">
                </div>
                <div className="logo_4">
                </div>
                <div className="logo_5">
                </div>
                <div className="logo_6">
                </div>
                <div className="logo_7">
                </div>
                <div className="logo_8">
                </div>
                 
            </div></marquee>
            {/* ********* Brand Logo Start ****************** */}


         </div>
        </>
    )
}
export default Home;