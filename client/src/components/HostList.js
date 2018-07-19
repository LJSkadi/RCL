import React, { Component } from 'react';
import api from '../api';
import './App.css';
import ComponentList from './ComponentList';
import CompDetail from './CompDetail';
import EditBtn from './CompEditButtons';
import { Col, Row, Button } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';
import CompAdd from './CompAdd';

class HostList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        components: [],
        toEdit: false
};
}

componentDidMount() {
api.getHostList()
.then(hostList => {
  this.setState({
    components: hostList._components
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
            <h2 className="listTitle">Hosted Components</h2> 
            <Row>
          <Col sm="6" className="order-sm-2">
            {<Route path="/host/:id" component={CompDetail} />}   
          </Col>
          <Col sm="6"  className="order-sm-1">
            <ComponentList components = {this.state.components} pathBeginning="/host" />
            <Button outline color="primary" style={{margin: '20px'}} ><Link to="/comp/add">ADD A COMPONENT</Link></Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HostList