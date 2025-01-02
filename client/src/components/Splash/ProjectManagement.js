import { animated } from "react-spring";
import "./Splash.css";

const ProjectManagement = ({ spring, projectMode }) => {
  return (
    <div className="header-div">
      <animated.div
        style={{
          ...spring,
          display: "flex",
          flexDirection: "row",
          fontWeight: 500,
        }}
      >
        <animated.span style={{ color: "var(--light-blue)" }}>
          Project
        </animated.span>
        <animated.span style={{ color: "var(--dark-blue)", marginLeft: 10 }}>
          Manager
        </animated.span>
      </animated.div>
    </div>
  );
};

export default ProjectManagement;
