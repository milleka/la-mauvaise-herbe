import React from "react";

import Head from "../head2/head2.jsx";
import Modifecran from "./component/modifecran.jsx";
import Modifkezako from "./component/modifkezako.jsx";
import Modiflien from "./component/modiflien.jsx";
import styles from "../../../assets/jss/info-generale/infogeneralStyle.module.css";




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
                    <th className={styles.ecran}><Modifecran/></th>
                    <th className={styles.kezako}><Modifkezako/></th>
                    <th className={styles.lien}><Modiflien/></th>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default infogenerale;