import React from "react";

import styles from "../../../../assets/jss/info-generale/component/modiflienStyle.module.css";

//import fond from "../../../../assets/img/les_plantes_medicinales.jpg";
//import {storage} from '../../../../firebase/firebase.js';


class modiflien extends React.Component {
    
  render() {
    return (
        <div className={styles.lien}>
            <form>
                <h5>Modifier le lien 1:</h5>
                <p>Titre:</p>
                <input type="text" name="titre" id="titre" placeholder="Les plantes médicinales"/>
                <p>Lien:</p>
                <input type="url" name="url" id="url"
                    placeholder="https://fr.wikipedia.org/wiki/Plante_m%C3%A9dicinale"
                    pattern="https://.*" size="30"
                required/>
                <h5>Modifier le lien 2:</h5>
                <p>Titre:</p>
                <input type="text" name="titre" id="titre" placeholder="Article sur La mauvaise Herbe"/>
                <p>Lien:</p>
                <input type="url" name="url" id="url"
                    placeholder="https://www.maine-et-loire.fr/actualites/toutes-les-actualites/news/les-mauvaises-herbes-ca-nexiste-pas"
                    pattern="https://.*" size="30"
                required/>
                <h5>Modifier le lien 3:</h5>
                <p>Titre:</p>
                <input type="text" name="titre" id="titre" placeholder="Fete de la nature"/>
                <p>Lien:</p>
                <input type="url" name="url" id="url"
                    placeholder="https://fetedelanature.com/"
                    pattern="https://.*" size="30"
                required/>
                <button>Modifier</button>
            </form>                     
        </div>
    );
  }
}

export default modiflien;