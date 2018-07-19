import React, { Component } from 'react';
import {
    Col, Form, FormGroup, FormText, Label, Input, Button
} from 'reactstrap';



class ShowInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            repo: "",
            npmLink: "",
            docLink:"",
            hashtags: [],
            tutorial: "",
            description: [],
            license: "",
        }
        this.handleInput = this.handleInput.bind(this)
    }
    componentDidMount() {
        this.setState({
            name: this.props.name,
            repo: this.props.repo,
            npmLink: this.props.npmLink,
            docLink:this.props.docLink,
            hashtags: this.props.hashtags,
            tutorial: this.props.tutorial,
            description: this.props.description,
            license: this.props.license,            
          })
        }


    handleInput(stateFieldName, event) {
        this.setState({
            [stateFieldName]: event.target.value,
        })
    }
    render() {
        return (
            <div>
            <Form outline color="primary" style={{margin: '10px 0 10px 0'}} onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
                <FormGroup row>
                    <Label for="repo" sm={10}>Repository</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="repo"
                            placeholder={this.props.repo}
                            value={this.state.repo}
                            style={{
                                backgroundColor: '#3b3b3b',
                                color: 'white',
                                margin: '0 auto',
                                maxWidth: 800
                            }}
                            onChange={(e) => this.handleInput("name", e)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="npmLink" sm={10}>NPM</Label>
                    <Col sm={10}>
                        <Input
                            type="url"
                            name="npmLink"
                            placeholder={this.props.npmLink}
                            value={this.state.npmLink}
                            style={{
                                backgroundColor: '#3b3b3b',
                                color: 'white',
                                margin: '0 auto',
                                maxWidth: 800
                            }}
                            onChange={(e) => this.handleInput("name", e)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="docLink" sm={10}>Documentation-Link</Label>
                    <Col sm={10}>
                        <Input
                            type="url"
                            name="docLink"
                            placeholder={this.props.docLink}
                            value={this.state.docLink}
                            style={{
                                backgroundColor: '#3b3b3b',
                                color: 'white',
                                margin: '0 auto',
                                maxWidth: 800
                            }}
                            onChange={(e) => this.handleInput("name", e)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup tag="fieldset" row>
                        <Label for="tutorial"sm={10}>Does a tutorial exists?</Label>
                        <Col sm={10}>
                             <FormGroup check inline>
                                    <Input 
                                    type ="radio" 
                                    name ="tutorial" />{' '}
                                    yes
                            </FormGroup>
                            <FormGroup check inline>
                                    <Input 
                                    type="radio" 
                                    checked="checked"
                                    name="tutorial" />{' '}
                                    no
                            </FormGroup>
                        </Col>
                    </FormGroup>

                <FormGroup row>
                    <Label for="hashtags" sm={10}>Keywords</Label>
                    <Col sm={10}>
                        <Input
                            type="textarea"
                            name="hashtags"
                            placeholder={this.props.hashtags}
                            value={this.state.hashtags}
                            style={{
                                backgroundColor: '#3b3b3b',
                                color: 'white',
                                margin: '0 auto',
                                maxWidth: 800
                            }}
                            onChange={(e) => this.handleInput("name", e)}
                        />
                        <FormText color="muted">Please enter at least one keyword</FormText>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="description" sm={10}>Description</Label>
                    <Col sm={10}>
                        <Input
                            type="textarea"
                            name="description"
                            placeholder={this.props.description}
                            value={this.state.description}
                            style={{
                                backgroundColor: '#3b3b3b',
                                color: 'white',
                                margin: '0 auto',
                                maxWidth: 800
                            }}
                            onChange={(e) => this.handleInput("name", e)}
                        />
                        <FormText color="muted">Let us know, what your component does!</FormText>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="licence" sm={10}>License</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="license"
                            id="license"
                            placeholder={this.props.license}
                            value={this.state.license}
                            style={{
                                backgroundColor: '#3b3b3b',
                                color: 'white',
                                margin: '20 auto',
                                maxWidth: 800
                            }}
                            onChange={(e) => this.handleInput("name", e)}
                        />
                        
                    </Col>
                </FormGroup>
                Everything is correct?
                <Button type="submit" >Save my Component</Button>
                </Form>
                </div>
                    )
                }
            }
            
export default ShowInfo;