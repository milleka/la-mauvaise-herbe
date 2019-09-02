import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";


import lactuStyle from "../../assets/jss/material-kit-react/views/componentsSections/lactuStyle.jsx";
import Photo from "../../assets/img/circee.jpg";


class SectionActu extends React.Component {
    oneActuality= () => {
        const { classes } = this.props;
        var anim = []
        for (let i = 0; i < 6; i++) {
            anim.push(
                <div className={classes.contenu}>
                <a className={classes.a} href="http://www.sauvagesdupoitou.com/81/635?fbclid=IwAR0aBfTJ8lNtVtFTv2OPqGc4A82HqB1pK-dH1w3z-3TJWftik2hGmp3yu_Q" target="_blank" rel="noopener noreferrer" alt="CIRCÉE DE PARIS: TITI LA PETITE SORCIÈRE">
                    <h3 className={classes.title}>Circée de Paris</h3>
                    <p className={classes.text}>20 août, 11h52</p>
                    <div className={classes.ligne}>
                        <img className={classes.image} src={Photo} alt="Circée de paris, plante médicinale" />
                            <p className={classes.texte}>Les sauvages du Poitou, encore eux, sur la discrète Circée de Paris, Circea lutetiana ou connue comme l'herbe aux sorcières...</p>
                    </div>
                </a>
                </div>
            )
        }
        return anim
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>                
                    {this.oneActuality()}
            </div>
        );
    }
}

SectionActu.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(lactuStyle)(SectionActu);