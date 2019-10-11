import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Button from "../../components/CustomButtons/Button.jsx";
import { firestore } from '../../../server/firebase/firebase';

// @material-ui/icons
import { Link } from "react-router-dom";

// @material-ui/core components

import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.jsx";

class Footer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      lien1: '',
      lien2: '',
      lien3: '',
    }
}
  
  UNSAFE_componentWillMount () {
    const lien1 = firestore.collection('liens').doc('lien1');
    const lien2 = firestore.collection('liens').doc('lien2');
    const lien3 = firestore.collection('liens').doc('lien3');
  
    lien1.get().then((doc) => {
      if (doc.exists) {
        return this.setState({lien1:doc.data() })
      } else {
        console("no sush document!");
      }
    }).catch(function(error) {
      console.log("error getting document:", error);
    });

    lien2.get().then((doc) => {
      if (doc.exists) {
        return this.setState({lien2:doc.data() })
      } else {
        console("no sush document!");
      }
    }).catch(function(error) {
      console.log("error getting document:", error);
    });

    lien3.get().then((doc) => {
      if (doc.exists) {
        return this.setState({lien3:doc.data() })
      } else {
        console("no sush document!");
      }
    }).catch(function(error) {
      console.log("error getting document:", error);
    });
  
  }

  render() {
    const { classes, whiteFont } = this.props;
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
            href={this.state.lien1.href}
            target="_blank"
            color="transparent"
          >
          <p className={classes.NavLink}>{this.state.lien1.titre}</p>
          </Button>
          <Button
            href={this.state.lien2.href}
            target="_blank"
            color="transparent"
          >
          <p className={classes.NavLink}>{this.state.lien2.titre}</p>
          </Button>
          <Button
            href={this.state.lien3.href}
            target="_blank"
            color="transparent"
          >
          <p className={classes.NavLink}>{this.state.lien3.titre}</p>
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
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
