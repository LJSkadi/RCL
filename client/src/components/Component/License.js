import React, { Component } from 'react';
import {
    Col, Form, FormGroup, Label, Input, Button
  } from 'reactstrap';



class License extends Component {

    render() {
        return (
                    <FormGroup row>
                        <Label for="licence" sm={2}>License</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="license"
                                id="license"
                                placeholder="License"
                                style={{ backgroundColor: '#3b3b3b',
                                         color: 'white',
                                         margin: '0 auto',
                                         maxWidth: 800 }}
                                value={this.props.license}
                            />
                        </Col>
                        <Button onSubmit={(e) => { this.props.handleInput("license", e) }}>Submit</Button>
                    </FormGroup>
        )
    }
}

export default License;