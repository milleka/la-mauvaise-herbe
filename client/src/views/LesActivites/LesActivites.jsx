import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
//import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import logo from 'assets/img/lamauvaiseherbe.png';

import lesActivitesStyle from "../../assets/jss/material-kit-react/views/lesActivitesStyle.jsx";

import Lactivite from "./SectionLactivite.jsx";

class LesActivites extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand={logo}
          rightLinks={<HeaderLinks />}
          absolute
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/animations.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.tit}>
                      <div className={classes.titles}>Activités</div>
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.title}>
                <h2>Principe</h2>
            </div>
            <p className={classes.texte}><strong>Réserver</strong> une activité , une date, et <strong>Découvrer</strong> les plantes médicinales qui vous entourent !</p>
            <Lactivite />
        </div>
        <Footer />
      </div>
    );
  }
}

LesActivites.propTypes = {
  classes: PropTypes.object
};

export default withStyles(lesActivitesStyle)(LesActivites);