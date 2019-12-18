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
    backgroundColor: "#795548",
    textAlign: "center"
  },
  inline: {
    display: "inline"
  }
}));

const trimStr = (str, limit = 35) => {
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
        <ListItem
          alignItems="flex-start"
          key={recipeObj.image}
          onClick={() => {
            console.log(recipeObj);
          }}
        >
          <Button
            style={{
              backgroundColor: "#2e7d32",
              borderRadius: "15px",
              width: "100%"
            }}
          >
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
                  — {recipeObj.healthLabels.slice(0, 3).join(", ")}
                </React.Fragment>
              }
            />
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
