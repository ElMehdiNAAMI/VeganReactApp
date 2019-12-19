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
  handleFoodToSearch = id => {
    this.setState(({ foodToSearch }) => {
      if (foodToSearch) {
        if (!foodToSearch.includes(id)) {
          return {
            foodToSearch: [...foodToSearch, id]
          };
        } else {
          return {
            foodToSearch: [...foodToSearch]
          };
        }
      } else {
        return { foodToSearch: [id] };
      }
    });
  };
  handleDeleteFoodToSearch = foodToDeleteId => {
    this.setState(({ foodToSearch }) => ({
      foodToSearch: foodToSearch.filter(food => food !== foodToDeleteId)
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

    return Object.entries(sources);
  }

  render() {
    const sources = this.getSourcesByNutrients();

    const { category, sourceSelected, foodToSearch } = this.state;

    return (
      <React.Fragment>
        <Header getSource={this.handleSourceAdded} />
        <Sources
          sources={sources}
          category={category}
          foodToSearch={foodToSearch}
          onSelect={this.handleSourceSelected}
          sourceId={sourceSelected}
          onDelete={this.handleSourceDeleted}
          onLookFor={this.handleFoodToSearch}
          onDeleteFoodToSearch={this.handleDeleteFoodToSearch}
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
