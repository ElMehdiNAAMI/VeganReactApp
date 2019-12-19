import React from "react";
import { Tabs, Tab, Typography, Paper } from "@material-ui/core";

export default function Footer({ nutrients, category, onSelect }) {
  const index = category
    ? nutrients.findIndex(nutrient => nutrient === category) + 1
    : 0;
  const selectBasedOnIndex = (e, ind) => {
    onSelect(ind === 0 ? "" : nutrients[ind - 1]);
  };
  return (
    <React.Fragment>
      <Paper position="static" style={{ background: "#2e7d32" }}>
        <Tabs
          value={index}
          indicatorColor="secondary"
          onChange={selectBasedOnIndex} //onChange CB param are event/index of the tab where it happened
          centered
        >
          <Tab label="All" />
          {nutrients.map(val => (
            <Tab label={val} key={val} />
          ))}
        </Tabs>
      </Paper>
      <footer>
        <a
          href="https://www.lmehdi.com"
          style={{ textDecoration: " none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography
            color="primary"
            style={{
              textAlign: "center",
              paddingTop: "5px"
            }}
          >
            Copyright &copy; 2019 - El Mehdi Naami
          </Typography>
        </a>
      </footer>
    </React.Fragment>
  );
}
