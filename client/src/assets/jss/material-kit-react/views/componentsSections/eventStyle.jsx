import { container, title } from "assets/jss/material-kit-react.jsx";

const eventStyle = {
sections: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  h3: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: "2.5vw",
  },
  h4: {
    fontWeight: "300",
    textAlign: "center",
    fontSize: "1.8vw",
  },
  p: {
    fontWeight: "200",
    textAlign: "center",
    fontSize: "1.2vw",
  },
  image: {
    width: "100%",
    height: "100%",
    display: "block",
  },
  img: {
    width: "100%",
    height: "70vh",
    "@media (max-width: 425px)": {
        height: "40vh",
      },
  }
};

export default eventStyle;