import { container, title } from "../../../material-kit-react.jsx";
import fond from "../../../../img/sporophytes.jpg";

const contactStyle = {
sections: {
    padding: "70px 0"
},
container,
title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
},
active: {
    backgroundImage: "url(" + fond + ")",
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "2em",
},

cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
},
socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
},
divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
    fontSize: "1.5vw",
},
cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
},
socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
},
inputIconsColor: {
    color: "#495057"
},
email: {
    color: "rgb(0, 77, 0)",
    fontWeight: "500",
    textAlign: "center",
}
}

export default contactStyle;