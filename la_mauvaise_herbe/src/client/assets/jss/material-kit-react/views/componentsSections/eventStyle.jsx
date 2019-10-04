import { container, title } from "../../..//material-kit-react.jsx";

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
    fontWeight: "300",
    textAlign: "center",
    fontSize: "1.3vw",
  },
  gras: {
    fontWeight: "bold",
  }, 
  info: {
    fontSize: "0.8vw",
    fontWeight: "100",
    textAlign: "center",
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