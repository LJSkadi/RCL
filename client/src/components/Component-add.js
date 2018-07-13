import React, { Component } from 'react';
import api from '../api';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardHeader, CardFooter, CardSubtitle, CardLink,
    InputGroup, InputGroupAddon, InputGroupText,
    FormGroup, FormFeedback, Input, Button
} from 'reactstrap';

class ComponentAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            githubRepo: "",
            npmLink: "",
            hashtags: [],
            tutorial: [],
            description: [],
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
                <Form>
                    <FormGroup row>
                        <Label for="ComponentName" sm={2}>Component-Name</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="ComponentName"
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.state.name}
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
                                placeholder="githubRepo"
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.state.githubRepo}
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
                                placeholder="npm-Link"
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.state.npmLink}
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
                                placeholder="Documentation-Link"
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.state.docLink}
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
                                style={{ backgroundColor: '#3b3b3b' }}
                                value={this.state.description}
                                onChange={(e) => { this.handleInputChange("description", e) }}
                            />
                            <FormText color="muted">
                                Please tell us a little bit more about your react component.
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-2">Does a tutorial exists?</legend>
                        <Col sm={10}>
                             <FormGroup check inline>
                                <Label check>
                                    <Input type="tutorial" value="yes" name="tutorial" />{' '}
                                    yes
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="tutorial" name="no" />{' '}
                                    no
                            </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Col>
            );
        }
    }
            
            
export default ComponentAdd;
