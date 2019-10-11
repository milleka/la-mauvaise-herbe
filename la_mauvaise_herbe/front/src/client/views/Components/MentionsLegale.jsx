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
//import Parallax from "../../components/Parallax/Parallax.jsx";
import HeaderLinks2 from "../../components/Header/HeaderLinks2.jsx";

import logo from '../../assets/img/lamauvaiseherbe.png';



import mentionsStyle from "../../assets/jss/material-kit-react/views/pageAccueilStyle.jsx";
import Parallax from "client/components/Parallax/Parallax.jsx";




class Mentions extends React.Component {
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand={logo}
          rightLinks={<HeaderLinks2 />}
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
                  <h1 className={classes.titles}>
                      Mentions légales
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
          </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <br/>
          <p className={classes.debut}>En vigueur au 11/10/2019</p>
          <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
            numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site lamauvaiseherbe.lescadev.fr les présentes
            mentions légales.
            La connexion et la navigation sur le site (indiquer le nom du site) par l’Utilisateur implique acceptation intégrale et sans réserve
            des présentes mentions légales.
            Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».</p>
         <h3>ARTICLE 1 : L’ÉDITEUR</h3>
         <p>L'édition du site lamauvaiseherbe.lescadev.fr est assurée par la Société sarl lamauvaiseherbe au capital de ________________
            euros, immatriculée au RCS de ________________ sous le numéro ________________ dont le siège social est situé au ________________,
            numéro de téléphone ________________, adresse e-mail : lamauvaiseherbe49@gmail.com.
            N° de TVA intracommunautaire : ________________
            Le Directeur de la publication est Chassaing camille</p>
         <h3>ARTICLE 2 : L’HÉBERGEUR</h3>
         <p>L'hébergeur du site lamauvaiseherbe.lescadev.fr est la Société o2switch, dont le siège social est situé au ________________ , avec
            le numéro de téléphone : ________________.</p>
         <h3>ARTICLE 3 : ACCÈS AU SITE</h3>
         <p>Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant
            découlant d’une nécessité de maintenance.
            En cas de modification, interruption ou suspension des services le site lamauvaiseherbe.lescadev.fr ne saurait être tenu
            responsable.</p>
         <h3>ARTICLE 4 : COLLECTE DES DONNÉES</h3>
         <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte
            aucune donnée concernant les utilisateurs.</p>
         <h3>ARTICLE 5 : COOKIES</h3>
         <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de
            navigation.
            En naviguant sur le site, il les accepte.
            Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la
            1 /2
            navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au
            sein de son logiciel de navigation.</p>
         <h3>ARTICLE 6 : PROPRIÉTÉ INTELLECTUELLE</h3>
         <p className={classes.fin}>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du sitelamauvaiseherbe.lescadev.fr,
            sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues
            par le Code de la propriété intellectuelle et le Code civil.
            Réalisé sur https://www.legalplace.fr</p>
            <br/>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Mentions.propTypes = {
  classes: PropTypes.object
};

export default withStyles(mentionsStyle)(Mentions);