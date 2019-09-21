import React from "react";

import styles from "../../../../assets/jss/info-generale/component/modifkezakoStyle.module.css";

//import fond from "../../../../assets/img/les_plantes_medicinales.jpg";
import {storage/*, data*/} from '../../../../firebase/firebase.js';


class modifkezako extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
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

    
  render() {
    return (
        <div className={styles.kezako}>
            <p>Modifier l'image:</p>
            <form>
            <input type="file"
                onChange={this.handleChange}
                id="image" name="image"
                accept="image/png, image/jpeg"/>
                <button onClick={this.handleUpload}>Modifier</button>
                <img src={this.state.url || 'http://via.placeholder.com/400x500'} alt="kezako"/>
            </form>
            <p>Modification qui suis je :</p>
            <form>
                <textarea id="qui" name="qui"
                rows="10" cols="40"></textarea>
                <button>Modifier</button>
            </form>
            <p>Modification du pourquoi :</p>
            <form>
                <textarea id="pourquoi" name="pourquoi"
                rows="10" cols="40"></textarea>
                <button>Modifier</button>
            </form>
            <p>Modification sur quel principe :</p>
            <form>
                <textarea id="quel" name="quel"
                rows="10" cols="40"></textarea>
                <button>Modifier</button>
            </form>
        </div>
    );
  }
}

export default modifkezako;