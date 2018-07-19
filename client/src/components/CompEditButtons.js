import React, { Component } from 'react';
import './App.css';
import { Row, Button } from 'reactstrap';


class EditBtn extends Component {


  render() {
    return (
<Row className="d-flex justify-content-center">
            <Button style={{ margin: '10px 10px 10px 10px' }} outline color="success" onClick={this.props.handleEClick}>Edit</Button>
            <Button style={{ margin: '10px 10px 10px 10px' }} outline color="danger" onClick={this.props.handleDClick}>Delete</Button>
</Row>
    );
  }
}

export default EditBtn;