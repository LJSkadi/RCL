import React, { Component } from 'react';
import api from '../api';
import './App.css';
import ComponentList from './ComponentList';
import CompDetail from './CompDetail';
import CompEdit from './CompEdit';
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
this.handleSubmitClick=this.handleSubmitClick.bind(this)
this.handleDeleteClick=this.handleDeleteClick.bind(this)
this.handleEditClick=this.handleEditClick(this)
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

handleEditClick(e){
  this.setState({
    toEdit: true,
  })
}

handleSubmitClick(e){
  this.setState({
    toEdit: false,
  })
}

handleDeleteClick(event) {
  let compId = this.state.id;
  api.deleteComponent(compId)
      .then(res => {
          this.componentDidMount();
      })
      .catch(err => console.log(err))
}

  render() {
    return (
      <div>
            <h2 className="listTitle">Hosted Components</h2> 
            <Row>
          <Col sm="6" className="order-sm-2">
            {<Route path="/host/:id" component={CompDetail} />}
            {!this.state.toEdit && <EditBtn className="d-flex justify-content-center" handleEClick={this.handleEditClick} handleDClick={this.handleDeleteClick}/>}
            {this.state.toEdit && <CompEdit handleEditSubmit={this.handleSubmitClick}/>}           
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