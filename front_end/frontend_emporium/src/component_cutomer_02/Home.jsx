import "./style/home.css";
import { useNavigate } from "react-router-dom";

const Home=()=>{

    const Navigate = useNavigate();
    // ******* Best Electronic Function ********
    const home_theater_page= () => {
        Navigate("/home_theater_page")
    }
    const washing_machine_page= () => {
        Navigate("/washing_machine_page")
    }
    const headphone_page= () => {
        Navigate("/headphone_page")
    }
    const laptop_page= () => {
        Navigate("/laptop_page")
    }
    const ipad_page= () => {
        Navigate("/ipad_page")
    }

    // ******* Deals Of The Day Function ********

    const mobile_page= () => {
        Navigate("/mobile_page")
    }
    const watch_page= () => {
        Navigate("/watch_page")
    }

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
                <div className="exclu-h1"  data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                     data-aos-duration="3000">
        <h1 >Exclusively Curated For You</h1></div>
            </center> 
            <div className="Exclusively"data-aos="flip-down">
                
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
                <div className="exclu-h1"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"><h1>Best of Electronics</h1></div>
            </center>


            <div id="offer-prize">


                <div id="box1" onClick={home_theater_page}>
                     <center>
                        <h6 className="Home_h6" > Home Theatres</h6>
                    </center> 
                </div>
                <div id="box2" onClick={laptop_page}>
                     <center>
                        <h6 className="Home_h6" > Laptops </h6>
                    </center>
                </div>
                <div id="box3" onClick={headphone_page}> 
                    <center>
                        <h6 className="Home_h6" > Headphones </h6>
                    </center>   
                </div>
                <div id="box4" onClick={ipad_page}> 
                    <center>
                        <h6 className="Home_h6" > Ipads </h6>
                    </center>
                </div>
                <div id="box5" onClick={washing_machine_page}>
                    <center> 
                        <h6 className="Home_h6" > washing Machines</h6>
                    </center>  
                </div>
            </div>
            {/* ********* Best electronic  part End****************** */}
            {/* ********* this is  Leatest Product ****************** */}
            <center>
           <div className="exclu-h1"  data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom" > 
              <h1 >Latest Laptops For You</h1></div>
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
            <div className="exclu-h1"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"><h1 >Deals Of The Day</h1></div>
            </center>
            <div className="deals">
                <div className="deals_div_1" onClick={watch_page}></div>
                <div className="deals_div_2" onClick={washing_machine_page} ></div>
                <div className="deals_div_3" onClick={mobile_page}></div>
                <div className="deals_div_4"></div>
            </div>
            {/* ********* deals of The Day End ****************** */}
            
            {/* ********* Champion Deals start ****************** */}
            <center>
            <div className="exclu-h1" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"><h1> Champion Deals Zone</h1></div>
            </center>
            <div id="banner2" data-aos="flip-right"  data-aos-duration="3000">
            </div>


            <center>
            <div className="exclu-h1" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"><h1 >Select Your Display Type</h1></div>
            </center>


            <div className="tv_banner" data-aos="zoom-in-down"data-aos-duration="3000">
                <div className="tv_div_1"> </div>
                <div className="tv_div_2"> </div>
                <div className="tv_div_3"> </div>
                <div className="tv_div_4"> </div>

            </div>
             {/* ********* Champion Deals end ****************** */}

            {/* ********* Brand Logo Start ****************** */}
            <center>
            <div className="exclu-h1" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"><h1>Brands We Are Passionate About</h1></div>
            </center>
            <marquee scrollamount="20">
                <div className="brand_logo">
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
                 
            </div>
            </marquee>
            {/* ********* Brand Logo Start ****************** */}


         </div>
        </>
    )
}
export default Home;