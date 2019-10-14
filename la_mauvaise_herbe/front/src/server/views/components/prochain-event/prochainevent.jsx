import React from "react";

import Head from "../head2/head2.jsx";

import styles from "../../../assets/jss/prochainevent/prochaineventStyle.module.css";

import Firstevent from "./component/firstevent.jsx";
import Twoevent from "./component/twoevent.jsx";
import Threeevent from "./component/threeevent.jsx";
import Fourevent from "./component/fourevent.jsx";
import Fiveevent from "./component/fiveevent.jsx";




class prochainevent extends React.Component {
  render() {
    return (
      <div className={styles.prochainevent}>
          <header>
          <div className={styles.head1}>
            <h1>Mes prochains évènements</h1>
          </div>
          <Head/>
        </header>
        <h3>1er évènement</h3>
        <Firstevent/>
        <h3>2ème évènement</h3>
        <Twoevent/>
        <h3>3ème évènement</h3>
        <Threeevent/>
        <h3>4ème évènements</h3>
        <Fourevent/>
        <h3>5ème évènements</h3>
        <Fiveevent/>
      </div>
    );
  }
}

export default prochainevent;