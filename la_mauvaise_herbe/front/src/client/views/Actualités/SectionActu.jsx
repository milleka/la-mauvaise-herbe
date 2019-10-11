import React, { useState, useEffect } from "react";
import firebase from '../../../server/firebase/firebase';
import classes from "../../assets/jss/material-kit-react/views/componentsSections/lactuStyle.module.css";

const storageRef = firebase.storage().ref("actualite");

const useActualitesPhoto = () => {

    const[photo, setPhoto] = useState([]);

    useEffect(() => {
        storageRef.listAll().then((value) => {
            displayImage(value.items);
        });
    }, [])

    const displayImage = (test) => {
        let phototab = [];
        test.forEach((image, index) => {
            image.getDownloadURL().then(function(url) {
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

const useActualites = () => {
    const [ actualites, setActualites ] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('actualite')
            .onSnapshot((snapshot) => {
                const newActualites = snapshot.docs.map((doc)=> ({
                    id : doc.id,
                    ...doc.data()
                }))

                setActualites(newActualites);
            })
        
    }, [])
    return actualites
}

/*const ActivitesList = () => {
    const [ activites, setActivites ] = useState([])
    const resultActivites = useActivites(activites);
    const activitesPhoto = useActivitesPhoto();
    console.log(resultActivites)

    const removeData = activite => {
        const newState = resultActivites.filter(data => {
        return data.id !== activite.id;
        });
       setActivites(newState);
    }; + insérer un onClick= () => {removeData} dans le bouton supprimer*/

const ActuList = () => {

     const actualites = useActualites ();
     const actualitesPhoto = useActualitesPhoto();

    return (
            actualites.map((actualite,i) => (
                <div key={actualite.id} className={classes.container}>
                <div className={classes.contenu}>
                <a className={classes.a} href={actualite.url} target="_blank" rel="noopener noreferrer" alt="CIRCÉE DE PARIS: TITI LA PETITE SORCIÈRE">
                    <h3 className={classes.title}>{actualite.titre}</h3>
                    <div className={classes.ligne}>
                        <img className={classes.image} src={actualitesPhoto.length ? actualitesPhoto[i] : null} alt="Circée de paris, plante médicinale" />
                            <p className={classes.texte}>{actualite.description}</p>
                    </div>
                </a>
                </div>
                </div>
            ))
    )
}

export default ActuList;