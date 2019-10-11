import React from "react";

import Head from "../head2/head2.jsx";

import styles from "../../../assets/jss/mes-activites/mesactivitesStyle.module.css";

import Visuactivites from "./visuActivites.jsx";

import {storage, firestore} from '../../../firebase/firebase.js';


class mesactivites extends React.Component {
  constructor() {
    super();
    this.ref = firestore.collection('activités');
    this.state = {
      image: null,
      url:'',
      titre: '',
      phraseAccr: '',
      description: '',
      duree: '',
    };
    
    this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this.handleUpload.bind(this);
  }


  //envoi texte
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

  //envoie image 
  handleChange = e => {
    if(e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({image}));
    }
}

  handleUpload = () => {
    const {image} = this.state;
    console.log(image);
    const uploadTask = storage.ref(`activites/${image.name}`).put(image);
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
        storage.ref('activites').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
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
            <label htmlFor="image">Image</label>
              <input type="file"
                className={styles.imginput}
                id="img" name="img"
                accept="image/png, image/jpeg" onChange={this.handleChange} required/> 
              <img src={this.state.url || 'http://via.placeholder.com/400x200'} alt="activités"/>
              <button onClick={this.handleUpload}>Ajouter</button>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="titre">Titre</label>
                <input type="text" id="titre" name="titre" value={titre} onChange={this.onChange} required />
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
        <Visuactivites/>
      </div>
    );
  }
}

export default mesactivites;