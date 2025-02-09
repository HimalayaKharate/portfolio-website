import GearLane from "../RotatingGearAnimation/GearLane";
import RotatingGear from "../RotatingGearAnimation/RotatingGear";
import "./About.css";
export default function About() {
  return (
    <>
      <div id="about" className="about oswald-200">
        <div className="about-heading">
          <GearLane />
          <div>
            <h2>About</h2>
          </div>
        </div>

        <p>
          Hi, I'm Himalaya Kharate, a passionate Software Developer specializing
          in Java.
        </p>
        <p>
          I am currently pursuing Bachelor of Engineering in Computer
          Engineering in Savitribai Phule Pune University, Pune.
        </p>
        <p>
          I am dedicated to professionalism and excited to join companies to
          provide my expertise and develop solutions to problems helping human
          soceity grow.
        </p>
        <p>
          I am a passionate developer learning and building projects using Java
          and Spring Framework. I am dedicated towards learning software
          development and absorbing all the knowledge related to Computer
          Engineering.
        </p>
      </div>
    </>
  );
}
