import React, { Component } from 'react';
import api from '../api';
import {
  Col, Row, Card, CardHeader, CardBody, CardText, CardImg, CardFooter, CardLink, Button,
  Form, FormGroup, Input, Label
} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      github: "",
      pictureUrl: ""
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      github: this.props.github,
      pictureUrl: this.props.pictureUrl,

    })

  }


  render() {
    return (
      <Card className="Card d-flex justify-content-center flex-column" style={{ maxWidth: '40rem' }} >
        <CardHeader className="CardHeader welcome" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>{this.props.name}</CardHeader>
        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
            <CardImg className="card-img-top" style={{ borderRadius: '10em', maxWidth: '20rem' }} src={this.props.pictureUrl} alt="Card image cap" />
          <CardText style={{ padding: '10px 10px 10px 10px' }}>
            <Col>
              <Row className={"justify-content-center"} sm={10}>
               <h6><strong>Email: </strong>{this.props.email}</h6></Row>
              <Row className={"justify-content-center"} sm={10}>
              <h6><strong>Github: </strong>{this.props.github}</h6></Row>
            </Col>
          </CardText>
        </CardBody>
        <CardFooter className="CardFooter text-muted" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>
          <Button outline color="success" onClick={this.props.handleClick}>Edit</Button><br />
        </CardFooter>
      </Card>
    );
  }
}

export default Profile;
