import { container, title } from "assets/jss/material-kit-react.jsx";

const lactiviteStyle = {
sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "rgb(0, 77, 0)",
  },
  ligne: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
    },
  },
  ligne2 :{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "@media (max-width: 490px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  left:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignitems: "center",
    width: "50%",
  },
  right: {
      width: "20%",
      "@media (max-width: 990px)": {
        width: "30%",
      },
      "@media (max-width: 490px)": {
        paddingTop: "1em",
        width: "60%",
      },
  },
  tarif: {
    display: "flex",
    paddingRight: "2em",
    "@media (max-width: 990px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  duree: {
    display: "flex",
    "@media (max-width: 990px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  colonne: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "2em",
      width: "100%",
  },
  image: {
    width: "30vw",
    "@media (max-width: 768px)": {
        width: "70%",
    },
  },
  titre: {
      color: "rgb(153, 61, 0)",
      fontWeight: "400",
  },
  bold: {
    fontWeight: "500",
    margin: "0",
    paddingRight: "0.5em",
  },
  valeur: {
    margin: "0",
    paddingTop: "0.1em",
  },
  bloc: {
    paddingBottom: "3em",
  }
}

export default lactiviteStyle;