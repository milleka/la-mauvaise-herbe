import React from "react";

import Head from "../head2/head2.jsx";

import styles from "../../../assets/jss/mes-activites/mesactivitesStyle.module.css";




class mesactivites extends React.Component {
  render() {
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
            <form>
                <label htmlFor="titre">Titre</label>
                <input type="text" id="titre" name="titre" required />
                <label htmlFor="image">Image</label>
                <input type="file"
                id="image" name="image"
                accept="image/png, image/jpeg" required/>
                <img src={'http://via.placeholder.com/400x200'} alt="activités"/>
                <label htmlFor="accroche">Phrase d'accroche</label>
                <input type="text" id="accroche" name="accroche" required />
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" required ></textarea>
                <label htmlFor="duree">Durée</label>
                <input type="text" id="duree" name="duree" required />
                <button>Ajouter</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default mesactivites;