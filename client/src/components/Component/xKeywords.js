import React, { Component } from 'react';
import {
    InputGroup, InputGroupAddon, InputGroupText, Input, Button
  } from 'reactstrap';



class License extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
            <Col className="d-flex justify-content-center">
                <Form>
                    <FormGroup row>
                        <Label for="ComponentName" sm={2}>Component-Name</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="License"
                                style={{ backgroundColor: '#3b3b3b',
                                         color: 'white',
                                         margin: '0 auto',
                                         maxWidth: 800 }}
                                value={this.props.license}
                            />
                        </Col>
                    </FormGroup>
                    <Button onSubmit={(e) => { this.handleInput("license", e) }}>Submit</Button>
                </Form>
            </Col>
            </div>
        )
    }
}

export default License;




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