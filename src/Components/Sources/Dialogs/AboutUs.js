import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default function Create({ getSource }) {
  // related to the opening and closing of the dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    //basically cleans the state
    setOpen(false);
  };
  //************* *

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <HelpOutlineIcon style={{ fontSize: "50px" }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#795548"
          }
        }}
      >
        <DialogTitle id="form-dialog-title">About This App</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can add your favorite sources of macronutrients.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
