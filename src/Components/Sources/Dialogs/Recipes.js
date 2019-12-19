import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListRecipes from "./Recipe/ListRecipes";
import Recipe from "./Recipe/Recipe";
import Image from "./img/jam.png";

export default function Recipes({
  searchResults,
  setSearchResults,
  isThereNoResults,
  setIsThereNoResults
}) {
  // state
  const [showRecipe, setShowRecipe] = React.useState(false);

  // related to the cleaning of search results state by the opening and closing of the dialog
  const handleClose = () => {
    setSearchResults("");
    setIsThereNoResults(false);
    setShowRecipe(false);
  };
  //if there was results
  if (searchResults.length > 0) {
    return (
      <Dialog
        open={true}
        onClose={handleClose}
        PaperProps={{
          style: {
            textAlign: "center",
            backgroundColor: "#795548",
            width: "100vw",
            height: "100vh"
          }
        }}
      >
        <ListRecipes
          searchResults={searchResults}
          showRecipe={showRecipe}
          setShowRecipe={setShowRecipe}
        />
        <Recipe showRecipe={showRecipe} setShowRecipe={setShowRecipe} />
        <DialogActions>
          {showRecipe ? (
            <Button
              onClick={() => {
                setShowRecipe(false);
              }}
              variant="contained"
              color="primary"
            >
              {"<<"}Go Back
            </Button>
          ) : null}
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  //if there was no recipes
  else if (isThereNoResults) {
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
        <DialogContent>
          <DialogTitle id="form-dialog-title">Oops! </DialogTitle>
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
