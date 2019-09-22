import React from "react";

import Head from "../head2/head2.jsx";

import styles from "../../../assets/jss/mes-activites/mesactivitesStyle.module.css";




class mesactivites extends React.Component {
  render() {
    return (
      <div className={styles.infogenerale}>
          <header>
          <div className={styles.head1}>
            <h1>Mes activités</h1>
          </div>
          <Head/>
        </header>
      </div>
    );
  }
}

export default mesactivites;