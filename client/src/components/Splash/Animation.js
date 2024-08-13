import { useEffect } from "react";
import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTrail,
} from "react-spring";
import "./Splash.css";
import Advocate from "./Advocate";
import Page from "./Page";
import "./Splash.css";

const Animation = (props) => {
  const { darkMode, open, advocateMode } = props;

  const graphicStyles = useSpring({
    key: "graphicStyles",
    to: [
      { opacity: 0, transform: "translateY(-100%)" },
      { opacity: 1, transform: "translateY(-0%)" },
    ],
    from: { opacity: 0, transform: "translateY(-10%)" },
    config: config.wobbly,
    //duration: 710,
  });

  const graphicStyles1 = useSpring({
    key: "graphicStyles1",
    to: [
      { opacity: 0, transform: "translateX(150%)" },
      { opacity: 1, transform: "translateX(0%)" },
    ],
    from: { opacity: 0, transform: "translateX(-15%)" },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 500,
    //duration: 810,
  });

  const graphicStyles2 = useSpring({
    key: "graphicStyles2",
    to: [
      {
        opacity: 0,
        transform: "translateY(-200%)",
      },

      {
        opacity: 1,
        transform: "translateY(0%)",
      },
    ],
    from: { opacity: 0, transform: "translateX(0%)" },
    config: config.wobbly,
    //duration: 710,
    delay: 550,
  });

  const graphicStyles3 = useSpring({
    key: "graphicStyles3",
    to: [
      { opacity: 0, transform: "translateX(200%)" },
      { opacity: 1, transform: "translateX(0%)" },
    ],
    from: { opacity: 0, transform: "translateX(20%)" },
    //duration: 510,
    config: config.wobbly,
    delay: 1250,
  });

  const graphicStyles4 = useSpring({
    key: "graphicStyles4",
    to: [
      { opacity: 0, transform: "translateY(200%)" },
      { opacity: 1, transform: "translateY(0%)" },
    ],
    from: { opacity: 0, transform: "translateX(20%)" },
    config: config.default,
    delay: 1500,
  });

  const link = [
    {
      linkTitle: "about",
      dialog: "About",
    },
    {
      linkTitle: "projects",
      dialog: "Projects",
    },
    {
      linkTitle: "c.v.",
      dialog: "C.V.",
    },
    {
      linkTitle: "contact",
      dialog: "Contact",
    },
  ];

  const [trail] = useTrail(
    4,
    (index) => ({
      reset: false,
      key: index,
      from: {
        opacity: 0,
        transform: open ? "translateY(-20%)" : "translateY(0%)",
      },
      to: [
        {
          opacity: 0,
          transform: open ? "translateY(-200%)" : "translateY(0%)",
        },

        {
          opacity: 1,
          transform: open ? "translateY(-0%)" : "translateY(0%)",
        },
      ],
      config: config.wobbly,
      delay: advocateMode
        ? index === 0
          ? 2000
          : 2000 + index * 250
        : index === 0
        ? 1000
        : 1000 + index * 250,
    }),
    []
  );

  return (
    <div
      style={{
        width: "50%",
        margin: "30vh auto auto auto",
        minWidth: "fit-content",
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
      <div
        className="header"
        /*         style={{
          display: "flex",
          flexDirection: "column",
        }} */
      >
        <div
          className="header-div"
          /*           style={{
            display: "flex",
            flexDirection: "row",
          }} */
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
            Fullstack
            <span style={{ color: "var(--light-blue)", marginLeft: 10 }}>
              Developer
            </span>
          </animated.div>
          {/*   )} */}
          {advocateMode && (
            <animated.div
              style={{ ...graphicStyles3, color: "var(--darkest-blue)" }}
            >
              &
            </animated.div>
          )}
        </div>
      </div>
      {advocateMode && (
        <div className="header">
          <Advocate spring={graphicStyles4} advocateMode={advocateMode} />
        </div>
      )}
      <div className="header-sub">
        {trail.map((style, index) => (
          <animated.div style={style}>
            <Page
              linkTitle={link[index].linkTitle}
              dialog={link[index].dialog}
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
