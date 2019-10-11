import React from "react";

import eventStyle from "../../assets/jss/material-kit-react/views/componentsSections/eventStyle.jsx";

import LocationOn from "@material-ui/icons/LocationOn";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import { storage, firestore } from '../../../server/firebase/firebase';


class fiveEvent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          url:'',
          infosevent5: '',
        }
    }

//lecture image
    getPath = async () => {
        const images = await storage.ref('evenements').child('event5').listAll();
        const res = images;
        return res.items[0].location.path ;
      }
    
    getUrl = async (path) => {
        storage.ref().child(`${path}`).getDownloadURL().then((url) => {
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

//lecture texte
UNSAFE_componentWillMount () {
  const event5 = firestore.collection('evenements').doc('event5');

  event5.get().then((doc) => {
    if (doc.exists) {
      return this.setState({infosevent5:doc.data() })
    } else {
      console("no sush document!");
    }
  }).catch(function(error) {
    console.log("error getting document:", error);
  });

}

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.img}>
                <img
                    src={this.state.url}
                    alt="Third slide"
                    className={classes.image}
                />
                </div>
                <div className={classes.info}>
                <h3 className={classes.h3}>{this.state.infosevent5.titre}</h3>
                    <h4 className={classes.h4}>
                    <LocationOn className="slick-icons" />
                    {this.state.infosevent5.lieu}
                    </h4>
                    <p className={classes.p}><span className={classes.gras}>Tarif:</span> {this.state.infosevent5.tarif}</p>
                    <p className={classes.p}><span className={classes.gras}>Date:</span> {this.state.infosevent5.date} <span className={classes.gras}>Heure:</span> {this.state.infosevent5.time}</p>
                    <p className={classes.p}><span className={classes.gras}>Durée:</span> {this.state.infosevent5.duree}</p>
                    <p className={classes.info}>(la date est présentée sous la forme année-mois-jour)</p>
                </div>
            </div>
        );
    }
}

fiveEvent.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(eventStyle)(fiveEvent);