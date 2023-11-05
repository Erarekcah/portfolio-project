import React, { useEffect } from "react";
// Imported Destination Images
import paris from "../../assets/paris.jpg";
import london from "../../assets/london.jpg";
import new_york from "../../assets/new_york.jpg";
import dubai from "../../assets/dubai.webp";
// Imported Traveler Images
import traveler1 from "../../assets/user1.jpeg";
import traveler2 from "../../assets/user2.jpg";
import traveler3 from "../../assets/user3.jpg";
import traveler4 from "../../assets/user4.jpg";
// Import AOS ->>->>------>
import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "BellaAldridge",
    socialLink: "@bellaA1",
    aosAffect: "fade-right",
  },

  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: "AdrianAdamson",
    socialLink: "@A_Adamson",
    aosAffect: "fade-up",
  },

  {
    id: 3,
    destinationImage: new_york,
    travelerImage: traveler4,
    travelerName: "NuriddinovSalmon",
    socialLink: "@Al-Farsi",
    aosAffect: "fade-down",
  },

  {
    id: 4,
    destinationImage: dubai,
    travelerImage: traveler3,
    travelerName: "IzabellaSmith",
    socialLink: "@Izabel_001",
    aosAffect: "fade-left",
  },
];

function Travelers() {
  const Home = () => {
    // UseEffect
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  };

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
              aosAffect,
            }) => {
              return (
                // Single passanger card
                <div
                  data-aos={aosAffect}
                  data-aos-duration="2500"
                  data-aos-once="true"
                  key={id}
                  className="singleTraveler"
                >
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelersDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Travelers;
