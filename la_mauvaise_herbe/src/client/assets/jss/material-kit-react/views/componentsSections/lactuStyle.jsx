import { container, title } from "../../../material-kit-react.jsx";

const lactuStyle = {
sections: {
    padding: "70px 0"
  },
  container: {
  container,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
    },
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "rgb(0, 77, 0)",
    paddingBottom: "0",
    marginBottom: "0",
  },
  image: {
    width: "30vw",
    height: "30vw",
    objectFit: "cover",
  },
  ligne: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
text: {
    marginBottom: "2em",
},
texte: {
    margin: "2em 0",
},
a: {
    textDecoration: "none",
    color: 'black',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "0.05em solid rgb(153, 61, 0)",
    margin: "1em",
    "&:after,&:before,&:active,&:hover": {
        textDecoration: "none",
        color: 'black',
        fontWeight: "500",
    }
},
contenu: {
    width: "45%",
    "@media (max-width: 768px)": {
        width: "80%",
        },
}
}

export default lactuStyle;