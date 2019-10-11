/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-scroll";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function Lien1({ ...props }) {
  const { classes } = props;
  return (
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} activeClass="active" to="evenements" spy={true} smooth={true} offset={-70} duration={500}>
          évènements
        </Link>
      </ListItem>
  );
}

export default withStyles(headerLinksStyle)(Lien1);