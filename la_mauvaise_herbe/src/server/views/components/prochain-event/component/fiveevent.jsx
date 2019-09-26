import React from "react";

import styles from "../../../../assets/jss/prochainevent/prochaineventStyle.module.css";

import {storage} from '../../../../firebase/firebase.js';


class fiveevent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgevent5: null,
            url: '',
        }
        this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const imgevent5 = e.target.files[0];
            this.setState(() => ({imgevent5}));
        }
    }

    handleUpload = () => {
        const {imgevent5} = this.state;
        console.log(imgevent5);
        const uploadTask = storage.ref(`evenements/event5/${imgevent5.name}`).put(imgevent5);
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
            storage.ref('evenements/event5/').child(imgevent5.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }

  render() {
    return (
      <div className={styles.event}>
          <div className={styles.col1}>
            <p>Choix de la photo:</p>
                <input type="file"
                    onChange={this.handleChange}
                    id="imgevent5" name="imgevent5"
                    accept="image/png, image/jpeg" required/>
                <button onClick={this.handleUpload}>Ajouter</button>
            <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="fond d'écran"/>
          </div>
          <div className={styles.col2}>
            <form>
                <fieldset>
                    <label htmlFor="titre">Titre</label>
                    <input type="text" id="titre" name="titre" required/>
                </fieldset>
                <fieldset>
                    <label htmlFor="lieu">Lieu</label>
                    <input type="text" id="lieu" name="lieu" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="tarif">Tarif</label>
                    <input type="text" id="tarif" name="tarif" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="date-heure">Date et Heure</label>
                    <input type="datetime-local" id="date-heure" name="date-heure" required/>
                </fieldset>
                <button>valider</button>
            </form>
          </div>
      </div>
    );
  }
}

export default fiveevent;