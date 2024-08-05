import { useState, useEffect } from "react";
import Animation from "./Animation";
import { config, useSpring, useSpringRef, useTransition } from "react-spring";
import "./Splash.css";

const Splash = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [start, setStart] = useState(true);
  const [moving, setMoving] = useState(false);
  const { darkMode, advocateMode } = props;

  return (
    <div className="splash-container">
      <div style={{ backgroundColor: "#FFF" }} className="page">
        <Animation
          open={start}
          advocateMode={advocateMode}
          darkMode={darkMode}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default Splash;
