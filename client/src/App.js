import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { animated, config, useSpring } from "react-spring";
import FAB from "./components/Buttons/FAB";
import Profile from "./pages/Projects/Profile";
import Splash from "./pages/Splash";
import Status from "./pages/Projects/Status";
import FinanceDashboard from "./pages/Projects/FinanceDashboard";
import useUser from "./hooks/useUser";
import "./App.css";

import Login from "./pages/Projects/Profile/Login";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(true);
  const { user } = useUser();

  const spring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
    config: config.slow,
  });

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
    setOpen(false);
  };

  return (
    <>
      <Router>
        <div
          style={{
            backgroundColor: darkMode && "var(--darkest-blue)",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Routes>
            <Route
              path="*"
              element={<Splash darkMode={darkMode} open={open} />}
            />
            <Route
              path="/finance"
              element={<FinanceDashboard darkMode={darkMode} />}
            />
            <Route path="/status" element={<Status />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <animated.div style={spring} className="fab">
            <FAB darkMode={darkMode} icon="linkedIn" />
            <FAB darkMode={darkMode} icon="gitHub" />
          </animated.div>
        </div>
      </Router>
    </>
  );
};

export default App;
