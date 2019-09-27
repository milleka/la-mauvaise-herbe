import React from "react";

import styles from "../../../../assets/jss/info-generale/component/modifkezakoStyle.module.css";

//import fond from "../../../../assets/img/les_plantes_medicinales.jpg";
import {storage, firestore} from '../../../../firebase/firebase.js';


class modifkezako extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            titreQui: '',
            qui: '',
            titrePourquoi: '',
            pourquoi: '',
            titreQuel: '',
            quel: '',
        }


        this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        console.log(image);
        const uploadTask = storage.ref(`imageKezako/${image.name}`).put(image);
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
            storage.ref('imageKezako').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }

//envoyer et afficher le texte qui, pourquoi , quel

//qui suis je
    //titre

    handleChangeTitreQui = e => {
        e.preventDefault();
        let titreQui = e.target.value
        this.setState(() => ({titreQui}));
    }

    //texte

    handleChangeQui = e => {
        e.preventDefault();
        let qui = e.target.value
        this.setState(() => ({qui}));
    }

    //envoie vers la bdd 
    

    async writeQui(e) {
        e.preventDefault();

        var changeText = firestore.collection('kezako').doc('qui');
        console.log(changeText)
        let texte = this.state.qui;
        let titre = this.state.titreQui;

        try {
            await changeText.update({
                texte,
                titre
            });
        }
        catch (error) {
            console.error('error updating', error);
        }
    }

//pourquoi la mauvaise herbe
    //titre
    handleChangeTitrePourquoi = e => {
            e.preventDefault();
            let titrePourquoi = e.target.value
            this.setState(() => ({titrePourquoi}));
    }

    //texte

    handleChangePourquoi = e => {
        e.preventDefault();
        let pourquoi = e.target.value
        this.setState(() => ({pourquoi}));
    }

    //envoie vers la bdd 

    async writePourquoi(e) {
        e.preventDefault();

        var changeText = firestore.collection('kezako').doc('pourquoi');
        console.log(changeText)
        let texte = this.state.pourquoi;
        let titre = this.state.titrePourquoi;

        try {
            await changeText.update({
                texte,
                titre
            });
        }
        catch (error) {
            console.error('error updating', error);
        }
    }

//sur quel principe
    //titre

    handleChangeTitreQuel = e => {
        e.preventDefault();
        let titreQuel = e.target.value
        this.setState(() => ({titreQuel}));
    }

    //texte

    handleChangeQuel = e => {
        e.preventDefault();
        let quel = e.target.value
        this.setState(() => ({quel}));
    }

    //envoie vers la bdd 

    async writeQuel(e) {
        e.preventDefault();

        var changeText = firestore.collection('kezako').doc('quel');
        console.log(changeText)
        let texte = this.state.quel;
        let titre = this.state.titreQuel;

        try {
            await changeText.update({
                texte,
                titre
            });
        }
        catch (error) {
            console.error('error updating', error);
        }
    }


  render() {
    return (
        <div className={styles.kezako}>
            <p>Modifier l'image:</p>
            <input type="file"
                onChange={this.handleChange}
                id="image" name="image"
                accept="image/png, image/jpeg" required/>
                <button onClick={this.handleUpload}>Modifier</button>
                <img src={this.state.url || 'http://via.placeholder.com/400x500'} alt="kezako"/>
            <p>Modification qui suis je :</p>
            <form onSubmit={e => this.writeQui(e)}>
                <label htmlFor="titre">titre</label>
                <input type="text" id="titre" name="titre" required onChange={this.handleChangeTitreQui} />
                <textarea id="qui" name="qui"
                rows="10" cols="40" onChange={this.handleChangeQui} required></textarea>
                <button >Modifier</button>
            </form>
            <p>Modification du pourquoi :</p>
            <form onSubmit={e => this.writePourquoi(e)}>
                <label htmlFor="titre">titre</label>
                <input type="text" id="titre" name="titre" required onChange={this.handleChangeTitrePourquoi} />
                <textarea id="pourquoi" name="pourquoi"
                rows="10" cols="40" onChange={this.handleChangePourquoi} required></textarea>
                <button>Modifier</button>
            </form>
            <p>Modification sur quel principe :</p>
            <form onSubmit={e => this.writeQuel(e)}>
                <label htmlFor="titre">titre</label>
                <input type="text" id="titre" name="titre" required onChange={this.handleChangeTitreQuel} />
                <textarea id="quel" name="quel"
                rows="10" cols="40" onChange={this.handleChangeQuel} required></textarea>
                <button>Modifier</button>
            </form>
        </div>
    );
  }
}

export default modifkezako;