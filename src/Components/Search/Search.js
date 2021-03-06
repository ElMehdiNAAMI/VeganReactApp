import React from "react";
import TextField from "@material-ui/core/TextField";
import FoodsToSearchChips from "./FoodsToSearchChips";
import Recipe from "../Sources/Dialogs/Recipes";
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

function Search({ foodToSearch, onDeleteFoodToSearch }) {
  //recipe details and search state
  const [recipeDetails, setRecipeDetails] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  // state of the empty array search
  const [isThereNoResults, setIsThereNoResults] = React.useState(false);
  // loading state
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // getting the string query from the array of foodToSearch and their details
  let foodToSearchQuery;

  if (foodToSearch) {
    foodToSearchQuery = [...foodToSearch, recipeDetails].join("-");
  }
  // API Call method

  const getRecipes = async () => {
    if (foodToSearchQuery) {
      try {
        setOpen(true);
        const res = await axios(
          `https://api.edamam.com/search?q=${foodToSearchQuery}&app_id=1b892b69&from=0&to=4&app_key=19280bdd1375f97d6ff2354207cb89bf&health=vegan`
        );
        setOpen(false);
        const recipeObjArr = res.data.hits.map(obj => obj.recipe);
        //in case the array of recipes is empty
        if (recipeObjArr.length === 0) {
          setIsThereNoResults(true);
        }

        setSearchResults(recipeObjArr);
      } catch (error) {
        alert("we had an error please try again");
      }
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        getRecipes();
      }}
      style={{ textAlign: "center", marginTop: "6vh" }}
    >
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Recipe
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        isThereNoResults={isThereNoResults}
        setIsThereNoResults={setIsThereNoResults}
      />

      <FoodsToSearchChips
        onDeleteFoodToSearch={onDeleteFoodToSearch}
        foodToSearch={foodToSearch}
      />
      <TextField
        style={{ width: "70%", marginTop: "2%" }}
        variant="outlined"
        color="secondary"
        label="You can add details eg: gluten free,natural..."
        onChange={e => {
          // Preparing the recipe details set by the user for the query (needs - instead of spaces)
          setRecipeDetails(e.target.value.split(" ").join("-"));
        }}
      />
    </form>
  );
}

export default Search;
