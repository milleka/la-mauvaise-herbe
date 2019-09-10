import React from "react";

import styles from "../../assets/jss/pageAdminStyle.module.css";
import{ auth } from '../../firebase/firebase.js';


class PageAdmin extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }
        
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try{
          await auth.signInWithEmailAndPassword(email.trim(), password)
            this.setState({
              password:'',
              email: ''
            })
            this.props.history.push("/dashboard");
      } catch(error) {
          console.log(error)
      }
        
      }
    
      render() {
        console.log(this.state.email)
        return (
          <div className={styles.body}>
          <div className={styles.Login}>
            <h1 className={styles.titre}>Administrateur</h1>
            <form onSubmit={this.handleSubmit}>
                <label className={styles.texte}>
                  Email
                </label>
                  <input
                    name="email" 
                    id="email"
                    className={styles.formu}
                    placeholder="exemple@gmail.com"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                <label className={styles.texte}>
                    Mot de passe
                </label>
                <input
                  name="password" 
                  id="password"
                  className={styles.formu}
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                />
              <button
                className={styles.submit}
                type="submit"
              >Login</button>
            </form>
          </div>
          </div>
        );
      }
    }

export default PageAdmin;