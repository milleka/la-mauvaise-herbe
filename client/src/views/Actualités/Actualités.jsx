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


import ActualitésStyle from "../../assets/jss/material-kit-react/views/actualitésStyle.jsx";

class Actualités extends React.Component {
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
                      <div className={classes.titles}>Actualités</div>
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.title}>
                <h2>Informations</h2>
            </div>
            <div className={classes.ligne}>
                <div className={classes.img}>
                <div className={classes.taille}>
                <div class="fb-page" data-href="https://www.facebook.com/lamauvaiseherbe49" data-tabs="timeline" 
                    width="600px" data-height="" data-small-header="false" data-adapt-container-width="true" 
                    data-hide-cover="false" data-show-facepile="false">
                    <blockquote cite="https://www.facebook.com/lamauvaiseherbe49" class="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/lamauvaiseherbe49">La Mauvaise Herbe</a>
                    </blockquote>
                </div>
                </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
        <Footer />
      </div>
    );
  }
}

Actualités.propTypes = {
  classes: PropTypes.object
};

export default withStyles(ActualitésStyle)(Actualités);