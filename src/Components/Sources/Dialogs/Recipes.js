import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListRecipes from "./Recipe/ListRecipes";

export default function Recipe({ searchResults, setSearchResults }) {
  console.log("searchResults ");
  console.log(searchResults);

  // related to the cleaning of search results state by the opening and closing of the dialog
  const handleClose = () => {
    setSearchResults("");
  };

  if (searchResults.length > 0) {
    return (
      <Dialog
        open={true}
        onClose={handleClose}
        PaperProps={{
          style: {
            textAlign: "center",
            backgroundColor: "#795548"
          }
        }}
      >
        <DialogTitle id="form-dialog-title">TOP RECIPES</DialogTitle>
        <DialogContent>
          <ListRecipes searchResults={searchResults} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return null;
  }
}
