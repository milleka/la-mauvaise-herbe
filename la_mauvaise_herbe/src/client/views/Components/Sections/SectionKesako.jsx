import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import Filtervintage from "@material-ui/icons/FilterVintage";
import Spa from "@material-ui/icons/Spa";
import Nature from "@material-ui/icons/Nature";

import kesakoStyle from "../../../assets/jss/material-kit-react/views/componentsSections/kesakoStyle.jsx";
import {store} from '../../../../server/firebase/firebase.js';



class SectionKesako extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          url:'',
        }
      }

    //lire image kezako bdd firebase
    
      getPath = async () => {
        const images = await store.child('imageKezako').listAll();
        const res = images;
        return res.items[0].location.path ;
      }
    
    getUrl = async (path) => {
        console.log(this.state.url)
        store.child(`${path}`).getDownloadURL().then((url) => {
          console.log(this.state.url)
          let imgUrl = url
        return this.setState({url: imgUrl})
      }).catch((error) => {
        console.log(error);
      })
    }
    
    componentDidMount= async () => {
      let path = await this.getPath();
      console.log(path)
      this.getUrl(path);
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Kesako</h2>
                </div>
                <div className={classes.kesako}>
                    <img className={classes.image} src={this.state.url} alt="Matthieu chassaing, animateur des animations la mauvaise herbe"/>
                    <div className={classes.question}>
                        <div className={classes.titre}>
                            <Filtervintage className={classes.signe}/>
                            <h3>Qui suis-je ?</h3>
                        </div>
                        <p className={classes.text}>
                            Père castor, professeur tournesol, Jammy.
                            Des surnoms qui m'ont été donnés lors des années précédentes.
                            Tout ça parce que j'aime raconter des histoires, facile.
                            Des histoires de géologie, de cailloux, d'oiseaux, de plantes et d'arbres.
                            De paysage et de rivières, de montagnes et de sable.
                        </p>
                        <div className={classes.titre}>
                            <Spa className={classes.signe}/>
                            <h3>Pourquoi la mauvaise herbe ?</h3>   
                        </div>
                        <p className={classes.text}>
                            Parce que cette indisciplinée, qui pousse où elle le souhaite, quand elle le
                            décide, à travers champs et à travers les décombres, a suivi l'homme toute
                            sa vie. Pour se nourrir, se vêtir, mais aussi se soigner ou jouer.
                            Elle se trouve hors champs, loin des chemins balisés. Comme mes
                            animations... Cette herbe est malmenée. Nous allons lui redonner ses
                            lettres de noblesse.
                        </p>
                        <div className={classes.titre}>
                            <Nature className={classes.signe}/>
                            <h3>Sur quel principe ?</h3>
                        </div>
                        <p className={classes.text}>
                            Je propose des balades accompagnées sur les plantes sauvages
                            médicinales, sur la botanique ou le paysage mais également tout un tas
                            d'autres activités qui raviront, j’espère, le plus grand nombre.
                            <strong>Bonne visite et à bientôt lors d'une de nos balade...</strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

SectionKesako.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(kesakoStyle)(SectionKesako);