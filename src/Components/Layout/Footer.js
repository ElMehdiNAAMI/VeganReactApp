import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default function Footer({ nutrients, onSelect }) {
  return (
    <Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        onChange={onSelect}
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
