import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Grid from "@material-ui/core/Grid";

export default function Recipe({ showRecipe, setShowRecipe }) {
  const style = {
    image: {
      borderRadius: "15px",
      maxHeight: "50%"
    }
  };
  return showRecipe ? (
    <DialogContent>
      <DialogTitle
        id="form-dialog-title"
        style={{ textTransform: "capitalize" }}
      >
        {showRecipe.label}
      </DialogTitle>
      <img
        src={showRecipe.image}
        alt={showRecipe.label}
        style={style.image}
      ></img>
      <Grid item xs={12} style={{ marginTop: "15px" }}>
        <Typography style={{ display: "inline", textTransform: "capitalize" }}>
          HEALTH LABELS:
        </Typography>
        {showRecipe.healthLabels.join(", ")}
        <br />
        <br />
        <em>How To Cook It ?</em>
        <br />
        This recipe was carefully designed and tested by{" "}
        <span style={{ textDecoration: "underline" }}>
          {showRecipe.source}
        </span>{" "}
        . Please check out directions at their website.
        <br />
        <br />
        <Button variant="contained" color="primary">
          <a
            href={showRecipe.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              borderRadius: "15px",
              color: "white"
            }}
          >
            Directions
          </a>
        </Button>
      </Grid>
    </DialogContent>
  ) : null;
}
