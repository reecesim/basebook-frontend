import React, { useState } from "react";
import SplashBrand from "../assets/img/splash/brand.png";
import ComingSoon from "../assets/img/splash/comingsoon.png";
import CursedGif from "../assets/img/splash/cursedgif.gif";
import GoBtn from "../assets/img/splash/Gobtn.png";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  const hideSplashScreen = () => {
    setIsVisible(false);
  };

  return (
    <div className={`splash-screen ${isVisible ? "visible" : "hidden"}`}>
      <div className="splash-content">
        <div className="wrapperbig">
          <div className="splash-nav">
            <img
              className="splash-brand"
              width="auto"
              height="auto"
              alt="Basebook logo"
              src={SplashBrand}
            ></img>
            <img
              className="splash-login"
              width="auto"
              height="auto"
              alt="Coming soon"
              src={ComingSoon}
            ></img>
          </div>
        </div>
        <div className="wrappermed">
          <div className="row">
            <div className="col50">
              <h1 className="h1">
                The <span className="bluecolor">#1</span> Social-Fi Software on
                BASE. Chat, Make Friends, and Make Millions!
              </h1>
              <img width="70%" src={CursedGif} alt="Welcome to Basebook" />
            </div>
            <div className="col50">
              <div className="go-container">
                <h2>
                  Beta <span className="bluecolor">Live Now:</span>
                </h2>
                <img
                  onClick={hideSplashScreen}
                  className="splash-gobtn"
                  alt="go"
                  src={GoBtn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
