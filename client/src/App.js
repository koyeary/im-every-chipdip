import { useEffect, useRef, useState, useMemo, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAB from "./components/Buttons/FAB";
import Splash from "./components/Splash";
import { animated, config, useSpring } from "react-spring";
import "./App.css";
import Status from "./components/Projects/Status";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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
          <Route path="/status" element={<Status />} />
        </Routes>
      </div>
      {/* 
      <animated.div style={spring}>
        <FAB darkMode={darkMode} icon="linkedIn" />
        <FAB darkMode={darkMode} icon="gitHub" />

      </animated.div> */}
    </Router>
  );
};

export default App;
