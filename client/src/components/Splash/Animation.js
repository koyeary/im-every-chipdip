import { animated, useSpring, useTrail, config } from "react-spring";
import "./Splash.css";
import ProjectManagement from "./ProjectManagement";
import Page from "./Page";
import SettingsIcon from "@mui/icons-material/Settings";

const Animation = ({ darkMode, open, advocateMode, projectMode }) => {
  const graphicStyles = useSpring({
    to: [
      { opacity: 0, transform: "translateY(-100%)" },
      { opacity: 1, transform: "translateY(0%)" },
    ],
    from: { opacity: 0, transform: "translateY(-10%)" },
    config: config.wobbly,
  });

  const graphicStyles1 = useSpring({
    to: [
      { opacity: 0, transform: "translateX(150%)" },
      { opacity: 1, transform: "translateX(0%)" },
    ],
    from: { opacity: 0, transform: "translateX(-15%)" },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 500,
  });

  const graphicStyles2 = useSpring({
    to: [
      { opacity: 0, transform: "translateY(-200%)" },
      { opacity: 1, transform: "translateY(0%)" },
    ],
    from: { opacity: 0, transform: "translateX(0%)" },
    config: config.wobbly,
    delay: 550,
  });

  const graphicStyles3 = useSpring({
    to: [
      { opacity: 0, transform: "translateX(100%)" },
      { opacity: 1, transform: "translateX(0%)" },
    ],
    from: { opacity: 0, transform: "translateX(-100%)" },
    config: config.wobbly,
    delay: 1250,
  });

  const graphicStyles4 = useSpring({
    to: [
      { opacity: 0, transform: "translateY(200%)" },
      { opacity: 1, transform: "translateY(0%)" },
    ],
    from: { opacity: 0, transform: "translateX(20%)" },
    config: config.default,
    delay: 1250,
  });

  const gearAnimation = useSpring({
    from: { rotate: 0 },
    to: { rotate: 720 },
    config: { duration: 1500, mass: 1, tension: 200, friction: 50, wobbly: 1 },
    delay: 1000,
  });

  const links = [
    { linkTitle: "about", dialog: "About" },
    { linkTitle: "projects", dialog: "Projects" },
    { linkTitle: "c.v.", dialog: "C.V." },
    { linkTitle: "contact", dialog: "Contact" },
  ];

  const trail = useTrail(links.length, {
    from: {
      opacity: 0,
      transform: open ? "translateY(-20%)" : "translateY(0%)",
    },
    to: [
      { opacity: 0, transform: open ? "translateY(-200%)" : "translateY(0%)" },
      { opacity: 1, transform: open ? "translateY(0%)" : "translateY(0%)" },
    ],
    config: config.wobbly,
    delay: 1750,
  });

  const Gear = () => {
    <animated.span style={{ paddingTop: 5, ...gearAnimation }}>
      <SettingsIcon sx={{ fontSize: "75%" }} />
    </animated.span>;
  };

  return (
    <div
      style={{
        width: "fit-content",
        margin: "30vh auto auto auto",
        height: "100%",
        maxWidth: "95vw",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <div className="header">
        <animated.div
          className="header-div"
          style={{
            color: "var(--darkest-blue)",
            fontWeight: 600,
            ...graphicStyles,
          }}
        >
          Kat
        </animated.div>
        <animated.div
          className="header-div"
          style={{
            ...graphicStyles1,
            fontWeight: 600,
            color: "var(--darkest-blue)",
          }}
        >
          Yeary
        </animated.div>
      </div>
      <div className="header">
        <div
          className="header-div"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          <animated.div
            style={{
              display: "flex",
              flexDirection: "row",
              ...graphicStyles2,
              color: "var(--dark-blue)",
              flexWrap: "wrap",
              minWidth: 340,
              fontWeight: 500,
            }}
          >
            Software
            <span style={{ color: "var(--light-blue)" }}> Engineer</span>
            <animated.span
              style={{
                ...graphicStyles3,
                color: "var(--darkest-blue)",
                paddingTop: 2.5,
              }}
            >
              &
            </animated.span>
          </animated.div>
        </div>
      </div>

      <div className="header" id="header-pm-div">
        <animated.div
          style={{
            ...graphicStyles4,
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
        {/*   <ProjectManagement spring={graphicStyles4} projectMode={projectMode} /> */}
      </div>

      <div className="header-sub">
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            <Page
              linkTitle={links[index].linkTitle}
              dialog={links[index].dialog}
              darkMode={darkMode}
            />
          </animated.div>
        ))}
      </div>
      <Page />
    </div>
  );
};

export default Animation;
