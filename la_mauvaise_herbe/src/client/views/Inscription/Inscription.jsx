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
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
//import Button from "components/CustomButtons/Button.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/Person";
import Personne from '@material-ui/icons/PersonOutline';
import Email from "@material-ui/icons/Email";
import CardBody from "../../components/Card/CardBody.jsx";
import Icon from "@material-ui/core/Icon";
import CardFooter from "../../components/Card/CardFooter.jsx";
import Button from "../../components/CustomButtons/Button.jsx";


import logo from '../../assets/img/lamauvaiseherbe.png';

import InscriptionStyle from "../../assets/jss/material-kit-react/views/inscriptionStyle.jsx";

class Inscription extends React.Component {
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
        <Parallax image={require("../../assets/img/animations.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.tit}>
                      <div className={classes.titles}>Inscription</div>
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.title}>
                <h2>Newsletter</h2>
            </div>
            <p className={classes.accroche}>Vous souhaitez ne plus rien louper sur nos actualités, nouveautés.</p>
            <p className={classes.accrocheGras}>N'hésitez plus ! Inscrivez -vous !</p>
            <CardBody>
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
                labelText="Mot de passe"
                id="pass"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type: "password",
                    endAdornment: (
                    <InputAdornment position="end">
                        <Icon className={classes.inputIconsColor}>
                        lock_utline
                        </Icon>
                    </InputAdornment>
                    ),
                    autoComplete: "off"
                }}
                />
                <CustomInput
                    labelText=" Validation du Mot de passe"
                    id="pass"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        type: "password",
                        endAdornment: (
                        <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                            lock_open
                            </Icon>
                        </InputAdornment>
                        ),
                        autoComplete: "off"
                    }}
                        />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
                <Button simple color="primary" size="lg">
                    Envoyer
                </Button>
            </CardFooter>
            <br/>
            <br/>
        </div>
        <Footer />
      </div>
    );
  }
}

Inscription.propTypes = {
  classes: PropTypes.object
};

export default withStyles(InscriptionStyle)(Inscription);