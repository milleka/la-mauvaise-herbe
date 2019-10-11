import React, { useState, useEffect } from "react";
import firebase from '../../../server/firebase/firebase';

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
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ))
    )
}
  
  export default (SectionLactivite);
  