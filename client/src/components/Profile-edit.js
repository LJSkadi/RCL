import React, { Component } from 'react';
import api from '../api';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardHeader, CardFooter, CardSubtitle, CardLink,
    InputGroup, InputGroupAddon, InputGroupText, 
    FormGroup, Form, FormFeedback, Input, Button, Label
} from 'reactstrap';

class ProfileEdit extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: "",
    //         email:"",
    //         github: "",
    //         pictureUrl: "",
    //         //password: "",
    //     }

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // componentDidMount() {
    //     api.getComponent()
    //       .then(component => {
    //         console.log(component)
    //         this.setState({
    //             name: component.name,
    //             githubRepo: component.githubRepo,
    //             npmLink: component.npmLink,
    //             hashtags: component.hashtags, //Array
    //             tutorial: component.tutorial,   //Array
    //             description: component.description, //Array
    //         })
    //       })
    //       .catch(err => console.log(err))
    //   }

    // handleClick(e) {
    //     e.preventDefault()
    //     console.log(this.state.name, this.state.description)
    //     let data = {
    //         name: this.state.name,
    //         githubRepo: this.state.githubRepo,
    //         npmLink: this.state.npmLink,
    //         hashtags: this.state.hashtags,
    //         tutorial: this.state.tutorial
    //     }
    //     api.editComponent(data)
    //       .then(result => {
    //         console.log('SUCCESS!')
    //         this.setState({
    //             name: this.state.name,
    //             githubRepo: this.state.githubRepo,
    //             npmLink: this.state.npmLink,
    //             hashtags: this.state.hashtags,
    //             tutorial: this.state.tutorial,
    //             message: `Your component '${this.state.name}' has been edited`
    //         })
    //         setTimeout(() => {
    //           this.setState({
    //             message: null
    //           })
    //         }, 2000)
    //       })
    //       .catch(err => {
    //         console.log('ERROR')
    //       })
    //   }

    // handleInputChange(stateFieldName, event) {
    //     let newState = {}
    //     newState[stateFieldName] = event.target.value
    //     this.setState(newState)
    // }

    render() {
        return (
        <Col className="d-flex justify-content-center">
        <Card className="Card" style={{ width: '20rem' }} >
        <CardImg top width="100%" src={this.props.p} alt="Card image cap" />
          <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>{this.props.name}</CardHeader>
          <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
            <CardText className="text-center">
              <form>
                  <FormGroup>
                  <Input invalid
                    type="text"
                    style={{ backgroundColor: '#3b3b3b', color: 'white' }}
                    placeholder="Email"
                    value={this.props.email}
                    onChange={(e) => { this.handleInputChange("email", e) }} />
                    <FormFeedback invalid>You can't change your email-address</FormFeedback>
                </FormGroup>
                <br />
                <FormGroup>
                  <Input invalid
                    type="text"
                    style={{ backgroundColor: '#3b3b3b', color: 'white' }}
                    placeholder="Username"
                    value={this.state.name}
                    onChange={(e) => { this.handleInputChange("name", e) }} />
                    <FormFeedback invalid>This username is already taken</FormFeedback>
                </FormGroup>
                <br />
                  <Input
                    type="password"
                    style={{ backgroundColor: '#3b3b3b', color: 'white' }}
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => { this.handleInputChange("password", e) }} />
                <br />
                <FormGroup>
                  <Input valid
                    type="url"
                    style={{ backgroundColor: '#3b3b3b', color: 'white' }}
                    placeholder="Link to your githubProfile"
                    value={this.state.github}
                    onChange={(e) => { this.handleInputChange("github", e) }} />
                    <FormFeedback valid>This githubProfile is not registered yet</FormFeedback>
                    <FormFeedback invalid>This githubProfile is already registered!</FormFeedback>
                    </FormGroup>
                <FormGroup>
                    <Input className="form-control-file" type="file" name="photo"/>
                <br />
                </FormGroup>
              </form>
            </CardText>
            <Button color="success" onClick={(e) => this.handleClick(e).bind(this)}>Edit</Button>
          </CardBody>
        </Card>
      </Col>
            );
        }
    }
            
   export default ProfileEdit;     