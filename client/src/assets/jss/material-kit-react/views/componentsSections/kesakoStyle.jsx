import { container, title } from "assets/jss/material-kit-react.jsx";

const kesakoStyle = {
sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  image: {
      width: "30vw",
      "@media (max-width: 768px)": {
          width: "70%",
      },
  },
  kesako: {
      display: "flex",
      "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
      },
  },
  titre: {
      display: "flex",
      alignItems: "center",
      color: "rgb(0, 77, 0)",
      textDecoration: "none",
      fontWeight: "800",
      padding: "0.8em 0",
  },
  question: {
    display: "flex",
    flexDirection: "column",
  },
  signe: {
      color: "rgb(0, 77, 0)",
      width: "5vw",
      marginTop: "0.4em",
  },
  text: {
      color: "black",
      fontSize: "1em",
      fontWeight: "400",
      margin: "0 3vw", 
  }
}

export default kesakoStyle;