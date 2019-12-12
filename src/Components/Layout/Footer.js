import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default function Footer({ nutrients, category, onSelect }) {
  const index = category
    ? nutrients.findIndex(nutrient => nutrient === category) + 1
    : 0;

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        onChange={(e, ind) => {
          //onChange receives event /index of the tab where the event happened
          onSelect(ind === 0 ? "" : nutrients[ind - 1]);
        }}
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {nutrients.map(val => (
          <Tab label={val} key={val} />
        ))}
      </Tabs>
    </Paper>
  );
}
