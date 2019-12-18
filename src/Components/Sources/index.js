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
import DeleteIcon from "@material-ui/icons/Delete";
import Image from "./img/main.jpg";
import RestaurantMenuRoundedIcon from "@material-ui/icons/RestaurantMenuRounded";
import Search from "../Search/Search";
import MediaQ from "./MediaQ";

export default function index({
  sources,
  category,
  sourceId,
  foodToSearch,
  onSelect,
  onDelete,
  onDeleteFoodToSearch,
  onLookFor
}) {
  //destructuring the sources Arr to undo the entries function
  const sourcesArr = [...sources[0][1], ...sources[1][1], ...sources[2][1]];
  // The source object with the sourceId
  const sourceIdObj = sourcesArr.find(obj => obj.id === sourceId);
  //styling
  const paper = {
    padding: "3vh",
    marginTop: 10,
    marginBottom: 5,
    overflowY: "auto",
    background: `linear-gradient(to right bottom,rgba(121,85,72,0.90),rgba(121,85,72,0.90)),url(${Image})`,

    wordWrap: "break-word"
  };
  const styles = {
    paperOne: {
      ...paper,
      marginRight: "5px",
      height: "50vh"
    },
    paperTwo: {
      ...paper,
      marginTop: 0,
      marginBottom: "1vh",
      minHeight: "25vh"
    },
    paperThree: {
      ...paper,
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 0,
      minHeight: "35vh",
      backgroundSize: "cover"
    }
  };
  //Using media queries
  if (MediaQ("600px")) {
    styles.paperOne.height = "67vh";
    styles.paperTwo.height = "25vh";
    styles.paperTwo.marginTop = "10px";
    styles.paperThree.height = "25vh";
    styles.paperThree.marginTop = "10px";
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Paper style={styles.paperOne}>
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
                        <IconButton onClick={onLookFor.bind(null, id)}>
                          <RestaurantMenuRoundedIcon
                            style={{ backgroundColor: "#2e7d32" }}
                            color="secondary"
                          />
                        </IconButton>
                        <IconButton
                          edge="end"
                          onClick={onDelete.bind(null, id)}
                        >
                          <DeleteIcon
                            style={{ backgroundColor: "#3e2723" }}
                            color="secondary"
                          />
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
        <Paper style={styles.paperTwo}>
          <Typography
            variant="h3"
            style={{ paddingBottom: 20, textTransform: "capitalize" }}
          >
            {sourceIdObj ? sourceIdObj.title : " Welcome "}
          </Typography>
          <Typography variant="body1">
            {sourceIdObj
              ? sourceIdObj.info
              : " Get your macronutrients with vegan recipes"}
          </Typography>
        </Paper>
        <Paper style={styles.paperThree}>
          <Search
            foodToSearch={foodToSearch}
            onDeleteFoodToSearch={onDeleteFoodToSearch}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
