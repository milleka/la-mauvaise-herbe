import React from "react";

import Head from "../head2/head2.jsx";

import styles from "../../../assets/jss/mes-activites/mesactivitesStyle.module.css";

import {/*storage,*/ firestore} from '../../../firebase/firebase.js';


class mesactivites extends React.Component {
  constructor() {
    super();
    this.ref = firestore.collection('activités');
    this.state = {
      image: null,
      url: '',
      titre: '',
      phraseAccr: '',
      description: '',
      duree: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {titre, phraseAccr, description, duree} = this.state;

    this.ref.add({
      titre,
      phraseAccr,
      description,
      duree
    }).then((docRef) => {
      this.setState({
        titre: '',
        phraseAccr: '',
        description: '',
        duree: '',
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    })
  }
  render() {
    const {titre, phraseAccr, description, duree} = this.state
    return (
      <div className={styles.activites}>
          <header>
          <div className={styles.head1}>
            <h1>Mes activités</h1>
          </div>
          <Head/>
        </header>
        <div className={styles.ajouter}>
          <div className={styles.ajout}>
            <h3>Ajouter une activité</h3>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="titre">Titre</label>
                <input type="text" id="titre" name="titre" value={titre} onChange={this.onChange} required />
                {/*<label htmlFor="image">Image</label>
                <input type="file"
                id="image" name="image"
                accept="image/png, image/jpeg" onChange={this.onChange} required/>
    <img src={'http://via.placeholder.com/400x200'} alt="activités"/>*/}
                <label htmlFor="phraseAccr">Phrase d'accroche</label>
                <input type="text" id="phraseAccr" name="phraseAccr" value={phraseAccr} onChange={this.onChange} required />
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={description} onChange={this.onChange} required ></textarea>
                <label htmlFor="duree">Durée</label>
                <input type="text" id="duree" name="duree" value={duree} onChange={this.onChange} required />
                <button>Ajouter</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default mesactivites;