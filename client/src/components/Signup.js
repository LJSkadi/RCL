import React, { Component } from 'react';
import api from '../api';
import {
  Col, Card, CardText, CardBody, Form,
  CardHeader, CardFooter, CardLink,
  FormGroup, FormFeedback, Input, Button
} from 'reactstrap';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      password: "",
      pictureUrl: "",
      github: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value;
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      pictureUrl: this.state.pictureUrl,
      github: this.state.github
    }
    console.log(data)
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/login") // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {
    return (
      <Col className="d-flex justify-content-center">
        <Card className="Card" style={{ width: '20rem' }} >
          <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>Sign up</CardHeader>
          <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
            <CardText className="text-center">
              <Form outline color="primary">
                <FormGroup row className="d-flex justify-content-center">
                  <Label for="email" sm={10}>Email</Label>
                  <Col sm={10}>
                    <Input valid
                      type="text"
                      name="email"
                      style={{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                      placeholder="Email"
                      value={this.props.email}
                      onChange={(e) => { this.handleInputChange("email", e) }} />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row className="d-flex justify-content-center">
                  <Label for="name" sm={10}>Name</Label>
                  <Col sm={10}>
                    <Input valid
                      type="text"
                      name="name"
                      style={{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                      placeholder="Username"
                      value={this.props.name}
                      onChange={(e) => { this.handleInputChange("name", e) }} />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row className="d-flex justify-content-center">
                  <Label for="password" sm={10}>Password</Label>
                  <Col sm={10}>
                    <Input valid
                      type="password"
                      name="password"
                      style={{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                      placeholder="Password"
                      value={this.props.password}
                      onChange={(e) => { this.handleInputChange("password", e) }} />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row className="d-flex justify-content-center">
                  <Label for="github" sm={10}>Github-Profile</Label>
                  <Col sm={10}>
                    <Input valid
                      type="url"
                      name="github"
                      style={{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                      placeholder="Link to your githubProfile"
                      value={this.props.github}
                      onChange={(e) => { this.handleInputChange("github", e) }} />
                  </Col>
                </FormGroup>
                <br />
                <Button onClick={this.handleClick}>Signup!</Button>
              </Form>
            </CardText>
          </CardBody>
          <CardFooter className="CardFooter text-muted" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>You have already an account?<br />
            <CardLink href="/login">Login</CardLink>
          </CardFooter>
        </Card>
      </Col>
    );
  };
}

export default Signup;