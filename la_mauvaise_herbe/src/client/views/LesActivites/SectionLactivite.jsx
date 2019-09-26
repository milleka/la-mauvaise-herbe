import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";


import lactiviteStyle from "../../assets/jss/material-kit-react/views/componentsSections/lactiviteStyle.jsx";
import Photo from "../../assets/img/cueillettes.jpg";
import Reservation from "./SectionReservationActivite.jsx";


class SectionLactivite extends React.Component {
    oneActivity= () => {
        const { classes } = this.props;
        var anim = []
        for (let i = 0; i < 3; i++) {
            anim.push(
                <div key={anim} className={classes.container}>
                <div className={classes.bloc}>
                    <h3 className={classes.title}>Plantes médicinales sauvages</h3>
                    <div className={classes.ligne}>
                        <img className={classes.image} src={Photo} alt="Cueillette de plantes médicinales sauvages" />
                        <div className={classes.colonne}>
                            <h4 className={classes.titre}>Activites:</h4>
                            <p><strong>Cueillette de plantes médicinales sauvages. </strong>
                            Partons à la découverte de quelques plantes médicinales et apprenons
                             à les cueillir. Je vous conterai leurs histoires, passées ou présentes 
                             et leurs usages, reconnus ou dépassés. 
                            </p>
                            <div className={classes.ligne2}>
                                <div className={classes.left}>
                                    <div className={classes.duree}>
                                        <h5 className={classes.bold}>Durée:</h5>
                                        <p className={classes.valeur}>3 h 00 </p>
                                    </div>                                   
                                </div>
                                <div className={classes.right}>
                                    <p>Vous voulez poser une question ?</p>
                                    <Reservation className={classes.bouton}/>
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
                    {this.oneActivity()}
            </div>
        );
    }
}

SectionLactivite.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(lactiviteStyle)(SectionLactivite);