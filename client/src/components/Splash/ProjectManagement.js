import { animated } from "react-spring";
import "./Splash.css";

const ProjectManagement = ({ spring, projectMode }) => {
  return (
    <>
      {/*       <animated.div
        className="header-div"
        style={{
          color: "var(--darkest-blue)",
          fontWeight: 600,
          ...graphicStyles,
        }}
      >
        Project
      </animated.div>
      <animated.div
        className="header-div"
        style={{
          ...graphicStyles1,
          fontWeight: 600,
          color: "var(--darkest-blue)",
        }}
      >
        Manager
      </animated.div> */}

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
    </>
  );
};

export default ProjectManagement;
