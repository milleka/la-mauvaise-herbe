import React from "react";

import styles from "../../../../assets/jss/prochainevent/prochaineventStyle.module.css";

import {storage, firestore} from '../../../../firebase/firebase.js';


class firstevent extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firestore.collection('evenements').doc('event1');
        this.state = {
            imgevent1: null,
            url: '',
            titre: '',
            lieu: '',
            tarif: '',
            date: '',
            duree: '',
            time: '',
        }

        this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this.handleUpload.bind(this);
    }

//envoie image 
    handleChange = e => {
        if(e.target.files[0]) {
            const imgevent1 = e.target.files[0];
            this.setState(() => ({imgevent1}));
        }
    }

    handleUpload = () => {
        const {imgevent1} = this.state;
        console.log(imgevent1);
        const uploadTask = storage.ref(`evenements/event1/${imgevent1.name}`).put(imgevent1);
        uploadTask.on('state_changed', 
        (snapshot) => {
            // progress function...
        },
        (error) => {
            //error function ...
            console.log(error);
        },
        () => {
            //complete function...
            storage.ref('evenements/event1/').child(imgevent1.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }

//envoie texte
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

  onSubmit = (e) => {
    e.preventDefault();
    const {titre, lieu, tarif, date, time, duree} = this.state;
    
      
    this.ref.update({
      titre,
      lieu,
      duree,
      tarif,
      date,
      time

    }).then((docRef) => {
      this.setState({
        titre: '',
        lieu: '',
        duree: '',
        date: '',
        time: '',
        tarif: '',
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    })

  }

  render() {
    const {titre, lieu, date, time, tarif, duree} = this.state
    return (
      <div className={styles.event}>
          <div className={styles.col1}>
            <p>Choix de la photo:</p>
                <input type="file"
                    onChange={this.handleChange}
                    id="imgevent1" name="imgevent1"
                    accept="image/png, image/jpeg" required/>
                <button onClick={this.handleUpload}>Ajouter</button>
            <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="fond d'écran"/>
          </div>
          <div className={styles.col2}>
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <label htmlFor="titre">Titre</label>
                    <input type="text" id="titre" name="titre" value={titre} onChange={this.onChange} required/>
                </fieldset>
                <fieldset>
                    <label htmlFor="lieu">Lieu</label>
                    <input type="text" id="lieu" name="lieu" value={lieu} onChange={this.onChange} required />
                </fieldset>
                <fieldset>
                    <label htmlFor="tarif">Tarif</label>
                    <input type="text" id="tarif" name="tarif" value={tarif} onChange={this.onChange} required />
                </fieldset>
                <fieldset>
                    <label htmlFor="duree">Durée</label>
                    <input type="text" id="duree" name="duree" value={duree} onChange={this.onChange} required />
                </fieldset>
                <fieldset>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" value={date} onChange={this.onChange} required/>
                </fieldset>
                <fieldset>
                    <label htmlFor="date">Heure</label>
                    <input type="time" id="time" name="time" value={time} onChange={this.onChange} required/>
                </fieldset>
                <button>valider</button>
            </form>
          </div>
      </div>
    );
  }
}

export default firstevent;