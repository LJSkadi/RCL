import React, { Component } from 'react';
import api from '../api';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardHeader, CardFooter, CardSubtitle, CardLink,
  InputGroup, InputGroupAddon, InputGroupText,
  FormGroup, FormFeedback, Input, Button
} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
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
    api.login(this.state.email, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {
    return (
      <Col className="d-flex justify-content-center">
        <Card className="Card" style={{ width: '20rem' }} >
          <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>Login</CardHeader>
          <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
            <CardText className="text-center">
              <form>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Email</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    style={{ backgroundColor: '#3b3b3b' }}
                    value={this.state.email}
                    onChange={(e) => { this.handleInputChange("email", e) }} />
                </InputGroup>
                <br />

                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Password</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    style={{ backgroundColor: '#3b3b3b' }}
                    value={this.state.password}
                    onChange={(e) => { this.handleInputChange("password", e) }} />
                </InputGroup>
                <br />
              </form>
            </CardText>
            <Button onClick={(e) => this.handleClick(e)}>Signup!</Button>
          </CardBody>
          <CardFooter
            className="CardFooter text-muted"
            style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>You don't have an account?<br />
            <CardLink href="/signup">Sign up!</CardLink>
          </CardFooter>
        </Card>
      </Col>
    );
  };
}

export default Login;
