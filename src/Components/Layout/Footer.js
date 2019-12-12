import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default function Footer(props) {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All" />
        {props.nutrients.map(val => (
          <Tab label={val} key={val} />
        ))}
      </Tabs>
    </Paper>
  );
}
