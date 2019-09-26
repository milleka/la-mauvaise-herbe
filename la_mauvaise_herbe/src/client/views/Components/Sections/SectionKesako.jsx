import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import Filtervintage from "@material-ui/icons/FilterVintage";
import Spa from "@material-ui/icons/Spa";
import Nature from "@material-ui/icons/Nature";

import kesakoStyle from "../../../assets/jss/material-kit-react/views/componentsSections/kesakoStyle.jsx";
import {store, firestore} from '../../../../server/firebase/firebase.js';



class SectionKesako extends React.Component {
    constructor(props){
        super(props);

        //this.database = firestore.collection('kezako').doc('qui')

        this.state = {
          url:'',
          titreQui: '',
          qui: '',
        }
      }


      UNSAFE_componentWillMount () {
        const ref = firestore.collection('kezako').doc('qui');

        ref.get().then((doc) => {
          if (doc.exists) {
            console.log("document data:", doc.data());
          } else {
            console("no sush document!");
          }
        }).catch(function(error) {
          console.log("error getting document:", error);
        });
      }
    /*componentDidMount() {
      this.database.on('value', snap => {
        this.setState({
          titreQui: snap.val(this.state.titre),
          qui: snap.val()
        });
      });
    }*/

    

    //lire image kezako bdd firebase
    
      getPath = async () => {
        const images = await store.child('imageKezako').listAll();
        const res = images;
        return res.items[0].location.path ;
      }
    
    getUrl = async (path) => {
        store.child(`${path}`).getDownloadURL().then((url) => {
          let imgUrl = url
        return this.setState({url: imgUrl})
      }).catch((error) => {
        console.log(error);
      })
    }
    
    componentDidMount= async () => {
      let path = await this.getPath();
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
                            <h3>{this.state.titreQui}</h3>
                        </div>
                        <p className={classes.text}>
                            {this.state.qui}
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