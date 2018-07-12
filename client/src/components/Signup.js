import React, { Component } from 'react';
import api from '../api';
import bootstrap from 'bootstrap';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardHeader, CardFooter, CardSubtitle, CardLink,
  InputGroup, InputGroupAddon, InputGroupText, 
  FormGroup, FormFeedback, Input, Button
} from 'reactstrap';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      password: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
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
              <form>
                  <FormGroup>
                  <Input valid
                    type="text"
                    style={{ backgroundColor: '#3b3b3b' }}
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => { this.handleInputChange("email", e) }} />
                    <FormFeedback valid>This email is valid</FormFeedback>
                    <FormFeedback invalid>This email is already registered</FormFeedback>
                </FormGroup>
                <br />
                <FormGroup>
                  <Input valid
                    type="text"
                    style={{ backgroundColor: '#3b3b3b' }}
                    placeholder="Username"
                    value={this.state.name}
                    onChange={(e) => { this.handleInputChange("name", e) }} />
                    <FormFeedback valid>This username is available</FormFeedback>
                    <FormFeedback invalid>This username is already taken</FormFeedback>
                </FormGroup>
                <br />
                  <Input
                    type="password"
                    style={{ backgroundColor: '#3b3b3b' }}
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => { this.handleInputChange("password", e) }} />
                <br />
                <FormGroup>
                  <Input valid
                    type="text"
                    style={{ backgroundColor: '#3b3b3b' }}
                    placeholder="Link to your githubProfile"
                    value={this.state.github}
                    onChange={(e) => { this.handleInputChange("github", e) }} />
                    <FormFeedback valid>This githubProfile is not registered yet</FormFeedback>
                    <FormFeedback invalid>This githubProfile is already registered!</FormFeedback>
                    </FormGroup>
                <br />
              </form>
            </CardText>
            <Button onClick={(e) => this.handleClick(e)}>Signup!</Button>
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




