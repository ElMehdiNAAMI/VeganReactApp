import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
export default function index() {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane styles={styles.paper} />
      </Grid>
      <Grid item sm>
        <RightPane styles={styles.paper} />
      </Grid>
    </Grid>
  );
}

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};
