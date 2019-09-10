import React from "react";
import styles from "../../assets/jss/pageDashboard.module.css";
import Head from "../components/head2/head2.jsx";


class PageDashboard extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className={styles.head1}>
            <h1>Salut Tieumish !</h1>
            <h3>Bienvenue sur ton tableau de bord</h3>
          </div>
          <Head/>
        </header>
        <div className={styles.intro}>
          <p>Sur cette page tu pourras :</p>
          <ul>
            <li><strong>Modifier toutes tes infos générales</strong>, changer le fond de ta page d'accueil,
               changer ton kezako et sa photo, et les liens utiles de ton pied de page.</li>
            <li><strong>Modifier tes événements à venir</strong>, tu pourras choisir la photo, le titre,
               le lieu , la date et l'heure.</li>
            <li><strong>Modifier, supprimer et ajouter tes activités</strong>, changer ton titre, ta phrase d'accroche,
               ton texte explicatif, ton tarif et la durée de l'activité.</li>
            <li><strong>Modifier, supprimer et ajouter tes actualités</strong>, changer ton titre, ton texte d'explication,
               ainsi qu'un lien vers l'article choisi.</li>
          </ul>
          <p>Bon visionnage ! </p>
        </div>      
      </div>
    );
  }
}

export default PageDashboard;