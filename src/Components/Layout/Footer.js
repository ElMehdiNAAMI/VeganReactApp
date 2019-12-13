import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default function Footer({ nutrients, category, onSelect }) {
  const index = category
    ? nutrients.findIndex(nutrient => nutrient === category) + 1
    : 0;
  const selectBasedOnIndex = (e, ind) => {
    onSelect(ind === 0 ? "" : nutrients[ind - 1]);
  };
  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        onChange={selectBasedOnIndex} //onChange CB param are event/index of the tab where it happened
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
