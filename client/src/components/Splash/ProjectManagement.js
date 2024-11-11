import { animated } from "react-spring";
import "./Splash.css";

const ProjectManagement = ({ spring, projectMode }) => {
  return (
    <div className="header-div">
      <animated.div
        style={{ ...spring, display: "flex", flexDirection: "row" }}
      >
        <animated.span style={{ color: "var(--light-blue)" }}>
          Fullstack
        </animated.span>
        <animated.span style={{ color: "var(--dark-blue)", marginLeft: 10 }}>
          Developer
        </animated.span>
      </animated.div>
    </div>
  );
};

export default ProjectManagement;
