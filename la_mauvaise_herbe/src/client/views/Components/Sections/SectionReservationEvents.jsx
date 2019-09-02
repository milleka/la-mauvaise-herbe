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
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/Person";
import Personne from '@material-ui/icons/PersonOutline';
import Email from '@material-ui/icons/Email';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  
  Transition.displayName = "Transition";

class SectionReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          classicModal: false,
        };
      }
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
    render() {
        const { classes } = this.props;
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
                  <CustomInput
                    labelText="Nom"
                    id="material"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <People />
                        </InputAdornment>
                      )
                    }}
                  />
                    <CustomInput
                    labelText="Prénom"
                    id="material"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Personne />
                        </InputAdornment>
                      )
                    }}
                  />
                    <CustomInput
                    labelText="Email"
                    id="material"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email />
                        </InputAdornment>
                      )
                    }}
                  />
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button color="transparent" simple>
                        Envoyer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    }
}

SectionReservation.propTypes = {
    classes: PropTypes.object
  };
  
  export default withStyles(reservationStyle)(SectionReservation);