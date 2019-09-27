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

        this.state = {
          url:'',
          infosQui: '',
          infosPourquoi: '',
          infosQuel: '',
        }
      }


      UNSAFE_componentWillMount () {
        const refQui = firestore.collection('kezako').doc('qui');
        const refPourquoi = firestore.collection('kezako').doc('pourquoi');
        const refQuel = firestore.collection('kezako').doc('quel');


        //infos qui ?
        refQui.get().then((doc) => {
          if (doc.exists) {
            return this.setState({infosQui:doc.data() })
          } else {
            console("no sush document!");
          }
        }).catch(function(error) {
          console.log("error getting document:", error);
        });

        //infos pourquoi ?
        refPourquoi.get().then((doc) => {
          if (doc.exists) {
            return this.setState({infosPourquoi:doc.data() })
          } else {
            console("no sush document!");
          }
        }).catch(function(error) {
          console.log("error getting document:", error);
        });

        //infos quel ?
        refQuel.get().then((doc) => {
          if (doc.exists) {
            return this.setState({infosQuel:doc.data() })
          } else {
            console("no sush document!");
          }
        }).catch(function(error) {
          console.log("error getting document:", error);
        });
      }

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
                            <h3>{this.state.infosQui.titre}</h3>
                        </div>
                        <p className={classes.text}>
                            {this.state.infosQui.texte}
                        </p>
                        <div className={classes.titre}>
                            <Spa className={classes.signe}/>
                            <h3>{this.state.infosPourquoi.titre}</h3>   
                        </div>
                        <p className={classes.text}>
                        {this.state.infosPourquoi.texte}
                        </p>
                        <div className={classes.titre}>
                            <Nature className={classes.signe}/>
                            <h3>{this.state.infosQuel.titre}</h3>
                        </div>
                        <p className={classes.text}>
                        {this.state.infosQuel.texte}
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