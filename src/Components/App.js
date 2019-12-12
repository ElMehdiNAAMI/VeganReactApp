import React, { Component } from "react";
import { Header, Footer } from "./Layout/index";
import Exercices from "./Exercices/index";
import { nutrients, sources } from "../store";

export class App extends Component {
  state = { sources };

  handleCategorySelected = category => {
    this.setState({ category });
  };
  //this method sorts sources based on the nutrient they provide
  getSourcesByNutrients() {
    /* the video method
    return this.state.sources.reduce((sources, source) => {
      const nutrients = source.nutrients;

      sources[nutrients] = sources[nutrients]
        ? [...sources[nutrients], source]
        : [source];
      return sources;
    }, {});
    */
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
    const { category } = this.state;

    return (
      <React.Fragment>
        <Header />
        <Exercices sources={sources} category={category} />
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
