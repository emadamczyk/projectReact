import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import ExternalAPI from "../utils/ExternalAPI";


class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchBikeIncidents("chicago");
  }

  searchBikeIncidents = query => {
    ExternalAPI.search(query)
      .then(res => this.setState({ results: res.data.incidents }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBikeIncidents(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
