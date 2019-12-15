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
  handleSourceAdded = addedObj => {
    addedObj.id = addedObj.title;
    this.setState(({ sources }) => ({
      sources: [...sources, addedObj]
    }));
  };
  handleSourceDeleted = id => {
    this.setState(({ sources }) => ({
      sources: sources.filter(sourceObj => sourceObj.id !== id)
    }));
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
        <Header getSource={this.handleSourceAdded} />
        <Sources
          sources={sources}
          category={category}
          onSelect={this.handleSourceSelected}
          sourceId={sourceSelected}
          onDelete={this.handleSourceDeleted}
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
