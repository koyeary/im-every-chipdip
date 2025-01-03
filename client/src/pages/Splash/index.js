import Jumbotron from "./Jumbotron";
import "./Splash.css";

const Splash = ({ darkMode, open }) => {
  return (
    <div
      className="splash-container"
      id={darkMode ? "splash-container-dk" : ""}
    >
      <div className="page" id={darkMode ? "splash-container-dk" : ""}>
        <Jumbotron darkMode={darkMode} open={open} />
      </div>
    </div>
  );
};

export default Splash;
