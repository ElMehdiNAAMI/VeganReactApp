import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

export default function Create({ getSource }) {
  // related to the opening and closing of the dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    //basically cleans the state
    setOpen(false);
    setSource({
      title: "",
      info: "",
      nutrients: ""
    });
  };
  //************* *
  // related to the text fields
  const [addedSource, setSource] = React.useState({
    title: "",
    info: "",
    nutrients: ""
  });

  const handleTextField = addedSourcePropertyName => event => {
    setSource({
      ...addedSource,
      ...{ [addedSourcePropertyName]: event.target.value }
    });
  };
  //related to the button and the form submit of the dialog
  const handleAdded = () => {
    const { title, nutrients } = addedSource;
    // checking if the user filled the form correctly before adding to the state
    if (title && nutrients) {
      getSource(addedSource);
      handleClose();
    }
  };
  //styling
  const textFieldStyle = { width: "95%", margin: "5px" };
  // ***********************
  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <AddCircleOutlineRoundedIcon style={{ fontSize: "50px" }} />
      </Button>
      <Dialog open={open} onClose={handleClose} style={{ textAlign: "center" }}>
        <DialogTitle id="form-dialog-title">
          Add your favorite foods
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can add your favorite sources of macronutrients.
          </DialogContentText>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleAdded();
            }}
          >
            <TextField
              variant="outlined"
              label="Source name"
              onChange={handleTextField("title")}
              style={textFieldStyle}
            />
            <br />
            <TextField
              variant="outlined"
              label="Information about the source"
              multiline
              rows="4"
              onChange={handleTextField("info")}
              style={textFieldStyle}
            />
            <br />
            <FormControl style={textFieldStyle}>
              <InputLabel>What macronutrient?</InputLabel>
              <Select
                value={addedSource.nutrients}
                onChange={handleTextField("nutrients")}
              >
                <MenuItem value={"carbs"}>Carbs</MenuItem>
                <MenuItem value={"proteins"}>Proteins</MenuItem>
                <MenuItem value={"fats"}>Fats</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdded} variant="contained" color="primary">
            Add food source
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
