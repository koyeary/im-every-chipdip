import React from "react";
import {
  a,
  animated,
  useSpring,
  useTrail,
  config,
  useSprings,
} from "react-spring";
import "./Splash.css";
import Page from "./Page";
import css from "./Splash.css";

const Jumbotron = ({ darkMode, open }) => {
  // Animation for the first name
  const graphicStyles = useSpring({
    to: open
      ? [
          { opacity: 0, transform: "translateY(-100%)" },
          { opacity: 1, transform: "translateY(0%)" },
        ]
      : {},
    from: { opacity: 0, transform: "translateY(-10%)" },
    config: config.wobbly,
  });

  // Animation for the last name
  const graphicStyles1 = useSpring({
    to: open
      ? [
          { opacity: 0, transform: "translateX(150%)" },
          { opacity: 1, transform: "translateX(0%)" },
        ]
      : {},
    from: { opacity: 0, transform: "translateX(-15%)" },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 500,
  });

  // Animation for the first title (Software Engineer)
  const graphicStyles2 = useSpring({
    to: open
      ? [
          { opacity: 0, transform: "translateY(-200%)" },
          { opacity: 1, transform: "translateY(0%)" },
        ]
      : {},
    from: { opacity: 0, transform: "translateX(0%)" },
    config: config.wobbly,
    delay: 550,
  });

  // Animation for the ampersand
  const graphicStyles3 = useSpring({
    to: open
      ? [
          { opacity: 0, transform: "translateX(100%)" },
          { opacity: 1, transform: "translateX(0%)" },
        ]
      : {},
    from: { opacity: 0, transform: "translateX(-100%)" },
    config: config.wobbly,
    delay: 1000,
  });

  // Animation for the first title (Fullstack)
  const graphicStyles4 = useSpring({
    to: open
      ? [
          { opacity: 0, transform: "translateY(200%)" },
          { opacity: 1, transform: "translateY(0%)" },
        ]
      : {},
    from: { opacity: 0, transform: "translateX(20%)" },
    config: config.default,
    delay: 1000,
  });

  // Animation for the second title (Developer)
  const graphicStyles5 = useSpring({
    to: open
      ? [
          { opacity: 0, transform: "translateX(200%)" },
          { opacity: 1, transform: "translateX(0%)" },
        ]
      : {},
    from: { opacity: 0, transform: "translateY(-100%)" },
    config: config.default,
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
      transform: "translateY(-20%)",
    },
    to: open
      ? [
          { opacity: 0, transform: "translateY(-200%)" },
          { opacity: 1, transform: "translateY(0%)" },
        ]
      : {},
    config: config.wobbly,
    delay: 1100,
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
        {/*         <animated.div
          style={{
            ...graphicStyles4,
            display: "flex",
            flexDirection: "row",
            fontWeight: 500,
          }}
        >
          <animated.span style={{ color: "var(--light-blue)" }}>
            Fullstack
          </animated.span>
          <animated.span style={{ color: "var(--dark-blue)", marginLeft: 10 }}>
            Developer
          </animated.span>
        </animated.div> */}
        <animated.span
          style={{ ...graphicStyles4, color: "var(--light-blue)" }}
        >
          Fullstack
        </animated.span>
        <animated.span style={{ ...graphicStyles5, color: "var(--dark-blue)" }}>
          Developer
        </animated.span>
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

      {/* <Page /> */}
    </div>
  );
};

export default Jumbotron;
