import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/Person";
import Personne from '@material-ui/icons/PersonOutline';
import Email from "@material-ui/icons/Email";
import CardFooter from "components/Card/CardFooter.jsx"

import contactStyle from "assets/jss/material-kit-react/views/componentsSections/contactStyle.jsx";

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.active}>
        <div className={classes.container}>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <form className={classes.form}>
                <div className={classes.title}>
                  <p className={classes.divider}>Nous contacter</p>
                </div>
                  <CardBody>
                    <p className={classes.email}>Email: lamauvaiseherbe49@gmail.com</p>
                    <CustomInput
                      labelText="Nom"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Prénom"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Personne className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                        labelText="Message"
                        id="textarea-input"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            multiline: true,
                            rows: 5
                        }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Envoyer
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
          </div>
    </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object
};

export default withStyles(contactStyle)(Contact);