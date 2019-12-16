import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FoodsToSearchChips from "./FoodsToSearchChips";

function Search({ foodToSearch, onDeleteFoodToSearch }) {
  // getting the string query from the array
  if (foodToSearch) {
    const foodToSearchQuery = foodToSearch.join(" ");
  }

  return (
    <form
      onSubmit={e => {
        // e.preventDefault();
        // handleAdded();
      }}
      style={{ textAlign: "center", marginTop: "6vh" }}
    >
      <FoodsToSearchChips
        onDeleteFoodToSearch={onDeleteFoodToSearch}
        foodToSearch={foodToSearch}
      />
      <TextField
        variant="outlined"
        color="secondary"
        label="You can add recipe details eg: gluten free,sugar free,natural..."
        // onChange={handleTextField("info")}
        style={{ width: "70%", marginTop: "2%" }}
      />
      <IconButton type="submit">
        <SearchIcon style={{ fontSize: "40px" }} />
      </IconButton>
    </form>
  );
}

export default Search;
