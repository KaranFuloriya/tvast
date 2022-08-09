import React from "react";

import Mobile from "../src/Assets/Mobile.png";
import overlay from "../src/Assets/overlay.png";
import icon from "../src/Assets/icon.png";


const Home = () => {
  return (
    <div className="font-face-gm">
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                 <strong className="brand-name"> Transform arduous technology into your <font color="orange" >digital</font> visionary.</strong>
              </h1>
              <h2 className="my-2">
                Aconnoisseur in consulting,training,digital transforamtion,technology,and engineering services.Large enterprise organizations and companies with unusal or highly specialized requirements find Tvast IT Solutions to be the perfect partner for their business.
              </h2>
              <div className="mt-10">
              <h2><strong className="brand-name" >Get Started</strong> <img src={icon} alt="" to="/"></img></h2>
              </div>

              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img ">
              <img style={{position:"absolute", display:"block"}} src={Mobile}  alt="home img" className="img-fluid animated" />
              <img  style={{  position: "relative",marginRight:"25%",marginTop:"13%"}} src={overlay } alt=" " className="img-fluid animated"></img>
              </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
