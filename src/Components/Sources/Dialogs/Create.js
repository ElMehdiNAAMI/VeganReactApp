import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import TextField from "@material-ui/core/TextField";

export default function Create() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {}
      <Button color="inherit" onClick={handleClickOpen}>
        <AddCircleOutlineRoundedIcon style={{ fontSize: "50px" }} />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can add your best sources of macronutrients.
          </DialogContentText>
          <form>
            <TextField id="standard-basic" label="Standard" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Add food source
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
