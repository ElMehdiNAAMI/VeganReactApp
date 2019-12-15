import React from "react";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Cancel";
import Image from "./img/main.jpg"; // Import using relative path

export default function index({
  sources,
  category,
  onSelect,
  sourceId,
  onDelete
}) {
  //destructuring the sources Arr to undo the entries function
  const sourcesArr = [...sources[0][1], ...sources[1][1], ...sources[2][1]];
  // The source object with the sourceId
  const sourceIdObj = sourcesArr.find(obj => obj.id === sourceId);

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
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
                  {sources.map(({ title, id }) => (
                    <ListItem
                      button
                      key={title}
                      onClick={() => {
                        onSelect(id);
                      }}
                    >
                      <ListItemText
                        primary={title}
                        style={{ textTransform: "capitalize" }}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          onClick={onDelete.bind(null, id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper style={styles.paper}>
          <Typography
            variant="h3"
            style={{ paddingBottom: 20, textTransform: "capitalize" }}
          >
            {sourceIdObj ? sourceIdObj.title : " Welcome "}
          </Typography>
          <Typography variant="body1">
            {sourceIdObj
              ? sourceIdObj.info
              : " Please select a source of macronutrients in the left pan "}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

const styles = {
  paper: {
    height: "67vh",
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    overflowY: "auto",
    background: `linear-gradient(to right bottom,rgba(121,85,72,0.95),rgba(121,85,72,0.95)),url(${Image})`,
    backgroundSize: "cover"
  }
};
