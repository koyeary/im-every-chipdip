import { useEffect, useRef, useState, useMemo, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Splash from "./components/Splash";
import FAB from "./components/Buttons/FAB";
import NavButton from "./components/Buttons/NavButton";
import { animated, config, useSpring } from "react-spring";
import "./App.css";
import Payment from "./components/Payment";

const Splash = lazy(() => import("./components/Splash"));

const App = () => {
  const darkMode = useRef(false);
  const spring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
    config: config.slow,
  });

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="*"
            element={<Splash darkMode={darkMode} advocateMode={false} />}
          />
          <Route
            path="/advocate"
            element={<Splash darkMode={darkMode} advocateMode={true} />}
          />
        </Routes>
      </div>

      <animated.div style={spring}>
        <FAB darkMode={darkMode} icon="linkedIn" />
        <FAB darkMode={darkMode} icon="gitHub" />
        {/*        <NavButton darkMode={darkMode} /> */}
      </animated.div>
    </Router>
  );
};

export default App;
