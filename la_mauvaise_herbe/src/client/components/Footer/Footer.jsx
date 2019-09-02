import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Button from "../../components/CustomButtons/Button.jsx";

// @material-ui/icons
import { Link } from "react-router-dom";

// @material-ui/core components

import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  
  return (
    <footer className={footerClasses}>
      <div className={classes.bloc}>
        <div className={classes.left}>
          <h4 className={classes.titre}>Liens utiles</h4>
          <Button
            href="https://fr.wikipedia.org/wiki/Plante_m%C3%A9dicinale"
            target="_blank"
            color="transparent"
          >
          <p className={classes.NavLink}>Les plantes Médicinales</p>
          </Button>
          <Button
            href="https://www.maine-et-loire.fr/actualites/toutes-les-actualites/news/les-mauvaises-herbes-ca-nexiste-pas"
            target="_blank"
            color="transparent"
          >
          <p className={classes.NavLink}>Article sur La mauvaise Herbe</p>
          </Button>
          <Button
            href="https://fetedelanature.com/"
            target="_blank"
            color="transparent"
          >
          <p className={classes.NavLink}>Fête de la nature</p>
          </Button>
        </div>
        <div className={classes.right}>
          <div className={classes.espace}>
          <Button
            justIcon
            href="https://www.facebook.com/lamauvaiseherbe49"
            target="_blank"
            color="transparent"
          >
            <i
              className={classes.socialIcons + " fab fa-facebook"}
            />
          </Button>
          </div>
          <Button target="_blank" color="transparent" className={classes.mention}>
            <Link className={classes.NavLink} to="/mentions">
              Mentions légales
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
