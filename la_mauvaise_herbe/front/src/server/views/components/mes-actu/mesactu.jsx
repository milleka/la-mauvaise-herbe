import React from "react";

import Head from "../head2/head2.jsx";

import styles from "../../../assets/jss/mes-actu/mesactuStyle.module.css";

import Visuactu from "./visuActu.jsx";

import {storage, firestore} from '../../../firebase/firebase.js';


class mesactu extends React.Component {
  constructor() {
    super();
    this.ref = firestore.collection('actualite');
    this.state = {
      image: null,
      urlimg:'',
      url:'',
      titre: '',
      description: '',
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
    const {titre, description, url} = this.state;
    
      
    this.ref.add({
      titre,
      url,
      description,
    }).then((docRef) => {
      this.setState({
        titre: '',
        url:'',
        description: '',
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
    const uploadTask = storage.ref(`actualite/${image.name}`).put(image);
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
        storage.ref('actualite').child(image.name).getDownloadURL().then(urlimg => {
            console.log(urlimg);
            this.setState({urlimg});
        })
    });
}



  render() {
    const {titre, url, description} = this.state
    return (
      <div className={styles.activites}>
          <header>
          <div className={styles.head1}>
            <h1>Mes actualités</h1>
          </div>
          <Head/>
        </header>
        <div className={styles.ajouter}>
          <div className={styles.ajout}>
            <h3>Ajouter une actualité</h3>
            <label htmlFor="image">Image</label>
              <input type="file"
                className={styles.imginput}
                id="img" name="img"
                accept="image/png, image/jpeg" onChange={this.handleChange} required/> 
              <img src={this.state.urlimg || 'http://via.placeholder.com/400x200'} alt="activités"/>
              <button onClick={this.handleUpload}>Ajouter</button>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="titre">Titre</label>
                <input type="text" id="titre" name="titre" value={titre} onChange={this.onChange} required />
                <label htmlFor="url">URL</label>
                <input type="text" id="url" name="url" value={url} onChange={this.onChange} required />
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={description} onChange={this.onChange} required ></textarea>
                <button>Ajouter</button>
            </form>
          </div>
        </div>
        <Visuactu/>
      </div>
    );
  }
}

export default mesactu;