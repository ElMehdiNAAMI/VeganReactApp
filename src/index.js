import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
console.log(green);

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: green[800] },
    secondary: { main: green[100] }
  }
});
console.log(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
