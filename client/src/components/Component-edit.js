import React, { Component } from 'react';
import api from '../api';
import {
    Col, InputGroup, InputGroupAddon, InputGroupText,
    FormGroup, Form, FormGroup, FormFeedback, Label, Input, Button
} from 'reactstrap';

class ComponentEdit extends Component {
    constructor(props) {
        super(props)
        super(props)
        this.state = {
            name: "",
            githubRepo: "",
            npmLink: "",
            hashtags: [],
            tutorial: [],
            description: [],
            message: null
        }
    }

    componentDidMount() {
        api.getComponent()
          .then(component => {
            console.log(component)
            this.setState({
                name: component.name,
                githubRepo: component.githubRepo,
                npmLink: component.npmLink,
                hashtags: component.hashtags, //Array
                tutorial: component.tutorial,   //Array
                description: component.description, //Array
            })
          })
          .catch(err => console.log(err))
      }

    handleClick(e) {
        e.preventDefault()
        console.log(this.state.name, this.state.description)
        let data = {
            name: this.state.name,
            githubRepo: this.state.githubRepo,
            npmLink: this.state.npmLink,
            hashtags: this.state.hashtags,
            tutorial: this.state.tutorial
        }
        api.editComponent(data)
          .then(result => {
            console.log('SUCCESS!')
            this.setState({
                name: this.state.name,
                githubRepo: this.state.githubRepo,
                npmLink: this.state.npmLink,
                hashtags: this.state.hashtags,
                tutorial: this.state.tutorial,
                message: `Your component '${this.state.name}' has been edited`
            })
            setTimeout(() => {
              this.setState({
                message: null
              })
            }, 2000)
          })
          .catch(err => {
            console.log('ERROR')
          })
      }

    handleInputChange(stateFieldName, event) {
        let newState = {}
        newState[stateFieldName] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            <Col className="d-flex justify-content-center">
                <Form>
                    <FormGroup row>
                        <Label for="ComponentName" sm={2}>Component-Name</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder={this.props.name}
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.props.name}
                                onChange={(e) => { this.handleInputChange("name", e) }}
                            />

                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="github-Repo" sm={2}>github-Repo</Label>
                        <Col sm={10}>
                            <Input
                                type="url"
                                name="githubRepo"
                                id="githubRepo"
                                placeholder={this.props.githubRepo}
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.props.githubRepo}
                                onChange={(e) => { this.handleInputChange("githubRepo", e) }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="npmLink" sm={2}>npm-Link</Label>
                        <Col sm={10}>
                            <Input
                                type="url"
                                name="npmLink"
                                id="npmLink"
                                placeholder={this.props.npmLink}
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.props.npmLink}
                                onChange={(e) => { this.handleInputChange("npmLink", e) }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="docLink" sm={2}>Doc-Link</Label>
                        <Col sm={10}>
                            <Input
                                type="url"
                                name="docLink"
                                id="docLink"
                                placeholder={this.props.docLink}
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.props.docLink}
                                onChange={(e) => { this.handleInputChange("docLink", e) }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                placeholder={this.props.description}
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.props.description}
                                onChange={(e) => { this.handleInputChange("description", e) }}
                            />
                            <FormText color="muted">
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-2">Does a tutorial exists?</legend>
                        <Col sm={10}>
                             <FormGroup check inline>
                                <Label check>
                                    <Input 
                                    type ="tutorial" 
                                    value ="yes" 
                                    name ="tutorial" />{' '}
                                    yes
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input 
                                    type="tutorial" 
                                    value="no"
                                    checked="checked"
                                    name="tutorial" />{' '}
                                    no
                            </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <Button outline color="primary">Submit</Button>
                </Form>
            </Col>
            );
        }
    }
            
            
export default ComponentEdit;