import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/Person";
import Personne from '@material-ui/icons/PersonOutline';
import Email from "@material-ui/icons/Email";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import axios from 'axios';


import contactStyle from "../../../assets/jss/material-kit-react/views/componentsSections/contactStyle.jsx";

class Contact extends React.Component {

  handleSubmit(e){
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            nom: nom,
            prenom: prenom,   
            email: email,  
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
          this.resetForm()
            var node = document.createElement("p");                 
            var textnode = document.createTextNode("Message envoyé avec succès !");        
            node.appendChild(textnode);                              
            document.getElementById("reponse").appendChild(node);
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
    document.getElementById('contact-form').reset();
}

  render() {
    const { classes } = this.props;
    return (
    <div className={classes.active}>
        <div className={classes.container}>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <div className={classes.title}>
                  <p className={classes.divider}>Nous contacter</p>
                </div>
                  <CardBody>
                    <p className={classes.email}>Email: lamauvaiseherbe49@gmail.com</p>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" className={classes.form}>
                    <CustomInput
                      labelText="Nom"
                      id="nom"
                      formControlProps={{
                        fullWidth: true
                      }}
                      require
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Prenom"
                      id="prenom"
                      require
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Personne className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email"
                      id="email"
                      require
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                        labelText="Message"
                        id="message"
                        require
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            multiline: true,
                            rows: 5
                        }}
                    />
                    <div className={classes.reponse} id="reponse"></div>
                    </form>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={this.handleSubmit.bind(this)} simple color="primary" size="lg">
                      Envoyer
                    </Button>
                  </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          </div>
    </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object
};

export default withStyles(contactStyle)(Contact);