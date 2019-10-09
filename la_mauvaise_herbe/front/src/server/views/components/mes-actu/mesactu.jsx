import React from "react";

import Head from "../head2/head2.jsx";

import styles from "../../../assets/jss/mes-actu/mesactuStyle.module.css";




class mesactu extends React.Component {
  render() {
    return (
      <div className={styles.infogenerale}>
          <header>
          <div className={styles.head1}>
            <h1>Mes actualités</h1>
          </div>
          <Head/>
        </header>
      </div>
    );
  }
}

export default mesactu;