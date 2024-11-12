import { animated, useSpring, useTrail, config } from "react-spring";
import "./Splash.css";
import ProjectManagement from "./ProjectManagement";
import Advocate from "./Advocate";
import Page from "./Page";

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
      { opacity: 0, transform: "translateX(200%)" },
      { opacity: 1, transform: "translateX(0%)" },
    ],
    from: { opacity: 0, transform: "translateX(20%)" },
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
    delay: 1500,
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
    delay: advocateMode ? 2000 : 1000,
  });

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
            color: "var(--darkest-blue)",
            fontWeight: 600,
          }}
        >
          Yeary
        </animated.div>
      </div>
      <div className="header">
        <div
          className="header-div"
          style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
        >
          <animated.div
            style={{
              display: "flex",
              flexDirection: "row",
              ...graphicStyles2,
              color: "var(--dark-blue)",
              flexWrap: "wrap",
              minWidth: 340,
            }}
          >
            Project
            <span style={{ color: "var(--light-blue)", marginLeft: 10 }}>
              Manager
            </span>
          </animated.div>
          <animated.div
            style={{
              ...graphicStyles3,
              color: "var(--darkest-blue)",

              paddingTop: 2.5,
            }}
          >
            &
          </animated.div>
        </div>
      </div>
      {/*       {advocateMode && (
        <div className="header">
          <Advocate spring={graphicStyles4} advocateMode={advocateMode} />
        </div>
      )} */}

      <div className="header" id="header-pm-div">
        <ProjectManagement spring={graphicStyles4} projectMode={projectMode} />
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
