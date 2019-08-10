import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";


import lactiviteStyle from "assets/jss/material-kit-react/views/componentsSections/lactiviteStyle.jsx";
import Photo from "assets/img/cueillettes.jpg";
import Reservation from "./SectionReservationActivite.jsx";


class SectionLactivite extends React.Component {
    oneActivity= () => {
        const { classes } = this.props;
        var anim = []
        for (let i = 0; i < 3; i++) {
            anim.push(
                <div className={classes.container}>
                <div className={classes.bloc}>
                    <h3 className={classes.title}>Cueillettes</h3>
                    <div className={classes.ligne}>
                        <img className={classes.image} src={Photo} alt="Cueillette de plantes médicinales sauvages" />
                        <div className={classes.colonne}>
                            <h4 className={classes.titre}>Activites:</h4>
                            <p><strong>Cueillette de plantes médicinales sauvages.</strong>
                                em ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            </p>
                            <div className={classes.ligne2}>
                                <div className={classes.left}>
                                    <div className={classes.tarif}>
                                        <h5 className={classes.bold}>Tarif:</h5>
                                        <p className={classes.valeur}>XX €</p>
                                    </div>
                                    <div className={classes.duree}>
                                        <h5 className={classes.bold}>Durée:</h5>
                                        <p className={classes.valeur}>XX h XX</p>
                                    </div>                                   
                                </div>
                                <div className={classes.right}>
                                    <Reservation/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
        }
        return anim
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>                
                <div className={classes.lactivite}>
                    {this.oneActivity()}
                </div>
            </div>
        );
    }
}

SectionLactivite.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(lactiviteStyle)(SectionLactivite);