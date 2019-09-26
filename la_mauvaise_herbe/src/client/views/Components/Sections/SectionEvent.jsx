import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import eventStyle from "../../../assets/jss/material-kit-react/views/componentsSections/eventStyle.jsx";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import image1 from "../../../assets/img/etangSaintNicolas.jpg";
import image2 from "../../../assets/img/egliseEusebeGennes.jpg";
import image3 from "../../../assets/img/borddelamaine.jpg";

import Sectionreservation from "./SectionReservationEvents.jsx";



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
                                <div>
                                    <div className={classes.img}>
                                    <img
                                        src={image1}
                                        alt="First slide"
                                        className={classes.image}
                                    />
                                    </div>
                                    <div>
                                        <h3 className={classes.h3}>Découverte de la botanique et des plantes médicinales</h3>
                                        <h4 className={classes.h4}>
                                        <LocationOn className="slick-icons" />
                                        Parc des carrières Angers (étang saint Nicolas)
                                        </h4>
                                        <p className={classes.p}>Samedi 11 mai 9h30-12h30</p>
                                        <Sectionreservation />
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.img}>
                                    <img
                                        src={image2}
                                        alt="Second slide"
                                        className={classes.image}
                                        />
                                    </div>
                                    <div>
                                        <h3 className={classes.h3}>Découverte de la botanique et des plantes médicinales</h3>
                                        <h4 className={classes.h4}>
                                        <LocationOn className="slick-icons" />
                                        Eglise saint Eusèbe Gennes val de Loire
                                        </h4>
                                        <p className={classes.p}>Samedi 8 juin 9h30-12h30</p>
                                        <Sectionreservation />
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.img}>
                                    <img
                                        src={image3}
                                        alt="Third slide"
                                        className={classes.image}
                                    />
                                    </div>
                                    <div className={classes.info}>
                                        <h3 className={classes.h3}>Découverte de la botanique et des plantes médicinales</h3>
                                        <h4 className={classes.h4}>
                                        <LocationOn className="slick-icons" />
                                        bord de la loire Bouchemaine
                                        </h4>
                                        <p className={classes.p}>Samedi 15 aout 9h30-12h30</p>
                                        <Sectionreservation />
                                    </div>
                                </div>
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