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
                        <CardHeader className="CardHeader welcome" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>{this.props.name}</CardHeader>
                        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
                            <CardText style={{ padding: '10px 10px 10px 10px' }}>
                                <CardImg className="card-img-top" style={{ borderRadius: '10em', maxWidth: '20rem' }} src={this.props.pictureUrl} alt="Card image cap" />
            <Col className="d-flex justify-content-center ">
            <Row><strong>Email:</strong> {this.props.email}</Row>

            <Row><strong>Github:</strong> {this.props.github}</Row>
            </Col>
          </CardText>
        </CardBody>
        <CardFooter className="CardFooter text-muted" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>
            <Button outline color="success" handleClick={this.props.handleSubmit}>Edit</Button><br />
        </CardFooter>
      </Card>
    );
  }
}

export default Profile;

import React, { Component } from 'react';	
import api from '../api';	
import {	
  Col, Card, CardText, CardBody,	
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
    //this.handleInputChange = this.handleInputChange.bind(this);	
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
              <form>	
                  <FormGroup>	
                  <Input valid	
                    type = "text"	
                    name = "email"	
                    style = {{ backgroundColor: '#3b3b3b', color: 'white' }}	
                    placeholder="Email"	
                    value = {this.props.email}	
                    onChange={(e) => { this.handleInputChange("email", e) }} />	
                    <FormFeedback   	
                      style={{color:'#25dbff', borderColor:'#25dbff'}} 	
                      valid>This email is valid</FormFeedback>	
                    <FormFeedback 	
                      invalid>This email is already registered</FormFeedback>	
                </FormGroup>	
                <br />	
                <FormGroup>	
                  <Input valid	
                    type = "text"	
                    name = "name"	
                    style = {{ backgroundColor: '#3b3b3b', color: 'white' }}	
                    placeholder = "Username"	
                    value = {this.props.name}	
                    onChange = {(e) => { this.handleInputChange("name", e) }} />	
                    <FormFeedback valid>This username is available</FormFeedback>	
                    <FormFeedback invalid>This username is already taken</FormFeedback>	
                </FormGroup>	
                <br />	
                  <Input	
                    type = "password"	
                    name = "password"	
                    style = {{ backgroundColor: '#3b3b3b', color: 'white' }}	
                    placeholder = "Password"	
                    value = {this.props.password}	
                    onChange={(e) => { this.handleInputChange("password", e) }} />	
                <br />	
                <FormGroup>	
                  <Input valid	
                    type = "url"	
                    name = "github"	
                    style = {{ backgroundColor: '#3b3b3b', color: 'white' }}	
                    placeholder = "Link to your githubProfile"	
                    value = {this.props.github}	
                    onChange = {(e) => { this.handleInputChange("github", e) }} />	
                    <FormFeedback valid>This githubProfile is not registered yet</FormFeedback>	
                    <FormFeedback invalid>This githubProfile is already registered!</FormFeedback>	
                    </FormGroup>	
                <br />	
            <Button onClick={this.handleClick}>Signup!</Button>	
              </form>	
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
    //this.handleInputChange = this.handleInputChange.bind(this);
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
              <Form>
                  <FormGroup>
                  <Input valid
                    type = "text"
                    name = "email"
                    style = {{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                    placeholder="Email"
                    value = {this.props.email}
                    onChange={(e) => { this.handleInputChange("email", e) }} />
                </FormGroup>
                <br />
                <FormGroup>
                  <Input valid
                    type = "text"
                    name = "name"
                    style = {{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                    placeholder = "Username"
                    value = {this.props.name}
                    onChange = {(e) => { this.handleInputChange("name", e) }} />
                </FormGroup>
                <br />
                <FormGroup>
                  <Input
                    type = "password"
                    name = "password"
                    style = {{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                    placeholder = "Password"
                    value = {this.props.password}
                    onChange={(e) => { this.handleInputChange("password", e) }} />
                    </FormGroup>
                <br />
                <FormGroup>
                  <Input valid
                    type = "url"
                    name = "github"
                    style = {{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                    placeholder = "Link to your githubProfile"
                    value = {this.props.github}
                    onChange = {(e) => { this.handleInputChange("github", e) }} />
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
              <Form>
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

import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import api from '../api';
import {
    Col, Card, CardText, CardBody,
    CardHeader, CardFooter, CardLink,
    InputGroup, InputGroupAddon, InputGroupText, Input, Button
} from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(stateFieldName, event) {
        let newState = {}
        newState[stateFieldName] = event.target.value
        this.setState(newState)
    }

    handleClick(e) {
        e.preventDefault()
        console.log(this.state)
        api.login(this.state.email, this.state.password)
            .then(result => {
                console.log('SUCCESS!')
                this.props.history.push("/")  // Redirect to the home page
            })
            .catch(err => {
                console.log('ERROR', err)
            })
    }

    render() {
        return (
            <Col className="d-flex justify-content-center">
                <Card className="Card" style={{ width: '20rem' }} >
                    <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>Login</CardHeader>
                    <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
                        <CardText className="text-center">
                            <Form>
                                <FormGroup row className="d-flex justify-content-center">
                                    <Label for="email" sm={10}>Email</Label>
                                    <Col sm={10}>
                                        <Input
                                            type="text"
                                            name="email"
                                            style={{ backgroundColor: '#3b3b3b', color: 'white' }}
                                            value={this.state.email}
                                            onChange={(e) => { this.handleInputChange("email", e) }} />
                                    </Col>
                                </FormGroup>
                                <br />
                                <FormGroup row className="d-flex justify-content-center">
                                    <Label for="password" sm={10}>Password</Label>
                                    <Col sm={10}>
                                        <Input valid
                                            type="password"
                                            name="password"
                                            style={{ backgroundColor: '#3b3b3b', color: 'white' }}
                                            value={this.state.password}
                                            onChange={(e) => { this.handleInputChange("password", e) }} />
                                    </Col>
                                </FormGroup>
                                <br />
                                <Button onClick={this.handleClick}>Login</Button>
                            </Form>
                        </CardText>
                    </CardBody>
                    <CardFooter
                        className="CardFooter text-primary"
                        style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>You don't have an account?<br />
                        <CardLink href="/signup" >Sign up!</CardLink>
                    </CardFooter>
                </Card>
            </Col>
        );
    };
}
export default Login;