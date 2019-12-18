import React from "react";
import TextField from "@material-ui/core/TextField";
import FoodsToSearchChips from "./FoodsToSearchChips";
import Recipe from "../Sources/Dialogs/Recipes";
import axios from "axios";

function Search({ foodToSearch, onDeleteFoodToSearch }) {
  //recipe details and search state
  const [recipeDetails, setRecipeDetails] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  // getting the string query from the array of foodToSearch and their details
  let foodToSearchQuery;

  if (foodToSearch) {
    foodToSearchQuery = [...foodToSearch, recipeDetails].join("-");
  }
  // API Call method

  const getRecipes = async () => {
    if (foodToSearchQuery) {
      try {
        const res = await axios(
          `https://api.edamam.com/search?q=${foodToSearchQuery}&app_id=1b892b69&from=0&to=4&app_key=19280bdd1375f97d6ff2354207cb89bf&health=vegan`
        );
        console.log(res);

        const recipeObjArr = res.data.hits.map(obj => obj.recipe);
        //in case the array is empty return dialogue of error
        if (recipeObjArr.length === 0) {
          alert("Please try another comb");
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
      <Recipe
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />

      <FoodsToSearchChips
        onDeleteFoodToSearch={onDeleteFoodToSearch}
        foodToSearch={foodToSearch}
      />
      <TextField
        style={{ height: "100px !important" }}
        variant="outlined"
        color="secondary"
        label="You can add details eg: gluten free,natural..."
        style={{ width: "70%", marginTop: "2%" }}
        onChange={e => {
          // Preparing the recipe details set by the user for the query (needs - instead of spaces)
          setRecipeDetails(e.target.value.split(" ").join("-"));
        }}
      />
    </form>
  );
}

export default Search;
