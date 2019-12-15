import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Create from "../Sources/Dialogs/Create";
import RestaurantMenuRoundedIcon from "@material-ui/icons/RestaurantMenuRounded";

export default function Header({ getSource }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
          Vegan Macros
          <RestaurantMenuRoundedIcon />
        </Typography>
        <Create getSource={getSource} />
      </Toolbar>
    </AppBar>
  );
}
