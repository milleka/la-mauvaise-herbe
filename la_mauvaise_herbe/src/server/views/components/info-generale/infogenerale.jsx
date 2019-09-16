import React from "react";

import Head from "../head2/head2.jsx";
import Modifecran from "./component/modifecran.jsx";
import styles from "../../../assets/jss/info-generale/infogeneralStyle.module.css";

import matt from "../../../assets/img/carex.jpg";



class infogenerale extends React.Component {
  render() {
    return (
      <div className={styles.infogenerale}>
          <header>
          <div className={styles.head1}>
            <h1>Mes infos générales</h1>
          </div>
          <Head/>
        </header>
        <table>
            <thead>
                <tr>
                    <th className={styles.fond}>Fond d'écran</th>
                    <th className={styles.kezako}>Kezako</th>
                    <th>Liens utiles</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <Modifecran/>
                   <th className={styles.kezako}>
                        <p>Modifier l'image:</p>
                        <form>
                        <input type="file"
                            id="img_kezako" name="img_kezako"
                            accept="image/png, image/jpeg"/>
                            <img src={matt} alt="kezako"/>
                            <button>Modifier</button>
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
                   </th>
                   <th className={styles.lien}>
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
                   </th>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default infogenerale;