import React from "react";

import styles from "../../../../assets/jss/info-generale/component/modifecranStyle.module.css";

//import fond from "../../../../assets/img/les_plantes_medicinales.jpg";
import {storage} from '../../../../firebase/firebase.js';


class modifecran extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fondec: null,
            url: '',
        }
        this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const fondec = e.target.files[0];
            this.setState(() => ({fondec}));
        }
    }

    handleUpload = () => {
        const {fondec} = this.state;
        console.log(fondec);
        const uploadTask = storage.ref(`fondecran/${fondec.name}`).put(fondec);
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
            storage.ref('fondecran').child(fondec.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }

    
  render() {
    return (
        <th className={styles.fondec}>
            <p>Choisir un fond d'écran:</p>
            <input type="file"
                onChange={this.handleChange}
                id="fondecran" name="fondecran"
                accept="image/png, image/jpeg"/>
            <button onClick={this.handleUpload}>Modifier</button>
            <img src={this.state.url} alt="fond d'écran"/>
        </th>
    );
  }
}

export default modifecran;