import { container, title } from "../../../material-kit-react.jsx";

import modalStyle from "../../../material-kit-react/modalStyle.jsx";
import tooltipsStyle from "../../../material-kit-react/tooltipsStyle.jsx";
import popoverStyles from "../../../material-kit-react/popoverStyles.jsx";

const reservationStyles = {
  section: {
    padding: "70px 0 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  },
  ...modalStyle,
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal",
  },
  date: {
    color: "green",
  },
  espace: {
    marginBottom : "17px",
    paddingTop: "27px",
  },
  number: {
    textAlign: "center",
    marginLeft: "5px",
    width: "60px",
    borderRadius: "10px",
    border: "1px solid rgb(0, 77, 0)",
    padding: "5px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
  },

  lab :{
    margin: "5px",
  },

  text: {
    margin: "5px",
    border: "none",
    borderBottom: "2px solid rgb(0, 77, 0)",
    borderRadius: "4px",
  },

  reponse1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    fontWeight: "700",
    backgroundColor: "rgb(0, 77, 0)",
    color: "white",
  },
  ...tooltipsStyle,
  ...popoverStyles
};

export default reservationStyles;