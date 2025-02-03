import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GitHub from "@mui/icons-material/GitHub";
import "./Projects.css";

const Projects = ({ darkMode }) => {
  // Your component logic here

  return (
    // Your JSX code here
    <div
      style={{
        width: "90%",
        margin: "auto",
        height: "100%",
        paddingTop: "100px",
        overflow: "auto",
        scrollbarWidth: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="projects-header">Projects</h1>
      <h2 className="subheader">
        Check out the examples below or go to my{" "}
        <Link className="link" to="https://github.com/koyeary" target="_blank">
          GitHub <GitHub />
        </Link>
      </h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Guestbook</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ display: "flex", flexDirection: "column" }}>
            <Link to="/login">Sign My Guestbook</Link>
            <br />
            This is an in-progress project that allows a user to create a
            password-protected account, with a profile they can save and view
            later. They can then choose to write a message in the guestbook,
            which they have the option to make public or private. <br />
            <br />
            For now, the user is able to create an account, log in, and view or
            update their profile. Future features will include the ability to
            change their password, upload a profile image, and write messages in
            the guestbook.
            <br />
            <br />
            This application is built with React, Node.js, Express, and MongoDB.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
    </div>
  );
};

export default Projects;
