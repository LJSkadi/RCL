import React, { Component } from 'react';
import api from '../api';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink, Button } from 'reactstrap';

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
        <div>
          <Card>
            <CardImg top width="100%" src="https://res.cloudinary.com/dazh9innn/image/upload/v1531253139/anonymous.png/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody className="text-center" outline color="secondary" inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Sign up</CardTitle>
              <CardText className="text-right"> 
              <form>
              Email: <input type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/>
              Name: <input type="text" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} /> <br/>
              Password: <input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/>
            </form>
              </CardText>
              <Button onClick={(e) => this.handleClick(e)}>Signup!</Button>
              <p>You have already an account?</p>
              <CardLink href="/login">Login</CardLink>
            </CardBody>
          </Card>
        </div>
      );
    };
}

export default Signup;




