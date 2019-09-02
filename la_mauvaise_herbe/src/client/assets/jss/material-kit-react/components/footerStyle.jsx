import { container} from "../../material-kit-react.jsx";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRight: "0.05em solid rgb(0, 77, 0)",
  },
  right: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "0.05em solid rgb(0, 77, 0)",
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    backgroundColor: "white",
    marginTop: "8vh",
    color: "rgb(0, 77, 0)",
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  bloc: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  mention: {
    textAlign: "center",
    textDecoration: "none",
  },
  NavLink: {
    textAlign: "center",
    fontSize: "0.8vw",
    textDecoration: "none",
    color: "rgb(153, 61, 0)",
    marginBottom: "0.1em",
    "&:hover,&:focus": {
      color: "rgb(153, 61, 0)",
      fontWeight: "700",
    },

  },
  titre: {
    fontWeight: "600",
  },
  espace: {
    marginBottom: "1em",
  }
};
export default footerStyle;
