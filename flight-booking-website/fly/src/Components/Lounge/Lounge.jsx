import React, { useEffect } from "react";
// Import Images
import imageGrid from "../../assets/Images-Grid2.png";
// Import AOS ->>->>------>
import Aos from "aos";
import "aos/dist/aos.css";

function Lounge() {
  const Home = () => {
    // UseEffect
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  };

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-duration="2500"
          className="imgDiv"
        >
          <img src={imageGrid} alt="" />
        </div>

        <div className="textDiv">
          <h2
            data-aos-once="true"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            Unaccompanied Minor Lounge
          </h2>

          <div className="grids grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
              className="singleGrid"
            >
              <span className="gridTitle">Help through the airport</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                perferendis, repellendus sit voluptates!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
              className="singleGrid"
            >
              <span className="gridTitle">Priority Boarding</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                perferendis, repellendus sit voluptates!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Care on the flight</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                perferendis, repellendus sit voluptates!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                perferendis, repellendus sit voluptates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lounge;
