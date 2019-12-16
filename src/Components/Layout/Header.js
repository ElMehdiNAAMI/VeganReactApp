import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Create from "../Sources/Dialogs/Create";
import AboutUs from "../Sources/Dialogs/AboutUs";

export default function Header({ getSource }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
          Vegan Macros Recipes
        </Typography>
        <AboutUs />
        <Create getSource={getSource} />
      </Toolbar>
    </AppBar>
  );
}
