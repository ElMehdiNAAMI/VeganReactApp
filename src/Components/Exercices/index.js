import React from "react";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";

export default function index({ sources, category }) {
  console.log(sources);

  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.paper}>
          {sources.map(([nutrient, sources]) =>
            !category || category === nutrient ? (
              <React.Fragment key={nutrient}>
                <Typography
                  variant="h4"
                  style={{ textTransform: "capitalize" }}
                >
                  {nutrient}
                </Typography>

                <List component="ul">
                  {sources.map(source => (
                    <ListItem button key={source.title}>
                      <ListItemText
                        primary={source.title}
                        style={{ textTransform: "capitalize" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.paper}>
          <Typography variant="h3" style={{ paddingBottom: 20 }}>
            Welcome
          </Typography>
          <Typography variant="h6">
            Please select a source of macronutrients in the left pan
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

const styles = {
  paper: {
    height: "70vh",
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    overflowY: "auto"
  }
};
