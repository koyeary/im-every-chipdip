import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const FAB = ({ icon }) => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.info.main,
      color: "#FFF",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  const href =
    icon === "gitHub"
      ? "https://github.com/koyeary"
      : icon === "linkedIn"
      ? "https://www.linkedin.com/in/kat-yeary/"
      : null;
  return (
    <LightTooltip title={icon}>
      <IconButton
        href={href}
        target="_blank"
        style={{
          display: "flex",
          zIndex: 50,
          position: "absolute",
          bottom: 30,
          right: icon === "linkedIn" ? 84 : 32,
          backgroundColor: "#FFF",
          height: 60,
          width: 60,
          borderRadius: "50%",
        }}
      >
        {icon === "gitHub" ? (
          <GitHubIcon
            style={{
              fontSize: 42,
              color: "#6cc644",
              cursor: "pointer",
            }}
          />
        ) : icon === "linkedIn" ? (
          <LinkedInIcon
            style={{
              fontSize: 42,
              color: "#4078c0",
              cursor: "pointer",
            }}
          />
        ) : null}
      </IconButton>
    </LightTooltip>
  );
};

export default FAB;
