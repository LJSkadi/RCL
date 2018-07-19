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
      <Card className="Card" style={{ maxWidth: '40rem' }} >
        <CardHeader className="CardHeader welcome" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>{this.state.name}</CardHeader>
        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
          <CardText style={{ padding: '10px 10px 10px 10px' }}>
            <CardImg className="card-img-top" style={{ borderRadius: '10em', maxWidth: '20rem' }} src={this.props.pictureUrl} alt="Card image cap" />
            <Col className="d-flex justify-content-center flex-column">
              <Row>
              <Label for="email" sm={10}>Email</Label>
               {this.props.email}</Row>
               
              <Row>
                <Label for="github" sm={10}>Github</Label> 
                {this.props.github}</Row>
            </Col>
          </CardText>
        </CardBody>
        <CardFooter className="CardFooter text-muted" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>
          <Button outline color="success" onClick={this.props.}>Edit</Button><br />
        </CardFooter>
      </Card>
    );
  }
}

export default Profile;
