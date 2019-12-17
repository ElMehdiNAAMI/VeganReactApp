import React from "react";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MediaQ from "../Sources/MediaQ";

export default function ChipsArray({ foodToSearch, onDeleteFoodToSearch }) {
  //styling
  const chipStyle = {
    margin: "5px",
    backgroundColor: "#2e7d32",
    fontSize: "15px"
  };
  const iconStyle = {
    fontSize: "20px"
  };
  if (MediaQ("600px")) {
    chipStyle.fontSize = "30px";
    iconStyle.fontSize = "30px";
  }
  if (!foodToSearch || foodToSearch.length === 0) {
    return (
      <div>
        <Chip label="Add foods to search their recipes" style={chipStyle} />
        <IconButton type="submit">
          <SearchIcon style={iconStyle} />
        </IconButton>
      </div>
    );
  } else {
    return (
      <div>
        {foodToSearch.map(foodId => {
          return (
            <Chip
              key={foodId}
              label={foodId}
              onDelete={onDeleteFoodToSearch.bind(null, foodId)}
              style={chipStyle}
            />
          );
        })}
        <IconButton type="submit">
          <SearchIcon style={iconStyle} />
        </IconButton>
      </div>
    );
  }
}
