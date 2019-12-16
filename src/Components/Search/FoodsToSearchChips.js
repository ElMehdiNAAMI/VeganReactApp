import React from "react";
import Chip from "@material-ui/core/Chip";

export default function ChipsArray({ foodToSearch, onDeleteFoodToSearch }) {
  return foodToSearch ? (
    <div>
      {foodToSearch.map(foodId => {
        return (
          <Chip
            key={foodId}
            label={foodId}
            onDelete={onDeleteFoodToSearch.bind(null, foodId)}
            style={{ margin: "5px", backgroundColor: "#2e7d32" }}
          />
        );
      })}
    </div>
  ) : null;
}
