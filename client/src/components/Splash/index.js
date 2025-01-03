import { useState, useEffect } from "react";
import Animation from "./Animation";
import "./Splash.css";

const Splash = (props) => {
  /*   const [activeIndex, setActiveIndex] = useState(-1);
  const [start, setStart] = useState(true);
  const [moving, setMoving] = useState(false);
  const { darkMode, advocateMode, projectMode } = props; */

  return (
    <div className="splash-container">
      <div style={{ backgroundColor: "#FFF" }} className="page">
        <Animation
        /*           open={start}
          advocateMode={advocateMode}
          projectMode={projectMode}
          darkMode={darkMode}
          activeIndex={activeIndex} */
        />
      </div>
    </div>
  );
};

export default Splash;
