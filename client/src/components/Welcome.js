import React, { Component } from 'react';
import api from '../api';
import './App.css';
import {
  Col, Card, CardText, CardBody,
  CardHeader, CardImg, CardLink,
  Button
} from 'reactstrap';

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      pictureUrl: "",
      github: "",
    }
  }

  componentDidMount() {
    api.getUser()
      .then(res => {
        console.log(res)
        this.setState({
          name: res.user.name,
          email: res.user.email,
          picture: res.user.pictureUrl,
          github: res.user.github,
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      
      <div>
        <h2 className="welcome">Welcome Developer!</h2>
        <Col className="d-flex justify-content-center">
        <Card className="Card" style={{ width: '20rem' }} >
          <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>{this.state.name}</CardHeader>
          <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
            <CardText className="text-center" style={{padding: '10px 10px 10px 10px'}}>
            <CardImg className="card-img-top" src={this.state.pictureUrl} alt="Card image cap" />
              <div>
                <p><strong>Email:</strong> {this.state.email}</p>
                <strong>Github-Profile:</strong>
                <CardLink style={{color: '#00d8ff'}}href={this.state.github}>{this.state.github}</CardLink>
              </div>
            </CardText>
          </CardBody>
        </Card>
      </Col>
      </div>
    );
  }
}

export default Welcome;
