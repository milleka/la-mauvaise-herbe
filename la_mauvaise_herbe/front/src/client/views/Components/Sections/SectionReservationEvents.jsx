import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import reservationStyle from "../../../assets/jss/material-kit-react/views/componentsSections/reservationStyle.jsx";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Button from "../../../components/CustomButtons/Button.jsx";
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

class SectionReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          classicModal: false,
          place: '',
          event: '',
          nom: '',
          prenom: '',
          email:'',
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
  const place = this.state.place;
  const event = this.state.event;
  const nom = this.state.nom;
  const prenom = this.state.prenom;
  const email = this.state.email;
  axios({
      method: "POST", 
      url:"http://localhost:3002/send1", 
      data: {
          place: place,
          event: event,
          nom: nom,
          prenom: prenom,   
          email: email,  
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
    place: '',
    event: '',
    nom: '',
    prenom: '',
    email:'',
  })
}

    render() {
        const { classes } = this.props;
        const {place, event, nom, prenom, email, reponse} = this.state
        return (
        <div>
            <Button
                color="primary"
                block
                onClick={() => this.handleClickOpen("classicModal")}
            >
                <LibraryBooks className={classes.icon} />
                Réservation
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
                    <h4 className={classes.modalTitle}>Réserver pour l'événement !</h4>
                </DialogTitle>
                  <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                  >
                    <div className={classes.column}>
                      <label className={classes.lab} htmlFor="place">Nombre de participant:</label>
                      <input 
                        className={classes.number}
                        type="number" id="place" name="place"
                        min="1" required
                        value={place} onChange={this.onChange}
                      />
                      <label className={classes.lab} htmlFor="event">Titre de l'évènement:</label>
                      <input
                        className={classes.text}
                        id="event"
                        name="event"
                        value={event} onChange={this.onChange}
                      />
                      <label className={classes.lab} htmlFor="nom">Nom:</label>
                      <input
                        className={classes.text}
                        id="nom"
                        name="nom"
                        value={nom} onChange={this.onChange}
                      />
                      <label className={classes.lab} htmlFor="prenom">Prénom:</label>
                      <input
                        className={classes.text}
                        id="prenom"
                        name="prenom"
                        value={prenom} onChange={this.onChange}
                      />
                      <label className={classes.lab} htmlFor="email">E-mail:</label>
                      <input
                        className={classes.text}
                        id="email"
                        name="email"
                        value={email} onChange={this.onChange}
                      />
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

SectionReservation.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(reservationStyle)(SectionReservation);