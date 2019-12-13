import React, { Component } from "react";
import { Header, Footer } from "./Layout/index";
import Sources from "./Sources/index";
import { nutrients, sources } from "../store";

export class App extends Component {
  state = { sources };

  //state functions
  handleSourceSelected = id => {
    this.setState({ sourceSelected: id });
  };
  handleCategorySelected = category => {
    this.setState({ category });
  };
  //this method sorts sources based on the nutrient they provide
  getSourcesByNutrients() {
    const sources = {};
    nutrients.forEach(nutrient => {
      sources[nutrient] = this.state.sources.filter(source => {
        return source.nutrients === nutrient;
      });
    });

    return Object.entries(sources); // cool ES+ feature
  }

  render() {
    const sources = this.getSourcesByNutrients();
    const { category, sourceSelected } = this.state;

    return (
      <React.Fragment>
        <Header />
        <Sources
          sources={sources}
          category={category}
          onSelect={this.handleSourceSelected}
          sourceId={sourceSelected}
        />
        <Footer
          category={category}
          nutrients={nutrients}
          onSelect={this.handleCategorySelected}
        />
      </React.Fragment>
    );
  }
}

export default App;
