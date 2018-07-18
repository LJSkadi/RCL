import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ComponentList from './ComponentList';
import api from '../api';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      components: [],
      searchTerm: ''
    };
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount() {
    api.getComponents()
      .then(res => {
        console.log(res);
        let { components } = res;
        this.setState({
          components
        })
      })
      .catch(err => console.log(err))
  }

  updateSearch(event) {

    this.setState({
      searchTerm: event.target.value,
    });

  }

  render() {
    let filteredComponents = this.state.components.filter((component) => {
      let isIncludedInHashtag = false;
      let hashCount = 0
      while (isIncludedInHashtag !== true && hashCount < component.hashtags.length) {
        if ((component.hashtags[hashCount].toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) !== -1) === true) {
          return true
        }
        hashCount++;
      }
      return (component.name.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) !== -1)
    });
    console.log(filteredComponents)
    return (
      <div>
        <SearchBar components={this.state.components} onSearch={this.updateSearch} />
        <ComponentList components={filteredComponents}/>
      </div>
    )
  }
}

export default Search;




//?  component : (}