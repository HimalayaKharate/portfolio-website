import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./HomeNav.css";

const HomeNav = ({ url }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      const hour = new Date().getHours();
      let imageUrl = "";

      if ((hour >= 0 && hour < 4) || (hour >= 20 && hour <= 23)) {
        imageUrl = "/assets/himalaya_night.jpeg";
      } else if (hour >= 4 && hour < 8) {
        imageUrl = "/assets/himalaya_sunrise.jpg";
      } else if (hour >= 8 && hour < 12) {
        imageUrl = "/assets/backgroundHome.jpeg";
      } else if (hour >= 12 && hour < 18) {
        imageUrl = "/assets/himalaya_after.jpg";
      } else if (hour >= 18 && hour < 20) {
        imageUrl = "/assets/himalaya_sunset.jpg";
      }

      setBackgroundImage(`url('${imageUrl}')`);
    };

    updateBackground();
    const interval = setInterval(updateBackground, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="background-home homebox"
      >
        <div>
          <Navbar url={url} />
        </div>
        <div style={{ margin: "3em" }}>
          <h2 className="oswald-700 homeLine text-outline">
            HI,
            <br />
            I'M HIMALAYA
            <br />
            AND I LIKE TO DEVELOP
            <br />
            INNOVATIVE PROJECTS!
          </h2>
        </div>
      </div>
    </>
  );
};

export default HomeNav;
