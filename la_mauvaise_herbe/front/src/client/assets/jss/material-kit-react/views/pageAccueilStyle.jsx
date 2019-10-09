import { container } from "../../material-kit-react.jsx";

const pageAccueilStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  tit: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    position: "relative"
  },
  titles: {
    fontSize: "7vw",
    fontWeight: "800",
    color: "rgb(134, 179, 0)",
    textShadow: "0.1em 0.1em 0.1em black",
    fontFamily: "'Indie Flower', cursive",
  },
  title: {
    fontSize: "7vw",
    fontWeight: "800",
    color: "rgb(153, 61, 0)",
    textShadow: "0.1em 0.1em 0.1em black",
    padding: "0 0.4em",
    transform: "rotate(-10deg)",
    fontFamily: "'Indie Flower', cursive",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default pageAccueilStyle;
