import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";

// sections for this page

import SectionKesako from "./Sections/SectionKesako.jsx";
import SectionEvent from "./Sections/SectionEvent.jsx";
import SectionActivites from "./Sections/SectionActivitesHome.jsx";
import SectionContact from "./Sections/SectionContact.jsx";

import logo from '../../assets/img/lamauvaiseherbe.png';

import pageAccueilStyle from "../../assets/jss/material-kit-react/views/pageAccueilStyle.jsx";


class PageAccueil extends React.Component {
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
        <Parallax image={require("../../assets/img/les_plantes_medicinales.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.tit}>
                      <div className={classes.titles}>La</div>
                      <div className={classes.title}>Mauvaise</div>
                      <div className={classes.titles}>Herbe</div>
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionKesako />
          <SectionEvent/>
          <SectionActivites/>
          <br/>
          <br/>
        </div>
        <SectionContact/>
        <Footer />
      </div>
    );
  }
}

PageAccueil.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pageAccueilStyle)(PageAccueil);