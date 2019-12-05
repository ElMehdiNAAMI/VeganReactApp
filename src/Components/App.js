import React, { Component } from "react";
import { Header, Footer } from "./Layout/index";
import Exercices from "./Exercices/index";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercices />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
