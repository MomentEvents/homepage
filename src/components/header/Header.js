import React, { useEffect } from "react";
import "./Header.css";
// import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
// import { BsMouse } from "react-icons/bs";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="aligning-contents-center">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span className="main-text">Finding events is hard</span>
              <span className="subtitle-text">Let's make it easy</span>
              {/* <span>is a Lorem ipsum dolor sit amet, consectetur adipisicing</span> */}
            </h1>

            <div className="release-text">
              Mobile app release coming soon to UCSD and UIUC!
            </div>
            {/* <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
          </div> */}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* lol ^*/}
      <AnimatedArrow></AnimatedArrow>
        </div>
        {/* <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div> */}
      </div>
      {/* <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div> */}
    </section>
  );
};

export default Header;
