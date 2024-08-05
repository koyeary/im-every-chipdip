const styles = {
  top: {
    fontWeight: 600,
  },
  h1: {
    fontSize: "2.5rem",
    fontWeight: 600,
    margin: "3.5% auto 0 auto",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "auto",
    height: "calc(100% - 50px)",
    overflow: "auto",
    backgroundColor: "var(--neutral)",
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "0 0 5% 0",
    justifyContent: "space-between",
  },
  splash: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    margin: "25vh auto",
    fontFamily: '"Outfit", sans-serif',
  },
  splashContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "fit-contents",
    margin: "auto",
    fontOpticalSizing: "auto",
    fontSize: "4.8rem",
    fontWeight: 500,
    fontStyle: "normal",
    letterSpacing: "-0.07em",
  },
  "@media (min-width: 1200px)": {
    header: {
      fontSize: "5rem",
    },
  },
  "@media (min-width: 992px) and (max-width: 1199px)": {
    header: {
      fontSize: "4.5rem",
    },
  },
  "@media (min-width: 768px) and (max-width: 991px)": {
    header: {
      fontSize: "4.2rem",
    },
  },
  "@media (min-width: 576px) and (max-width: 767px)": {
    header: {
      fontSize: "4rem",
    },
  },
  "@media (min-width: 439px) and (max-width: 575px)": {
    header: {
      fontSize: "3rem",
    },
  },
  "@media (min-width: 361px) and (max-width: 439px)": {
    header: {
      fontSize: "2.75rem",
    },
  },
  "@media (min-width: 341px) and (max-width: 360px)": {
    header: {
      fontSize: "2.25rem",
    },
  },
  "@media (max-width: 340px)": {
    header: {
      paddingLeft: "10px",
      fontSize: "1.5rem",
    },
  },
  headerDiv: {
    width: "fit-content",
    lineHeight: "0.95",
    margin: "5px 2.5px",
  },
  headerSub: {
    display: "flex",
    flexDirection: "row",
    width: "98%",
    justifyContent: "space-between",
    margin: "20px 5px",
  },
  headerSubDiv: {
    width: "fit-content",
    margin: "0 5px 0 5px",
    fontSize: "2rem",
    color: "#21387a",
    paddingBottom: "10px",
    border: "3px none #fff",
    backgroundColor: "#fff",
  },
  "@media (min-width: 1200px)": {
    headerSubDiv: {
      fontSize: "2rem",
    },
  },
  "@media (min-width: 992px) and (max-width: 1199px)": {
    headerSubDiv: {
      fontSize: "1.75rem",
    },
  },
  "@media (min-width: 361px) and (max-width: 991px)": {
    headerSubDiv: {
      fontSize: "1.5rem",
    },
  },
  "@media (max-width: 360px)": {
    headerSubDiv: {
      fontSize: "1rem",
    },
  },
};

export default styles;
