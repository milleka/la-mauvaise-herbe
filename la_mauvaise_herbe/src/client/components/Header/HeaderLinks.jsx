/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/activités">
          Activités
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/actualités">
          actualités
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/inscription">
          Inscription
        </Link>
      </ListItem> 
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
