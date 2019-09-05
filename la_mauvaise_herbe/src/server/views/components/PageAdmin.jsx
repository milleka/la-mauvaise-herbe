import React from "react";

import styles from "../../assets/jss/pageAdminStyle.module.css";

import { InputGroup, Button, FormGroup, FormControl } from "react-bootstrap";


class PageAdmin extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }
    
      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }
    
      render() {
        return (
          <div className={styles.body}>
          <div className={styles.Login}>
            <h1 className={styles.titre}>Administrateur</h1>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <InputGroup.Prepend>
                  <InputGroup.Text className={styles.texte} id="basic-addon1">Email</InputGroup.Text>
                </InputGroup.Prepend>
                  <FormControl
                  className={styles.formu}
                    placeholder="exemple@gmail.com"
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <InputGroup.Prepend>
                    <InputGroup.Text className={styles.texte} id="basic-addon1">Mot de passe</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                className={styles.formu}
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button
              className={styles.submit}
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>
          </div>
        );
      }
    }

export default PageAdmin;