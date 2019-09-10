import React from "react";
import styles from "../../../assets/jss/pageDashboard.module.css";
import { Link } from "react-router-dom";


class head2 extends React.Component {
  render() {
    return (
          <div className={styles.head2}>
            <ul>
              <li><Link to={"/infogenerale"}>Mes infos générales</Link></li>
              <li><Link to={"/prochainevent"}>Mes prochain évènements</Link></li>
              <li><Link to={"/mesactivites"}>Mes activités</Link></li>
              <li><Link to={"/mesactu"}>Mes actualités</Link></li>
            </ul>
          </div>
    );
  }
}

export default head2;