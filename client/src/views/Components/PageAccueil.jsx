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
//import SectionBasics from "./Sections/SectionBasics.jsx";
//import SectionNavbars from "./Sections/SectionNavbars.jsx";
//import SectionTabs from "./Sections/SectionTabs.jsx";
//import SectionPills from "./Sections/SectionPills.jsx";
//import SectionNotifications from "./Sections/SectionNotifications.jsx";
//import SectionTypography from "./Sections/SectionTypography.jsx";
//import SectionJavascript from "./Sections/SectionJavascript.jsx";
//import SectionCarousel from "./Sections/SectionCarousel.jsx";
//import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
//import SectionLogin from "./Sections/SectionLogin.jsx";
//import SectionExamples from "./Sections/SectionExamples.jsx";
//import SectionDownload from "./Sections/SectionDownload.jsx";
import SectionKesako from "./Sections/SectionKesako.jsx";

import logo from 'assets/img/lamauvaiseherbe.png';

import pageAccueilStyle from "assets/jss/material-kit-react/views/pageAccueilStyle.jsx";


class PageAccueil extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand={logo}
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/les_plantes_medicinales.jpg")}>
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
          {/*<SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />*/}
          <br/>
          <br/>
        </div>
        <Footer />
      </div>
    );
  }
}

PageAccueil.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pageAccueilStyle)(PageAccueil);