import React, { Component } from 'react';
import {
    Col, Form, FormGroup, Label, Input, Button
  } from 'reactstrap';



class NameInsert extends Component {

    render() {
        return (
                    <FormGroup row>
                        <Label for="name" sm={2}>Under which name is the module or component published on NPM?</Label>
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
                            />
                        </Col>
                        <Button onSubmit={(e) => { this.props.handleInput("name", e) }}>Submit</Button>
                    </FormGroup>
        )
    }
}

export default NameInsert;