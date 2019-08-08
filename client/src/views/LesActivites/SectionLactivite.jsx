import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";


import lactiviteStyle from "assets/jss/material-kit-react/views/componentsSections/lactiviteStyle.jsx";



class SectionLactivite extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>                
                <div className={classes.title}>
                    <h2>Cueillettes</h2>
                </div>
                <div className={classes.lactivite}>
                
                </div>
            </div>
        );
    }
}

SectionLactivite.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(lactiviteStyle)(SectionLactivite);