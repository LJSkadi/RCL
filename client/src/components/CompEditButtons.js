import React, { Component } from 'react';
import './App.css';
import { Row, Button } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';


class EditBtn extends Component {


  render() {
    return (
<Row className="d-flex justify-content-center">
            <Button style={{ margin: '10px 10px 10px 10px' }} outline color="success" onClick={this.props.handleEClick}><Link tag="a" style={{color: 'success'}} to={`/host/edit/${this.props.id}`}>Edit</Link></Button>
            <Button style={{ margin: '10px 10px 10px 10px' }} outline color="danger" onClick={this.props.handleDClick}>Delete</Button>
</Row>
    );
  }
}

export default EditBtn;