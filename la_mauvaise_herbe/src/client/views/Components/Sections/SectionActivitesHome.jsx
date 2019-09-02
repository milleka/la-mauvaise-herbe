import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import Button from "../../../components/CustomButtons/Button.jsx";
// @material-ui/icons
// core components
// sections for this page
import activitesStyle from "../../../assets/jss/material-kit-react/views/componentsSections/activitesHomeStyle.jsx";

class Activites extends React.Component {
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.active}>
        <h2 className={classes.titre}>Activités</h2>
        <h5 className={classes.accroche}>Tu souhaites une activité personnalisée ?</h5>
            <Link to={"/activités"} className={classes.link}>
              <Button className={classes.bouton} size="lg" simple>
                Clique-ici
              </Button>
            </Link>

    </div>
    );
  }
}

Activites.propTypes = {
  classes: PropTypes.object
};

export default withStyles(activitesStyle)(Activites);