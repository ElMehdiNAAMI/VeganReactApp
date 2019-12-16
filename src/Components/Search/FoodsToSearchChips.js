import React from "react";
import Chip from "@material-ui/core/Chip";

export default function ChipsArray({ foodToSearch, onDeleteFoodToSearch }) {
  if (!foodToSearch || foodToSearch.length === 0) {
    return (
      <div>
        <Chip
          label="Add foods to search their recipes"
          style={{
            margin: "5px",
            backgroundColor: "#2e7d32",
            fontSize: "30px"
          }}
        />
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
              style={{
                margin: "5px",
                backgroundColor: "#2e7d32",
                fontSize: "30px"
              }}
            />
          );
        })}
      </div>
    );
  }
}
