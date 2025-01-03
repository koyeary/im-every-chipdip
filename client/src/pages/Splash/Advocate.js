import { animated } from "react-spring";
import "./Splash.css";

const Advocate = ({ spring, advocateMode }) => {
  return (
    <div className="header-div">
      <animated.div
        style={{ ...spring, display: "flex", flexDirection: "row" }}
      >
        <animated.span style={{ color: "var(--light-blue)" }}>
          {/*  {advocateMode ? "Developer" : "Fullstack"} */}
          Developer
        </animated.span>
        <animated.span style={{ color: "var(--dark-blue)", marginLeft: 10 }}>
          {/*         {advocateMode ? "Advocate" : "Developer"} */}
          Advocate
        </animated.span>
      </animated.div>
    </div>
  );
};

export default Advocate;
