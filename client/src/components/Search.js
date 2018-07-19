import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ComponentList from './ComponentList';
import CompDetail from './CompDetail';
import api from '../api';
import { Col, Row } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';


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
    let prevProps = this.state.searchTerm;
    this.setState({
      searchTerm: event.target.value,
    });
    this.componentDidUpdate(prevProps)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params) {
        this.componentDidMount()
    }
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
        <Row>
          <Col sm="6" className="order-sm-2">
            <Route path="/search/:id" component={CompDetail} />
          </Col>
          <Col sm="6"  className="order-sm-1">
            <ComponentList components={filteredComponents} pathBeginning="/search" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Search;




//?  component : (}