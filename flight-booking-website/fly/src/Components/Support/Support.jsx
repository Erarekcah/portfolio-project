import React, { useEffect } from "react";

// Imported images
import gridImage from "../../assets/Images-Grid.png";
// Import AOS ->>->>------>
import Aos from "aos";
import "aos/dist/aos.css";

function Support() {
  const Home = () => {
    // UseEffect
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  };

  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam
            aspernatur illum!
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleInfo"
              data-aos-once="true"
            >
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto praesentium voluptatem ipsum totam voluptatibus
                officia!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3500"
              data-aos-once="true"
              className="singleInfo"
            >
              <span className="number colorOne">02</span>
              <h4>Chauffeur services ay your arrival</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto praesentium voluptatem ipsum totam voluptatibus
                officia!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="4500"
              data-aos-once="true"
              className="singleInfo"
            >
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto praesentium voluptatem ipsum totam voluptatibus
                officia!
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            data-aos-once="true"
            className="imgDiv"
          >
            <img src={gridImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
