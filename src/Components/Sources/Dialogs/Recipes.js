import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListRecipes from "./Recipe/ListRecipes";
import Image from "./img/jam.png"; // Import using relative path

export default function Recipe({
  searchResults,
  setSearchResults,
  isThereNoResults,
  setIsThereNoResults
}) {
  console.log("searchResults ");
  console.log(searchResults);

  // related to the cleaning of search results state by the opening and closing of the dialog
  const handleClose = () => {
    setSearchResults("");
    setIsThereNoResults(false);
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
        <DialogTitle id="form-dialog-title">
          {searchResults.length > 3
            ? `TOP ${searchResults.length} RECIPES WITH THIS
          FOOD COMBINATION`
            : searchResults.length !== 1
            ? `WE GOT YOU
          ${searchResults.length} RECIPES WITH THIS FOOD COMBINATION`
            : `WE GOT YOU
          ONE RECIPE WITH THIS FOOD COMBINATION`}
        </DialogTitle>
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
  } else if (isThereNoResults) {
    return (
      <Dialog
        open={isThereNoResults}
        onClose={handleClose}
        PaperProps={{
          style: {
            textAlign: "center",
            background: `#795548`
          }
        }}
      >
        <DialogTitle id="form-dialog-title">Oops! </DialogTitle>
        <DialogContent>
          <p> No recipe was found, please try another combination of food</p>

          <img src={Image} alt="Trouble" style={{ maxWidth: "100%" }}></img>
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
