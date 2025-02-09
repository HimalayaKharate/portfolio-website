import "./GearLane.css";
import RotatingGear from "./RotatingGear";
export default function GearLane() {
  const elements = [];
  var len = 5;
  if (document.documentElement.clientWidth < 768) {
    len = 3;
  }
  for (let i = 0; i < len; i++) {
    elements.push(<RotatingGear />);
  }

  return <div className="gear-lane">{elements}</div>;
}
