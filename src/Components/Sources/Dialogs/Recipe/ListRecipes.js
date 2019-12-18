import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#795548"
  },
  inline: {
    display: "inline"
  }
}));

const trimStr = (str, limit = 20) => {
  if (str.length > limit) {
    //trim the string to the maximum length
    str = str.substr(0, limit);

    //re-trim if we are in the middle of a word
    str = str.substr(0, Math.min(str.length, str.lastIndexOf(" ")));

    //add ...
    str = `${str}...`;
  }

  return str;
};
export default function ListRecipes({ searchResults }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {searchResults.map(recipeObj => (
        <ListItem alignItems="flex-start" key={recipeObj.image}>
          <Button style={{ backgroundColor: "#2e7d32", borderRadius: "15px" }}>
            <ListItemAvatar>
              <Avatar
                alt={recipeObj.source}
                src={recipeObj.image}
                style={{ width: "60px", height: "60px" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={trimStr(recipeObj.label)}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Health Labels
                  </Typography>
                  — {recipeObj.healthLabels.slice(0, 2).join(", ")}
                </React.Fragment>
              }
            />
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
