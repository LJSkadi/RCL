import React, { Component } from 'react';
import api from '../api';
import './App.css';
import ComponentList from './ComponentList';
import CompDetail from './CompDetail';
import { Col, Row } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';


class BookmarkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: []
    };
  }

  componentDidMount() {
    api.getBookmarkList()
      .then(BookmarkList => {
        this.setState({
          components: BookmarkList._components
        })
      })
      .catch(err => console.log(err))
  }

      componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.componentDidMount()
        }
    }

  render() {
    return (
      <div>
        <h2 className="listTitle">My Bookmarks</h2>
        <Row>
          <Col sm="6" className="order-sm-2">
            <Route path="/bm/:id" component={CompDetail} />
          </Col>
          <Col sm="6" className="order-sm-1">
            <ComponentList components={this.state.components} pathBeginning="/bm" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BookmarkList