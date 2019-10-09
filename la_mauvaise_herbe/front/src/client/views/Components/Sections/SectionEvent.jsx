import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import eventStyle from "../../../assets/jss/material-kit-react/views/componentsSections/eventStyle.jsx";
import Carousel from "react-slick";

import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";

import OneEvent from '../../../components/event/oneEvent.jsx';
import TwoEvent from '../../../components/event/twoEvent.jsx';
import ThreeEvent from '../../../components/event/threeEvent.jsx';
import FourEvent from '../../../components/event/fourEvent.jsx';
import FiveEvent from '../../../components/event/fiveEvent.jsx';


class SectionEvent extends React.Component {
    render() {
        const { classes } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <div className={classes.container} id="evenements">
                <div className={classes.title}>
                    <h2>Événements à venir</h2>
                </div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                        <Card carousel>
                            <Carousel {...settings}>
                                <OneEvent/>
                                <TwoEvent/>
                                <ThreeEvent/>
                                <FourEvent/>
                                <FiveEvent/>
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

SectionEvent.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(eventStyle)(SectionEvent);