import React from "react";

import styles from "../../../../assets/jss/info-generale/component/modiflienStyle.module.css";

import {firestore} from '../../../../firebase/firebase.js';

class modiflien extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titreLien1: '',
            lien1: '',
            titreLien2: '',
            lien2: '',
            titreLien3: '',
            lien3: '',
        }
    }

//lien1
    //titre
        handleChangeTitreLien1 = e => {
        e.preventDefault();
        let titreLien1 = e.target.value
        this.setState(() => ({titreLien1}));
    }

    //texte
        handleChangeLien1 = e => {
        e.preventDefault();
        let lien1 = e.target.value
        this.setState(() => ({lien1}));
    }

    //envoie vers la bdd 

    async writeLien1(e) {
        e.preventDefault();

        var changeText = firestore.collection('liens').doc('lien1');
        console.log(changeText)
        let href = this.state.lien1;
        let titre = this.state.titreLien1;

        try {
            await changeText.update({
                href,
                titre
            });
        }
        catch (error) {
            console.error('error updating', error);
        }
    }    

//lien2
    //titre
        handleChangeTitreLien2 = e => {
        e.preventDefault();
        let titreLien2 = e.target.value
        this.setState(() => ({titreLien2}));
    }

    //texte
        handleChangeLien2 = e => {
        e.preventDefault();
        let lien2 = e.target.value
        this.setState(() => ({lien2}));
    }

    //envoie vers la bdd 

    async writeLien2(e) {
        e.preventDefault();

        var changeText = firestore.collection('liens').doc('lien2');
        console.log(changeText)
        let href = this.state.lien2;
        let titre = this.state.titreLien2;

        try {
            await changeText.update({
                href,
                titre
            });
        }
        catch (error) {
            console.error('error updating', error);
        }
    }   

//lien3
    //titre
        handleChangeTitreLien3 = e => {
        e.preventDefault();
        let titreLien3 = e.target.value
        this.setState(() => ({titreLien3}));
    }

    //texte
        handleChangeLien3 = e => {
        e.preventDefault();
        let lien3 = e.target.value
        this.setState(() => ({lien3}));
    }

    //envoie vers la bdd 

    async writeLien3(e) {
        e.preventDefault();

        var changeText = firestore.collection('liens').doc('lien3');
        console.log(changeText)
        let href = this.state.lien3;
        let titre = this.state.titreLien3;

        try {
            await changeText.update({
                href,
                titre
            });
        }
        catch (error) {
            console.error('error updating', error);
        }
    }

  render() {
    return (
        <div className={styles.lien}>
            <form onSubmit={e => this.writeLien1(e)}>
                <h5>Modifier le lien 1:</h5>
                <p>Titre:</p>
                <input type="text" name="titre" id="titre" placeholder="Les plantes médicinales" onChange={this.handleChangeTitreLien1} required/>
                <p>Lien:</p>
                <input type="url" name="url" id="url"
                    placeholder="https://fr.wikipedia.org/wiki/Plante_m%C3%A9dicinale"
                    pattern="https://.*" size="30"
                    onChange={this.handleChangeLien1}
                required/>
                <button>Modifier</button>
            </form>
            <form onSubmit={e => this.writeLien2(e)}>
                <h5>Modifier le lien 2:</h5>
                <p>Titre:</p>
                <input type="text" name="titre" id="titre" placeholder="Article sur La mauvaise Herbe" onChange={this.handleChangeTitreLien2} required/>
                <p>Lien:</p>
                <input type="url" name="url" id="url"
                    placeholder="https://www.maine-et-loire.fr/actualites/toutes-les-actualites/news/les-mauvaises-herbes-ca-nexiste-pas"
                    pattern="https://.*" size="30"
                    onChange={this.handleChangeLien2}
                required/>
                <button>Modifier</button>
            </form>
            <form onSubmit={e => this.writeLien3(e)}>
                <h5>Modifier le lien 3:</h5>
                <p>Titre:</p>
                <input type="text" name="titre" id="titre" placeholder="Fete de la nature" onChange={this.handleChangeTitreLien3} required/>
                <p>Lien:</p>
                <input type="url" name="url" id="url"
                    placeholder="https://fetedelanature.com/"
                    pattern="https://.*" size="30"
                    onChange={this.handleChangeLien3}
                required/>
                <button>Modifier</button>
            </form>                     
        </div>
    );
  }
}

export default modiflien;