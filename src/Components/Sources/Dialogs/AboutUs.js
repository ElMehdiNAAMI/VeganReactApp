import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default function AboutUs() {
  // related to the opening and closing of the dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    //basically cleans the state
    setOpen(false);
  };

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
            You can add and save your favorite sources of macronutrients with
            the plus icon on the top right. You can then specify a food
            combination and search for its recipes.
            <br />
            You can also add details to your recipes (eg: Peanut-Free,
            Sugar-Free, Alcohol-Free).
            <br />
            All the recipes you will get will be 100% vegan.
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
