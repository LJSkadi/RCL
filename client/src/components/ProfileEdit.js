import React, { Component } from 'react';
import api from '../api';
import {
  Col, Card, CardHeader, CardBody, CardText, CardImg, CardFooter, CardLink, Button,
  Form, FormGroup, Input, Label
} from 'reactstrap';

class ProfileEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameValid: true,
      githubValid: true,
      name: "",
      github: "",
      pictureUrl: "",
      file: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      nameValid: true,
      githubValid: true,
      name: this.props.name,
      github: this.props.github,
      pictureUrl: this.props.pictureUrl,

    })

  }

  handleChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value,
    })
  }

  handleFileChange(e) {
    this.setState({
      file: e.target.files[0]
    })
  }

  render() {
    return (
      <Card className="Card" style={{ width: '20rem' }} >
        <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>{this.props.name}</CardHeader>
        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
          <CardText className="text-center" style={{ padding: '10px 10px 10px 10px' }}>
            <CardImg className="card-img-top" src={this.props.pictureUrl} style={{ borderRadius: '10em', maxWidth: '20rem' }} alt="Card image cap" />
            <Form outline color="primary" onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
              <FormGroup row className="d-flex justify-content-center">
                <Label for="name" sm={10}>Name</Label>
                <Col sm={10}>
                  <Input
                    name="name"
                    type="text"
                    style={{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                    placeholder={this.props.name}
                    value={this.state.name}
                    onChange={(e) => this.handleChange("name", e)} />
                </Col>
              </FormGroup>
              <FormGroup row className="d-flex justify-content-center">
                <Label for="github" sm={10}>Github-Profile</Label>
                <Col sm={10}>
                  <Input
                    name="github"
                    type="text"
                    style={{ backgroundColor: '#3b3b3b', color: 'white', borderColor: '#00d8ff' }}
                    placeholder={this.props.github}
                    value={this.state.github}
                    onChange={(e) => { this.handleChange("github", e) }} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="repo" sm={10}>Upload a Profile Pic</Label>
                <Input className="form-control-file" onChange={this.handleFileChange} type="file" name="picture" />
                <br />
              </FormGroup>
              {this.props.toEdit && <Button type="submit" outline color="primary">Save</Button>}
            </Form>
          </CardText>
        </CardBody>
        <CardFooter className="CardFooter text-muted" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>Save your changes<br />
        </CardFooter>
      </Card>
    );
  }
}

export default ProfileEdit;

{/* <br />
  <Input
    type="password"
    style={{ backgroundColor: '#3b3b3b', color: 'white' }}
    placeholder="Password"
    value={this.state.password}
    onChange={(e) => { this.handleInputChange("password", e) }} />
  <br /> 

                  { this.state.nameValid && <FormFeedback valid>This username is availabe</FormFeedback> }
{ !this.state.nameValid && <FormFeedback invalid>This username is already taken</FormFeedback> }
{ this.state.githubValid && <FormFeedback valid>This githubProfile is not registered yet</FormFeedback> }
{ !this.state.githubValid && <FormFeedback invalid>This githubProfile is already registered!</FormFeedback> }

handleChange(stateFieldName, event) {
  let newInput = event.target.value;
  api.getUsers()
    .then(users => {
      let isTaken = false;
      let counter = 0;
      let thisValid = `${stateFieldName}Valid`;
      while (isTaken === false && counter < users.length) {
        let pathString = `users[counter].${stateFieldName}`;
        isTaken = ([pathString] === newInput) ? true : false;
        counter++;
      };
      if (isTaken) {
        this.setState({
          [thisValid]: true
        })
      } else {
        this.setState({
          [thisValid]: false
        })
      }
    })
    .chtch(err => {
      console.log(err)
    })
} */}