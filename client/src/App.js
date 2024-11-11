import { useEffect, useState, useMemo, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAB from "./components/Buttons/FAB";
import Splash from "./components/Splash";
import { animated, config, useSpring } from "react-spring";
import "./App.css";
import Status from "./components/Projects/Status";
import FinanceDashboard from "./components/Projects/FinanceDashboard";
import Org from "./components/Projects/Org";

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
          <Route
            path="/pm"
            element={
              <Splash
                darkMode={darkMode}
                advocateMode={false}
                projectMode={true}
              />
            }
          />
          <Route path="/orgchart" element={<Org darkMode={darkMode} />} />
          <Route
            path="/finance"
            element={<FinanceDashboard darkMode={darkMode} />}
          />
          <Route path="/status" element={<Status />} />
        </Routes>
      </div>

      <animated.div style={spring} className="fab">
        <FAB darkMode={darkMode} icon="linkedIn" />
        <FAB darkMode={darkMode} icon="gitHub" />
      </animated.div>
    </Router>
  );
};

export default App;
