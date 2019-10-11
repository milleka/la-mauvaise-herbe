import React, { useState, useEffect } from "react";
import firebase from '../../../server/firebase/firebase';


import Reservation from './SectionReservationActivite.jsx';


import styles from "../../assets/jss/material-kit-react/views/componentsSections/lactiviteStyle.module.css";


const useActivitesPhoto = () => {

    const[photo, setPhoto] = useState([]);

    useEffect(() => {
        const storageRef = firebase.storage().ref("activites");
        storageRef.listAll().then((value) => {
            displayImage(value.items);
        });
    }, [])

    const displayImage = (test) => {
        let phototab = [];
        test.forEach((image, index) => {
            image.getDownloadURL().then((url) => {
                phototab.push(url)
                if(index === test.length-1) {
                    setPhoto(phototab);
                }
            }).catch(function(error) {
            })
        });
    }

    return photo;
}

const useActivites = () => {
    const [ activites, setActivites ] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('activités')
            .onSnapshot((snapshot) => {
                const newActivites = snapshot.docs.map((doc)=> ({
                    id : doc.id,
                    ...doc.data()
                }))

                setActivites(newActivites);
            })
        
    }, [])
    return activites
}

const SectionLactivite = () => {

    const activites = useActivites();
    const activitesPhoto = useActivitesPhoto();

    return (
            activites.map((activite,i) => (
                <div key={activite.id} className={styles.container}>
                <div className={styles.bloc}>
                    <h3 className={styles.title}>{activite.titre}</h3>
                    <div className={styles.ligne}>
                        <img className={styles.image} src={activitesPhoto[i]} alt="plantes médicinales sauvages" />
                        <div className={styles.colonne}>
                            <h4 className={styles.titre}>Activites:</h4>
                            <p><strong>{activite.phraseAccr}</strong>
                            {activite.description} 
                            </p>
                            <div className={styles.ligne2}>
                                <div className={styles.left}>
                                    <div className={styles.duree}>
                                        <h5 className={styles.bold}>Durée:</h5>
                                        <p className={styles.valeur}>{activite.duree}</p>
                                    </div>                                   
                                </div>
                                <div className={styles.right}>
                                    <p>Vous voulez poser une question ?</p>
                                    <Reservation className={styles.bouton}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ))
    )
}

/*class SectionLactivite extends React.Component {
    oneActivity= () => {
        const { classes } = this.props;
        var anim = []
        for (let i = 0; i < 3; i++) {
            anim.push(
                <div key={anim} className={classes.container}>
                <div className={classes.bloc}>
                    <h3 className={classes.title}>Plantes médicinales sauvages</h3>
                    <div className={classes.ligne}>
                        <img className={classes.image} src={Photo} alt="Cueillette de plantes médicinales sauvages" />
                        <div className={classes.colonne}>
                            <h4 className={classes.titre}>Activites:</h4>
                            <p><strong>Cueillette de plantes médicinales sauvages. </strong>
                            Partons à la découverte de quelques plantes médicinales et apprenons
                             à les cueillir. Je vous conterai leurs histoires, passées ou présentes 
                             et leurs usages, reconnus ou dépassés. 
                            </p>
                            <div className={classes.ligne2}>
                                <div className={classes.left}>
                                    <div className={classes.duree}>
                                        <h5 className={classes.bold}>Durée:</h5>
                                        <p className={classes.valeur}>3 h 00 </p>
                                    </div>                                   
                                </div>
                                <div className={classes.right}>
                                    <p>Vous voulez poser une question ?</p>
                                    <Reservation className={classes.bouton}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
        }
        return anim
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>                
                    {this.oneActivity()}
            </div>
        );
    }
}*/
  
  export default (SectionLactivite);