import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import reservationStyle from "../../assets/jss/material-kit-react/views/componentsSections/forminforeservaStyle.jsx";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Button from "../../components/CustomButtons/Button.jsx";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


import axios from 'axios';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  
  Transition.displayName = "Transition";

class SectionInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          classicModal: false,
          titre: '',
          nom: '',
          prenom: '',
          email:'',
          message: '',
          reponse:''

        };
      }

      //ouverture modal

    handleClickOpen(modal) {
        var x = [];
        x[modal] = true;
        this.setState(x);
      }
    handleClose(modal) {
        var x = [];
        x[modal] = false;
        this.setState(x);
      }

//envoie email
onChange = (e) => {
  const state = this.state
  state[e.target.name] = e.target.value;
  this.setState(state);
}

handleSubmit1(e){
  e.preventDefault();
  const titre = this.state.titre;
  const nom = this.state.nom;
  const prenom = this.state.prenom;
  const email = this.state.email;
  const message = this.state.message;
  axios({
      method: "POST", 
      url:process.env.NODE_ENV==="production" ? process.env.ROOT_URL : "http://localhost:3002/send2", 
      data: {
          titre: titre,
          nom: nom,
          prenom: prenom,   
          email: email,
          message: message,
      }
  }).then((response)=>{
      if (response.data.msg === 'success'){
        this.setState({
          reponse: "Message envoyé avec succès !"
        })
        this.resetForm()
      }else if(response.data.msg === 'fail'){
          alert("Message failed to send.")
      }
  })
}

resetForm(){
  this.setState({
    titre: '',
    nom: '',
    prenom: '',
    email:'',
    message: '',
  })
}

    render() {
        const { classes } = this.props;
        const {titre, nom, prenom, email, message, reponse} = this.state
        return (
        <div>
            <Button
                color="primary"
                block
                onClick={() => this.handleClickOpen("classicModal")}
            >
                <LibraryBooks className={classes.icon} />
                Information
            </Button>
            <form id="contact-form1" onSubmit={this.handleSubmit1.bind(this)} method="POST">
            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal
                }}
                open={this.state.classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => this.handleClose("classicModal")}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
            >
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => this.handleClose("classicModal")}
                    >
                        <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>demande d'information !</h4>
                </DialogTitle>
                  <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                  >
                    <div className={classes.column}>
                      <label className={classes.lab} htmlFor="titre">Titre de l'activité:</label>
                      <input
                        className={classes.text}
                        id="titre"
                        name="titre"
                        require="true"
                        value={titre} onChange={this.onChange}
                      />
                      <label className={classes.lab} htmlFor="nom">Nom:</label>
                      <input
                        className={classes.text}
                        id="nom"
                        name="nom"
                        require="true"
                        value={nom} onChange={this.onChange}
                      />
                      <label className={classes.lab} htmlFor="prenom">Prénom:</label>
                      <input
                        className={classes.text}
                        id="prenom"
                        name="prenom"
                        require="true"
                        value={prenom} onChange={this.onChange}
                      />
                      <label className={classes.lab} htmlFor="email">E-mail:</label>
                      <input
                        className={classes.text}
                        id="email"
                        name="email"
                        require="true"
                        value={email} onChange={this.onChange}
                      />
                      <label className={classes.lab} htmlFor="message">Message:</label>
                      <textarea
                       className={classes.text1} name="message" id="message"
                       require="true" onChange={this.onChange} value={message}></textarea>
                    </div>
                  </DialogContent>
                  <div className={classes.reponse1}>{reponse}</div>
                  <DialogActions className={classes.modalFooter}>
                      <Button onClick={this.handleSubmit1.bind(this)} color="transparent" simple>
                          Envoyer
                      </Button>
                  </DialogActions>
            </Dialog>
            </form>
        </div>
        );
    }
}

SectionInfo.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(reservationStyle)(SectionInfo);