import { container, title } from "assets/jss/material-kit-react.jsx";
import gauche from "assets/img/aquarellematt.jpg";

const actualitésStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
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
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  texte: {
      color: "black",
      fontSize: "1.2em",
      textAlign: "center",
  },
  img: {
    width: "100%",
    backgroundImage: "url(" + gauche + ")",
  },
  taille: {
      width: "100%",
      padding: "2em",
      textAlign: "center",
      backdropFilter: "blur(4px)",

      },
    ligne: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
};

export default actualitésStyle;