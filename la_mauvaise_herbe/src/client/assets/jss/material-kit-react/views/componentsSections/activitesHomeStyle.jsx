import { container, title } from "../../../material-kit-react";
import fond from "../../../../img/activite.jpg";

const activitesStyle = {
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
titre: {
    color: "rgb(134, 179, 0)",
    fontWeight: "200",
    fontSize: "7vw",
    fontFamily: "'Abel', sans-serif",
},
accroche: {
    color: "white",
    fontWeight: "100",
    fontSize: "3vw",
    fontFamily: "'Abel', sans-serif",
},
bouton: {
    fontSize: "2vw",
    border: "0.1vw solid white",
    fontFamily: "'Abel', sans-serif",
    "&:hover,&:focus": {
        color: "rgb(134, 179, 0)",
        border: "0.1vw solid rgb(134, 179, 0)",
        transition: "color 0.5s ease",
      },
}

}

export default activitesStyle;