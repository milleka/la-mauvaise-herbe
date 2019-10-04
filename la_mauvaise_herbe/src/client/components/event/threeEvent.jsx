import React from "react";

import eventStyle from "../../assets/jss/material-kit-react/views/componentsSections/eventStyle.jsx";

import Sectionreservation from "../../views/Components/Sections/SectionReservationEvents.jsx";
import LocationOn from "@material-ui/icons/LocationOn";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import { storage, firestore } from '../../../server/firebase/firebase';


class threeEvent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          url:'',
          infosevent3: '',
        }
    }

//lecture image
    getPath = async () => {
        const images = await storage.ref('evenements').child('event3').listAll();
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
  const event3 = firestore.collection('evenements').doc('event3');

  event3.get().then((doc) => {
    if (doc.exists) {
      return this.setState({infosevent3:doc.data() })
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
                <h3 className={classes.h3}>{this.state.infosevent3.titre}</h3>
                    <h4 className={classes.h4}>
                    <LocationOn className="slick-icons" />
                    {this.state.infosevent3.lieu}
                    </h4>
                    <p className={classes.p}><span className={classes.gras}>Tarif:</span> {this.state.infosevent3.tarif}</p>
                    <p className={classes.p}><span className={classes.gras}>Date:</span> {this.state.infosevent3.date} <span className={classes.gras}>Heure:</span> {this.state.infosevent3.time}</p>
                    <p className={classes.p}><span className={classes.gras}>Durée:</span> {this.state.infosevent3.duree}</p>
                    <p className={classes.info}>(la date est présentée sous la forme année-mois-jour)</p>
                    <Sectionreservation />
                </div>
            </div>
        );
    }
}

threeEvent.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(eventStyle)(threeEvent);
