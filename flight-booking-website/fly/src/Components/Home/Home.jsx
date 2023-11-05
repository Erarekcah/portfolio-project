import React, { useEffect } from "react";
// Import Assets =========>
import video from "../../assets/video.mp4";
import airplane from "../../assets/takeOff.png";
// Import AOS ->>->>------>
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  // UseEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500" data-aos-once="true">
          Create Ever-lasting Memories With Us
        </h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>

        <img src={airplane} className="plane" />
      </div>
    </div>
  );
};

export default Home;
